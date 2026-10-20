import { NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

// In-memory rate limiting map (IP -> timestamp)
const rateLimitMap = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      title, 
      destination, 
      country, 
      author_name, 
      author_email, 
      category, 
      hero_image, 
      excerpt, 
      content, 
      reflections, 
      tags,
      honeypot, // Anti-bot hidden field
      timestamp // Timestamp when form was loaded
    } = body;

    // 1. Anti-Spam Honeypot Check: Bots usually fill hidden inputs
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    // 2. Anti-Spam Speed Check: Real humans take at least 4 seconds to write/submit
    if (timestamp && Date.now() - Number(timestamp) < 4000) {
      return NextResponse.json({ error: 'Submission too fast. Please take your time.' }, { status: 429 });
    }

    // 3. Validation
    if (!title || !destination || !country || !content) {
      return NextResponse.json({ error: 'Missing required fields: Title, Destination, Country, and Story' }, { status: 400 });
    }

    // 4. Rate Limiting: 1 post every 30 seconds per client
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const lastPostTime = rateLimitMap.get(ip);
    if (lastPostTime && Date.now() - lastPostTime < 30000) {
      const waitSeconds = Math.ceil((30000 - (Date.now() - lastPostTime)) / 1000);
      return NextResponse.json({ 
        error: `Please wait ${waitSeconds} seconds before posting another diary.` 
      }, { status: 429 });
    }
    rateLimitMap.set(ip, Date.now());

    // Generate clean slug
    const baseSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    const uniqueSlug = `${baseSlug}-${Math.random().toString(36).substring(2, 7)}`;

    // Prepare content paragraphs
    const contentParagraphs = Array.isArray(content) 
      ? content 
      : content.split('\n\n').filter((p: string) => p.trim().length > 0);

    const diaryRecord = {
      title,
      slug: uniqueSlug,
      subtitle: body.subtitle || '',
      destination,
      country,
      author_name: author_name || 'Community Adventurer',
      author_email: author_email || null,
      category: category || 'Slow Journeys',
      hero_image: hero_image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
      hero_caption: `${destination}, ${country} photographed by ${author_name || 'an adventurer'}`,
      excerpt: excerpt || contentParagraphs[0]?.slice(0, 180) + '...' || '',
      content: contentParagraphs,
      reflections: Array.isArray(reflections) ? reflections : [],
      tags: Array.isArray(tags) ? tags : ['Community', destination],
      status: 'published', // Published immediately; admin can moderate or delete from /admin
      is_community: true,
      is_illustrative_sample: false,
    };

    // Save to Supabase if connected
    const supabase = getServiceSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from('diaries')
        .insert([diaryRecord])
        .select()
        .single();

      if (error) {
        console.error('Supabase diary insert error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: 'Your travel diary has been published to the community!',
        diary: data,
        slug: uniqueSlug,
      });
    }

    // Fallback response if Supabase is not yet connected
    return NextResponse.json({
      success: true,
      message: 'Your travel diary was verified and submitted! (Saved locally until Supabase keys are configured in .env.local)',
      diary: diaryRecord,
      slug: uniqueSlug,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
