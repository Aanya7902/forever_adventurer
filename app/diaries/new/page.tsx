'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { useRouter } from 'next/navigation';
import { BookOpen, Camera, CheckCircle2, ShieldCheck, ArrowLeft, Send, Sparkles, AlertCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function NewDiaryPage() {
  const router = useRouter();
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Form states
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [destination, setDestination] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState<'Solo Travel' | 'Slow Journeys' | 'Cultural Immersion' | 'Wilderness' | 'Culinary Trails'>('Slow Journeys');
  const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop');
  const [content, setContent] = useState('');
  const [reflection1, setReflection1] = useState('');
  const [reflection2, setReflection2] = useState('');
  const [tags, setTags] = useState('');
  
  // Honeypot field (hidden from real users, bots will fill it)
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setSubmitting(true);

    try {
      const reflections = [reflection1, reflection2].filter(r => r.trim().length > 0);
      const tagsList = tags
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0);

      const res = await fetch('/api/diaries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author_name: authorName,
          author_email: authorEmail,
          title,
          subtitle,
          destination,
          country,
          category,
          hero_image: heroImage,
          content,
          reflections,
          tags: tagsList,
          honeypot,
          timestamp: formLoadTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to publish diary.');
      }

      setSuccessMsg(data.message || 'Diary published successfully!');
      setTimeout(() => {
        router.push('/diaries');
      }, 2000);
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Travel Diaries', href: '/diaries' }, { label: 'Write a Diary Story' }]} />

      <div className="space-y-3 border-b border-[#E6E2D8] pb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" /> Community Travel Logs
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900">
          Share Your Journey
        </h1>
        <p className="text-sm text-charcoal-600 max-w-2xl leading-relaxed">
          ForeverAdventurer celebrates slow journeys, quiet observations, and mindful travel. Share your personal dispatch with our worldwide community of thoughtful explorers.
        </p>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMsg} Redirecting to diaries...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-[#E6E2D8] shadow-sm">
        {/* Anti-spam Honeypot (hidden from screen readers & visual users) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Author Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              Your Name / Pen Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Elena Vance"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              Your Email (Private / Not shown)
            </label>
            <input
              type="email"
              placeholder="elena@example.com"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600"
            />
          </div>
        </div>

        {/* Location & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              Destination / City *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Lake Como"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              Country *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Italy"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e: any) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600"
            >
              <option value="Slow Journeys">Slow Journeys</option>
              <option value="Solo Travel">Solo Travel</option>
              <option value="Cultural Immersion">Cultural Immersion</option>
              <option value="Wilderness">Wilderness</option>
              <option value="Culinary Trails">Culinary Trails</option>
            </select>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              Story Headline *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Misty Mornings on the Bellagio Ferry: Finding Peace in Northern Italy"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] font-serif text-lg text-charcoal-900 focus:outline-none focus:border-forest-600"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
              Subtitle / Hook
            </label>
            <input
              type="text"
              placeholder="e.g. What stepping away from busy tour routes taught me about quiet travel."
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600"
            />
          </div>
        </div>

        {/* Photo URL & Live Preview */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><Camera className="w-3.5 h-3.5" /> Cover Photo URL (Unsplash or direct image link)</span>
            <span className="text-[11px] text-charcoal-400 font-normal">Stored securely in Supabase</span>
          </label>
          <input
            type="url"
            value={heroImage}
            onChange={(e) => setHeroImage(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-xs text-charcoal-900 focus:outline-none focus:border-forest-600 font-mono"
          />
          {heroImage && (
            <div className="relative aspect-[16/8] rounded-xl overflow-hidden border border-[#E6E2D8] mt-2 bg-forest-900/10">
              <SafeImage src={heroImage} alt="Cover preview" fallbackTitle="Cover Image Preview" fill className="object-cover" />
            </div>
          )}
        </div>

        {/* Main Story Content */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
            Your Story &amp; Observations * (Separate paragraphs with double Enter)
          </label>
          <textarea
            required
            rows={8}
            placeholder="Describe what you saw, smelled, heard, and felt. What made this moment unforgettable? Did a stranger help you? Did an unexpected turn lead somewhere magical?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-4 rounded-xl border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600 leading-relaxed font-sans"
          />
        </div>

        {/* Slow Travel Reflection Prompts */}
        <div className="p-6 rounded-xl bg-forest-50/60 border border-forest-200 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Mindful Reflection Prompts (Optional)
            </span>
            <p className="text-xs text-forest-900">
              Add 1 or 2 core takeaways or lessons this journey taught you about yourself or the world:
            </p>
          </div>

          <input
            type="text"
            placeholder="Reflection 1: e.g. Spending two hours in a quiet cafe taught me to stop rushing to landmarks."
            value={reflection1}
            onChange={(e) => setReflection1(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-forest-200 bg-white text-xs text-charcoal-900 focus:outline-none focus:border-forest-600"
          />
          <input
            type="text"
            placeholder="Reflection 2: e.g. The warmest hospitality often comes from people whose language you do not speak."
            value={reflection2}
            onChange={(e) => setReflection2(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-forest-200 bg-white text-xs text-charcoal-900 focus:outline-none focus:border-forest-600"
          />
        </div>

        {/* Tags */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
            Tags (comma separated)
          </label>
          <input
            type="text"
            placeholder="e.g. Italy, Lakes, Ferry, Slow Travel, Autumn"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-sm text-charcoal-900 focus:outline-none focus:border-forest-600"
          />
        </div>

        {/* Anti-spam notice & Submit button */}
        <div className="pt-4 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-charcoal-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Spam-protected submission · Community guidelines apply</span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-forest-700 hover:bg-forest-800 disabled:bg-charcoal-400 text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            {submitting ? (
              <span>Publishing Story...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Publish Travel Diary</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
