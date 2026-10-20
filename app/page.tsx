'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { 
  Compass, 
  Download, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  CheckSquare, 
  BookOpen, 
  Printer, 
  ChevronRight 
} from 'lucide-react';
import { destinationsData, continentsList } from '@/data/destinations';
import { travelDiariesData } from '@/data/diaries';
import { travelGuidesData } from '@/data/guides';
import { downloadableResourcesData } from '@/data/downloads';

export default function HomePage() {
  const [selectedContinent, setSelectedContinent] = useState('All');

  const featuredDestinations = destinationsData.filter(d => d.featured);
  const featuredDiaries = travelDiariesData;
  const featuredGuides = travelGuidesData;
  const featuredDownloads = downloadableResourcesData.filter(d => d.featured).slice(0, 4);

  const filteredDestinations = selectedContinent === 'All' 
    ? featuredDestinations 
    : featuredDestinations.filter(d => d.continent === selectedContinent);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION (EDITORIAL FLASH PACK STYLE) */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-10 sm:mb-14">
          {/* Breadcrumb / Topic Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-200 border border-[#E6E2D8] text-xs uppercase tracking-widest text-charcoal-700 font-sans font-medium">
            <span>Your Travel Hub</span>
            <span className="text-charcoal-400">·</span>
            <span>Discover · Plan · Journey</span>
          </div>

          {/* Large High-Contrast Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal-900 leading-[1.08]">
            Have you got what it takes to be a Forever Adventurer?
          </h1>

          {/* Editorial Subheading */}
          <p className="text-base sm:text-xl text-charcoal-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Your travel hub for discovering destinations, finding inspiration and planning your next adventure. Interactive tools, curated guides, and free printable resources in one place.
          </p>

          {/* Dual Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/destinations"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-charcoal-900 hover:bg-forest-800 text-white text-sm font-medium tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>Explore 50+ Destinations</span>
            </Link>
            <Link
              href="/downloads"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-cream-100 text-charcoal-900 text-sm font-medium tracking-wide border border-[#E6E2D8] transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-700" />
              <span>Download 27+ Free Printables</span>
            </Link>
          </div>
        </div>

        {/* Cinematic Panoramic Destination Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E6E2D8] group">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative bg-forest-900/10">
            <SafeImage
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2000&auto=format&fit=crop"
              alt="Dubrovnik coastal fortress overlooking the Adriatic Sea"
              fallbackTitle="Dubrovnik & The Dalmatian Coast"
              fallbackCategory="Croatia · Europe"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Bottom Image Overlay Strip */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-emerald-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Featured Destination Guide
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium">
                Dubrovnik &amp; The Dalmatian Coast, Croatia
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 max-w-xl">
                Ancient limestone fortifications rising dramatically above the azure Adriatic. Best visited May–June or September–October.
              </p>
            </div>
            <Link
              href="/destinations/dubrovnik-croatia"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-charcoal-900 text-xs font-semibold tracking-wide backdrop-blur transition-colors shrink-0"
            >
              <span>Read Country Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Four Trust Badges / Stats Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-[#E6E2D8] text-charcoal-700 text-xs font-medium">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-full bg-forest-50 text-forest-700">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-charcoal-900">50+ Destinations</p>
              <p className="text-[11px] text-charcoal-500">Across 6 Continents</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-full bg-emerald-50 text-emerald-700">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-charcoal-900">27+ Free Printables</p>
              <p className="text-[11px] text-charcoal-500">Instant PDF Downloads</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-full bg-terracotta-50 text-terracotta-700">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-charcoal-900">Verified Travel Facts</p>
              <p className="text-[11px] text-charcoal-500">Documented dates &amp; sources</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-full bg-cream-300 text-charcoal-800">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-charcoal-900">No Paywalls</p>
              <p className="text-[11px] text-charcoal-500">Free without registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE BY CONTINENT */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E6E2D8] pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">Worldwide Directory</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mt-1">Explore By Continent</h2>
          </div>
          <Link href="/destinations" className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1 group">
            <span>View All Countries Directory</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Continent Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {continentsList.map((cont) => (
            <Link
              key={cont.name}
              href={`/destinations?continent=${encodeURIComponent(cont.name)}`}
              className="group block relative w-full rounded-xl overflow-hidden aspect-[4/5] border border-[#E6E2D8] shadow-sm hover:shadow-md transition-all bg-forest-900/10"
            >
              <SafeImage
                src={cont.image}
                alt={cont.name}
                fallbackTitle={cont.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-3.5 text-white pointer-events-none">
                <p className="font-serif text-lg font-medium leading-tight">{cont.name}</p>
                <p className="text-[11px] text-gray-300">{cont.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED WORLDWIDE DESTINATIONS */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">Curated Destinations</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mt-1">Inspirational Places to Visit</h2>
          </div>
          {/* Continent Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Europe', 'Asia', 'Africa', 'North America', 'Oceania'].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedContinent(c)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                  selectedContinent === c
                    ? 'bg-forest-700 text-white font-medium'
                    : 'bg-cream-200 text-charcoal-700 hover:bg-cream-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Card Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <article
              key={dest.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E6E2D8] flex flex-col editorial-card group"
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
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-charcoal-800 pointer-events-none">
                  {dest.continent} · {dest.country}
                </div>
                <div className="absolute bottom-3 right-3 bg-charcoal-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-mono pointer-events-none">
                  {dest.idealDuration}
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-charcoal-500">
                    <Calendar className="w-3.5 h-3.5 text-forest-700" />
                    <span>Best: {dest.bestSeason}</span>
                  </div>
                  <Link href={`/destinations/${dest.slug}`}>
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                      {dest.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed">
                    {dest.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs">
                  <span className="text-charcoal-500">Budget: <strong className="text-charcoal-800">{dest.budgetLevel}</strong></span>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1 group/link"
                  >
                    <span>Explore Guide</span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. THE TRAVEL DIARY (PERSONAL STORIES & OBSERVATIONS) */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E6E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">The Travel Diary</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mt-1">Reflections from the Road</h2>
              <p className="text-xs text-charcoal-500 mt-1">
                Warm, observant essays documenting slow journeys. <em>(Illustrative sample stories demonstrating our editorial format)</em>
              </p>
            </div>
            <Link href="/diaries" className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1">
              <span>View All Diaries Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Magazine Grid: 1 Big Story + 2 Side Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Big Featured Story */}
            <article className="lg:col-span-7 bg-white rounded-xl overflow-hidden border border-[#E6E2D8] flex flex-col group editorial-card">
              <Link href={`/diaries/${featuredDiaries[0].slug}`} className="block w-full relative aspect-[16/10] overflow-hidden bg-forest-900/10">
                <SafeImage
                  src={featuredDiaries[0].heroImage}
                  alt={featuredDiaries[0].title}
                  fallbackTitle={featuredDiaries[0].title}
                  fallbackCategory={featuredDiaries[0].category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-forest-700 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full pointer-events-none">
                  {featuredDiaries[0].category}
                </div>
              </Link>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-charcoal-500">
                  <span className="font-medium text-charcoal-800">{featuredDiaries[0].destination}, {featuredDiaries[0].country}</span>
                  <span>·</span>
                  <span>{featuredDiaries[0].date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredDiaries[0].readTime}</span>
                </div>
                <Link href={`/diaries/${featuredDiaries[0].slug}`}>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                    {featuredDiaries[0].title}
                  </h3>
                </Link>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {featuredDiaries[0].excerpt}
                </p>
                <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredDiaries[0].tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-cream-200 text-charcoal-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/diaries/${featuredDiaries[0].slug}`}
                    className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* 2 Side Editorial Stories */}
            <div className="lg:col-span-5 space-y-6">
              {featuredDiaries.slice(1, 3).map((diary) => (
                <article
                  key={diary.id}
                  className="bg-white rounded-xl p-6 border border-[#E6E2D8] space-y-3 group editorial-card flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-charcoal-500">
                      <span className="text-terracotta-600 font-semibold uppercase tracking-wider">{diary.category}</span>
                      <span>{diary.readTime}</span>
                    </div>
                    <Link href={`/diaries/${diary.slug}`}>
                      <h4 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                        {diary.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                      {diary.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E6E2D8] flex items-center justify-between text-xs">
                    <span className="text-charcoal-500">{diary.destination}, {diary.country}</span>
                    <Link
                      href={`/diaries/${diary.slug}`}
                      className="font-medium text-forest-700 hover:text-forest-800 flex items-center gap-1"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}

              {/* Journaling Prompt Callout Card */}
              <div className="bg-forest-900 text-white rounded-xl p-6 space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300">Journaling Companion</span>
                <p className="font-serif text-lg font-medium">Preserve your journey with our Daily Travel Journal</p>
                <p className="text-xs text-gray-300">
                  Download our free 2-page reflection printable with morning intention boxes, culinary notes, and evening gratitude prompts.
                </p>
                <Link
                  href="/downloads#daily-travel-journal"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-charcoal-900 text-xs font-semibold transition-colors mt-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Free Journal PDF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IN-DEPTH PRACTICAL TRAVEL GUIDES */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E6E2D8] pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">Field Guides &amp; Itineraries</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mt-1">Practical Travel Guides</h2>
          </div>
          <Link href="/guides" className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1">
            <span>View All Detailed Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGuides.map((guide) => (
            <article
              key={guide.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E6E2D8] flex flex-col justify-between editorial-card group"
            >
              <div>
                <Link href={`/guides/${guide.slug}`} className="block w-full relative aspect-[16/10] overflow-hidden bg-forest-900/10">
                  <SafeImage
                    src={guide.heroImage}
                    alt={guide.title}
                    fallbackTitle={guide.title}
                    fallbackCategory={`${guide.destination}, ${guide.country}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-semibold text-charcoal-800 uppercase tracking-wider pointer-events-none">
                    {guide.duration} Itinerary
                  </div>
                </Link>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-charcoal-500">
                    <span>{guide.destination}, {guide.country}</span>
                    <span>·</span>
                    <span>{guide.season}</span>
                  </div>
                  <Link href={`/guides/${guide.slug}`}>
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                      {guide.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">
                    {guide.overview}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E6E2D8] mt-4 flex items-center justify-between text-xs">
                <span className="text-charcoal-500">Est. Budget: <strong className="text-charcoal-800">{guide.idealBudget}</strong></span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. FREE PRINTABLE RESOURCES LIBRARY SHOWCASE */}
      <section className="bg-forest-900 text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Genuinely Free Library
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                Download Free Travel Journals &amp; Planners
              </h2>
              <p className="text-sm text-gray-300">
                Print-ready PDFs designed for A4 and US Letter. No accounts, no paywalls, and no email required. Simply choose your planner and print.
              </p>
            </div>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-charcoal-900 text-xs font-semibold tracking-wide transition-colors shrink-0 shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Browse All 27+ Resources</span>
            </Link>
          </div>

          {/* 4 Featured Printable Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDownloads.map((res) => (
              <div
                key={res.id}
                className="bg-[#18261F] border border-forest-700 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-emerald-400 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-forest-700 bg-forest-900/20">
                    <SafeImage
                      src={res.previewImage}
                      alt={res.title}
                      fallbackTitle={res.title}
                      fallbackCategory={res.category}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-charcoal-900/90 text-[10px] font-semibold text-emerald-300 px-2 py-0.5 rounded">
                      {res.category}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-white group-hover:text-emerald-300 transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                      {res.description}
                    </p>
                  </div>

                  <ul className="space-y-1 text-[11px] text-gray-300 pt-1">
                    {res.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-forest-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
                    <span>{res.format}</span>
                    <span>{res.pages} Pages</span>
                  </div>
                  <a
                    href={res.downloadUrl}
                    download
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Free PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Category List */}
          <div className="pt-8 border-t border-forest-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
            <span className="font-semibold text-white">Explore Resource Categories:</span>
            <div className="flex flex-wrap gap-2">
              {['Travel Journals', 'Calendars & Planners', 'Packing Lists', 'Trip Planning', 'World Exploration'].map((cat) => (
                <Link
                  key={cat}
                  href={`/downloads?category=${encodeURIComponent(cat)}`}
                  className="px-3 py-1 rounded-full bg-forest-800 hover:bg-forest-700 text-gray-200 hover:text-white transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE TRIP-PLANNING SUITE */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">Functioning Tools</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Interactive Travel Planning Suite
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Practical in-browser tools to calculate your budget, curate custom packing lists, and organize your trip timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Packing Tool */}
          <Link
            href="/tools/packing-checklist"
            className="p-6 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-lg transition-all group editorial-card flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center">
                <CheckSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                  Interactive Packing Checklist
                </h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  Toggle items, add personal custom gear, track packing completion progress, and print your finalized checklist.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs font-semibold text-forest-700 mt-6">
              <span>Launch Tool</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Budget Calculator */}
          <Link
            href="/tools/budget-calculator"
            className="p-6 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-lg transition-all group editorial-card flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-terracotta-50 text-terracotta-700 flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                  Travel Budget Calculator
                </h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  Model flight, accommodation, daily food, and activity expenses. Real-time cost per day and emergency contingency estimation.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs font-semibold text-terracotta-700 mt-6">
              <span>Calculate Budget</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Itinerary Planner */}
          <Link
            href="/tools/itinerary-planner"
            className="p-6 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-lg transition-all group editorial-card flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cream-300 text-charcoal-800 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                  Day-by-Day Itinerary Planner
                </h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  Build custom multi-day schedules with morning, afternoon, and evening slots. Print-friendly summary layout.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs font-semibold text-charcoal-800 mt-6">
              <span>Plan Your Days</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 8. ABOUT FOREVER ADVENTURER (YOUR TRAVEL HUB) */}
      <section className="px-4 sm:px-8 max-w-5xl mx-auto py-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E6E2D8] space-y-6 shadow-sm">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">Your Travel Hub</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              About Forever Adventurer
            </h2>
          </div>
          <div className="prose prose-base sm:prose-lg text-charcoal-700 mx-auto space-y-5 leading-relaxed font-sans">
            <p className="text-base sm:text-lg font-medium text-forest-900 leading-snug">
              <strong>Forever Adventurer is your travel hub for discovering destinations, finding inspiration and planning your next adventure.</strong>
            </p>
            <p className="text-sm sm:text-base">
              Whether you&apos;re dreaming about your next getaway, researching somewhere new, building an itinerary or preparing for a trip, Forever Adventurer brings travel inspiration and practical planning resources together in one place.
            </p>
            <p className="text-sm sm:text-base">
              Explore destination guides, discover places to visit, find useful travel tips, build your plans with interactive tools and download free printable travel resources to take with you. From the first spark of inspiration to the details that make a trip run smoothly, our aim is to make planning easier and discovering the world more exciting.
            </p>
            <p className="text-sm sm:text-base">
              We believe travel is about more than ticking places off a list. It&apos;s about experiencing different cultures, finding memorable places, supporting local communities and making every adventure your own.
            </p>
            <div className="pt-2">
              <p className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
                Discover more. Plan smarter. Travel your way.
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
            <span className="font-serif italic text-charcoal-700">Discover more. Plan smarter. Travel your way.</span>
            <Link href="/about" className="text-forest-700 font-semibold hover:text-forest-800 flex items-center gap-1">
              <span>Read Full Story &amp; Practical Accuracy Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
