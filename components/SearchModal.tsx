'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, MapPin, BookOpen, Compass, Download, ArrowRight } from 'lucide-react';
import { destinationsData } from '@/data/destinations';
import { travelDiariesData } from '@/data/diaries';
import { travelGuidesData } from '@/data/guides';
import { downloadableResourcesData } from '@/data/downloads';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredDestinations = trimmed
    ? destinationsData.filter(d => 
        d.name.toLowerCase().includes(trimmed) || 
        d.country.toLowerCase().includes(trimmed) || 
        d.continent.toLowerCase().includes(trimmed) ||
        d.overview.toLowerCase().includes(trimmed)
      )
    : [];

  const filteredDiaries = trimmed
    ? travelDiariesData.filter(d => 
        d.title.toLowerCase().includes(trimmed) || 
        d.destination.toLowerCase().includes(trimmed) ||
        d.country.toLowerCase().includes(trimmed) ||
        d.tags.some(t => t.toLowerCase().includes(trimmed))
      )
    : [];

  const filteredGuides = trimmed
    ? travelGuidesData.filter(g => 
        g.title.toLowerCase().includes(trimmed) || 
        g.destination.toLowerCase().includes(trimmed) ||
        g.country.toLowerCase().includes(trimmed)
      )
    : [];

  const filteredDownloads = trimmed
    ? downloadableResourcesData.filter(dl => 
        dl.title.toLowerCase().includes(trimmed) || 
        dl.category.toLowerCase().includes(trimmed) ||
        dl.description.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults = filteredDestinations.length + filteredDiaries.length + filteredGuides.length + filteredDownloads.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-charcoal-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#FDFBF7] rounded-xl shadow-2xl border border-[#E6E2D8] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-[#E6E2D8] bg-white gap-3">
          <Search className="w-5 h-5 text-charcoal-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search destinations, travel diaries, guides, free printables..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base bg-transparent text-charcoal-900 placeholder-charcoal-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-charcoal-400 hover:text-charcoal-700 px-2 py-1 rounded bg-cream-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-charcoal-500 hover:text-charcoal-900 hover:bg-cream-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {!trimmed ? (
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Dubrovnik', 'Kyoto', 'Lofoten', 'Daily Travel Journal', 'Carry-On Packing', 'Budget Tracker', '7-Day Itinerary'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="text-xs px-3 py-1.5 rounded-full bg-cream-200 text-charcoal-700 hover:bg-forest-50 hover:text-forest-700 border border-transparent hover:border-forest-200 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] text-xs text-charcoal-500 flex items-center justify-between">
                <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-cream-300 rounded text-charcoal-800 font-mono">ESC</kbd> to close anytime</span>
                <span>27+ Free Printables Available</span>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12 space-y-2">
              <p className="font-serif text-xl text-charcoal-800">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-sm text-charcoal-500">Try searching for a country name, continent, or resource type (e.g., &ldquo;Journal&rdquo;, &ldquo;Europe&rdquo;, &ldquo;Packing&rdquo;).</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Destinations */}
              {filteredDestinations.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-forest-700" /> Destinations ({filteredDestinations.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredDestinations.map((dest) => (
                      <Link
                        key={dest.id}
                        href={`/destinations/${dest.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E6E2D8] hover:border-forest-600 hover:bg-forest-50/40 transition-colors group"
                      >
                        <div>
                          <p className="font-serif font-medium text-charcoal-900 group-hover:text-forest-700">{dest.name}</p>
                          <p className="text-xs text-charcoal-500">{dest.country} · {dest.continent} · Best: {dest.bestSeason}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-charcoal-400 group-hover:text-forest-700 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Travel Diaries */}
              {filteredDiaries.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-forest-700" /> Travel Diaries ({filteredDiaries.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredDiaries.map((diary) => (
                      <Link
                        key={diary.id}
                        href={`/diaries/${diary.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E6E2D8] hover:border-forest-600 hover:bg-forest-50/40 transition-colors group"
                      >
                        <div>
                          <p className="font-serif font-medium text-charcoal-900 group-hover:text-forest-700">{diary.title}</p>
                          <p className="text-xs text-charcoal-500">{diary.destination}, {diary.country} · {diary.readTime}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-charcoal-400 group-hover:text-forest-700 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Travel Guides */}
              {filteredGuides.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase mb-3 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-forest-700" /> Travel Guides ({filteredGuides.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredGuides.map((guide) => (
                      <Link
                        key={guide.id}
                        href={`/guides/${guide.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#E6E2D8] hover:border-forest-600 hover:bg-forest-50/40 transition-colors group"
                      >
                        <div>
                          <p className="font-serif font-medium text-charcoal-900 group-hover:text-forest-700">{guide.title}</p>
                          <p className="text-xs text-charcoal-500">{guide.destination} · {guide.duration} · {guide.season}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-charcoal-400 group-hover:text-forest-700 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Downloadable Printables */}
              {filteredDownloads.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase mb-3 flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-forest-700" /> Free Printable Resources ({filteredDownloads.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredDownloads.map((res) => (
                      <Link
                        key={res.id}
                        href={`/downloads#${res.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3 rounded-lg bg-forest-50/40 border border-forest-200 hover:border-forest-600 hover:bg-forest-100/50 transition-colors group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-forest-700 text-white">Free PDF</span>
                            <p className="font-serif font-medium text-charcoal-900 group-hover:text-forest-700">{res.title}</p>
                          </div>
                          <p className="text-xs text-charcoal-500 mt-0.5">{res.category} · {res.format} · {res.pages} pages</p>
                        </div>
                        <Download className="w-4 h-4 text-forest-700 group-hover:translate-y-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
