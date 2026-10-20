'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { Compass, MapPin, Calendar, Clock, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { destinationsData, continentsList } from '@/data/destinations';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function DestinationsPage() {
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = destinationsData.filter((dest) => {
    const matchesContinent = selectedContinent === 'All' || dest.continent === selectedContinent;
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <Breadcrumbs items={[{ label: 'Worldwide Directory' }]} />

      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5" /> Worldwide Destination Directory
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal-900 leading-tight">
          Explore the World
        </h1>
        <p className="text-base text-charcoal-600 leading-relaxed">
          Curated destination guides spanning six continents. Each guide includes seasonal climate advice, multi-day itineraries, cultural etiquette, transport tips, and companion printable planners.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#E6E2D8] pb-6">
        {/* Continent Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {['All', 'Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'].map((c) => (
            <button
              key={c}
              onClick={() => setSelectedContinent(c)}
              className={`text-xs px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                selectedContinent === c
                  ? 'bg-forest-700 text-white font-semibold shadow-sm'
                  : 'bg-cream-200 text-charcoal-700 hover:bg-cream-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search country, city, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full border border-[#E6E2D8] bg-white text-xs text-charcoal-900 focus:outline-none focus:border-forest-600"
          />
        </div>
      </div>

      {/* Results Count & Verified Fact Badge */}
      <div className="flex items-center justify-between text-xs text-charcoal-500">
        <span>Showing {filtered.length} curated destinations</span>
        <span className="flex items-center gap-1.5 text-forest-700">
          <ShieldCheck className="w-3.5 h-3.5" /> All safety &amp; transport dates verified
        </span>
      </div>

      {/* Grid of Destinations */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 space-y-3 bg-white rounded-2xl border border-[#E6E2D8]">
          <p className="font-serif text-2xl text-charcoal-800">No destinations match your search</p>
          <p className="text-xs text-charcoal-500">Try choosing a different continent or clearing your search term.</p>
          <button
            onClick={() => { setSelectedContinent('All'); setSearchQuery(''); }}
            className="text-xs font-semibold text-forest-700 underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <article
              key={dest.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E6E2D8] flex flex-col justify-between editorial-card group"
            >
              <Link href={`/destinations/${dest.slug}`} className="block w-full relative aspect-[16/10] overflow-hidden bg-forest-900/10">
                <SafeImage
                  src={dest.heroImage}
                  alt={dest.name}
                  fallbackTitle={dest.name}
                  fallbackCategory={`${dest.continent} · ${dest.country}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold text-charcoal-800 uppercase tracking-wider pointer-events-none">
                  {dest.continent} · {dest.country}
                </div>
                <div className="absolute bottom-3 right-3 bg-charcoal-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-mono pointer-events-none">
                  {dest.idealDuration}
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-charcoal-500">
                    <Calendar className="w-3.5 h-3.5 text-forest-700" />
                    <span>Best: {dest.bestSeason}</span>
                  </div>
                  <Link href={`/destinations/${dest.slug}`}>
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                      {dest.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">
                    {dest.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs">
                  <span className="text-charcoal-500">
                    Budget: <strong className="text-charcoal-800">{dest.budgetLevel}</strong>
                  </span>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1"
                  >
                    <span>Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
