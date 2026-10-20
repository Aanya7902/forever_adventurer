import { NextResponse } from 'next/server';
import { getServiceSupabase, isSupabaseConfigured } from '@/lib/supabase';
import { travelDiariesData } from '@/data/diaries';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { adminKey, action, payload } = body;

    // Verify Admin Secret Key
    const validKey = process.env.ADMIN_SECRET_KEY || 'foreveradventurer2024!';
    if (adminKey !== validKey) {
      return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 });
    }

    const supabase = getServiceSupabase();

    // ACTION 1: LIST ALL POSTS & STATS
    if (action === 'get_overview') {
      if (!supabase) {
        // Return local mock items if Supabase not yet hooked up
        return NextResponse.json({
          isConfigured: false,
          stats: {
            totalDiaries: travelDiariesData.length,
            communityPosts: 0,
            newsItems: 0,
            advisories: 12,
          },
          posts: travelDiariesData.map(d => ({
            id: d.id,
            title: d.title,
            slug: d.slug,
            destination: d.destination,
            country: d.country,
            author_name: 'Editorial Staff',
            status: 'published',
            is_community: false,
            created_at: new Date().toISOString(),
          })),
        });
      }

      // Supabase is connected: fetch real records
      const { data: diaries, error } = await supabase
        .from('diaries')
        .select('*')
        .order('created_at', { ascending: false });

      const { count: newsCount } = await supabase
        .from('curated_news')
        .select('*', { count: 'exact', head: true });

      const { count: advisoryCount } = await supabase
        .from('visa_advisories')
        .select('*', { count: 'exact', head: true });

      const posts = diaries || [];
      const communityCount = posts.filter(p => p.is_community).length;

      return NextResponse.json({
        isConfigured: true,
        stats: {
          totalDiaries: posts.length,
          communityPosts: communityCount,
          newsItems: newsCount || 0,
          advisories: advisoryCount || 0,
        },
        posts,
      });
    }

    // ACTION 2: DELETE BAD POST / SPAM
    if (action === 'delete_post') {
      const { id } = payload;
      if (!supabase) {
        return NextResponse.json({ success: true, message: 'Post removed from local preview.' });
      }

      const { error } = await supabase.from('diaries').delete().eq('id', id);
      if (error) throw error;

      return NextResponse.json({ success: true, message: 'Post permanently deleted.' });
    }

    // ACTION 3: TOGGLE STATUS (Publish / Reject)
    if (action === 'toggle_status') {
      const { id, status } = payload;
      if (!supabase) {
        return NextResponse.json({ success: true, message: `Status updated to ${status}.` });
      }

      const { error } = await supabase.from('diaries').update({ status }).eq('id', id);
      if (error) throw error;

      return NextResponse.json({ success: true, message: `Post status changed to ${status}.` });
    }

    // ACTION 4: CREATE OFFICIAL ARTICLE (NO-CODE)
    if (action === 'create_article') {
      const { title, destination, country, category, hero_image, excerpt, content, reflections, tags } = payload;

      const baseSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      const slug = `${baseSlug}-${Math.random().toString(36).substring(2, 6)}`;

      const article = {
        title,
        slug,
        destination,
        country,
        author_name: 'ForeverAdventurer Editorial',
        category: category || 'Slow Journeys',
        hero_image: hero_image || 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
        excerpt: excerpt || content.slice(0, 180) + '...',
        content: content.split('\n\n').filter((p: string) => p.trim().length > 0),
        reflections: reflections ? reflections.split('\n').filter((r: string) => r.trim().length > 0) : [],
        tags: tags ? tags.split(',').map((t: string) => t.trim()) : ['Editorial', destination],
        status: 'published',
        is_community: false,
        is_illustrative_sample: false,
      };

      if (supabase) {
        const { data, error } = await supabase.from('diaries').insert([article]).select().single();
        if (error) throw error;
        return NextResponse.json({ success: true, message: 'Article published live to the website!', article: data });
      }

      return NextResponse.json({ success: true, message: 'Article validated! (Configure Supabase keys in .env.local for permanent cloud storage)', article });
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
