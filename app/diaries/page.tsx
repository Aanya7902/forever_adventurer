'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { BookOpen, Clock, PenTool, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { travelDiariesData } from '@/data/diaries';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function DiariesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Slow Journeys', 'Solo Travel', 'Cultural Immersion', 'Wilderness', 'Culinary Trails'];

  const filteredDiaries = selectedCategory === 'All'
    ? travelDiariesData
    : travelDiariesData.filter(d => d.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <Breadcrumbs items={[{ label: 'Travel Diaries' }]} />

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E2D8] pb-8">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Editorial &amp; Community Dispatch
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal-900 leading-tight">
            The Travel Diary
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Intimate dispatches, slow walks, and quiet reflections. Documenting what happens when you stop rushing through itineraries and begin paying genuine attention.
          </p>
        </div>

        {/* Action Button: Submit Diary */}
        <Link
          href="/diaries/new"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold tracking-wide transition-colors shrink-0 shadow-md"
        >
          <PenTool className="w-4 h-4" />
          <span>Write a Travel Diary</span>
        </Link>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-forest-700 text-white font-semibold shadow-sm'
                : 'bg-cream-200 text-charcoal-700 hover:bg-cream-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Notice Banner */}
      <div className="p-4 rounded-xl bg-cream-100 border border-[#E6E2D8] text-xs text-charcoal-600 flex items-center justify-between">
        <span>Showing {filteredDiaries.length} stories · Mindful essays &amp; observations</span>
        <span className="text-forest-700 font-medium">Stories clearly marked if illustrative sample</span>
      </div>

      {/* Grid of Diary Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDiaries.map((diary) => (
          <article
            key={diary.id}
            className="bg-white rounded-xl overflow-hidden border border-[#E6E2D8] flex flex-col justify-between editorial-card group"
          >
            <div>
              <Link href={`/diaries/${diary.slug}`} className="block w-full relative aspect-[16/10] overflow-hidden bg-forest-900/10">
                <SafeImage
                  src={diary.heroImage}
                  alt={diary.title}
                  fallbackTitle={diary.title}
                  fallbackCategory={diary.category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-semibold text-charcoal-800 uppercase tracking-wider pointer-events-none">
                  {diary.category}
                </div>
                {diary.isIllustrativeSample && (
                  <div className="absolute bottom-3 left-3 bg-charcoal-900/80 text-white px-2 py-0.5 rounded text-[9px] uppercase tracking-wider pointer-events-none">
                    Editorial Sample
                  </div>
                )}
              </Link>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-charcoal-500">
                  <span className="font-medium text-charcoal-800">{diary.destination}, {diary.country}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {diary.readTime}</span>
                </div>

                <Link href={`/diaries/${diary.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                    {diary.title}
                  </h3>
                </Link>

                <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed">
                  {diary.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#E6E2D8] mt-4 flex items-center justify-between text-xs">
              <span className="text-charcoal-400">{diary.date}</span>
              <Link
                href={`/diaries/${diary.slug}`}
                className="font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
