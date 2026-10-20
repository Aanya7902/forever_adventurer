import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Compass, Download, Mail, ArrowRight, CheckCircle2, MapPin, Sparkles, Calendar, Calculator, CheckSquare } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <Breadcrumbs items={[{ label: 'About Forever Adventurer' }]} />

      {/* Header Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-[#E6E2D8] text-xs uppercase tracking-widest text-charcoal-700 font-sans">
          <span>Your Travel Hub</span>
          <span className="text-charcoal-400">·</span>
          <span>Discover · Plan · Journey</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal-900 leading-tight">
          About Forever Adventurer
        </h1>
        <p className="text-lg sm:text-xl text-forest-800 leading-relaxed font-serif font-medium">
          Forever Adventurer is your travel hub for discovering destinations, finding inspiration and planning your next adventure.
        </p>
      </div>

      {/* Main Narrative - Exact User Brief Copy */}
      <div className="prose prose-base sm:prose-lg text-charcoal-700 space-y-6 leading-relaxed font-sans">
        <p>
          Whether you&apos;re dreaming about your next getaway, researching somewhere new, building an itinerary or preparing for a trip, Forever Adventurer brings travel inspiration and practical planning resources together in one place.
        </p>
        <p>
          Explore destination guides, discover places to visit, find useful travel tips, build your plans with interactive tools and download free printable travel resources to take with you. From the first spark of inspiration to the details that make a trip run smoothly, our aim is to make planning easier and discovering the world more exciting.
        </p>
        <p>
          We believe travel is about more than ticking places off a list. It&apos;s about experiencing different cultures, finding memorable places, supporting local communities and making every adventure your own.
        </p>
        <div className="py-2">
          <p className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
            Discover more. Plan smarter. Travel your way.
          </p>
        </div>
      </div>

      {/* 4 Core Pillars of the Travel Hub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <Link 
          href="/destinations"
          className="p-6 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-md transition-all group space-y-3 block"
        >
          <div className="w-10 h-10 rounded-full bg-forest-50 text-forest-700 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
            1. Worldwide Destinations Directory
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Curated coverage across 34 countries and 6 continents featuring best times to visit, local customs, transport details, and regional itineraries.
          </p>
          <div className="text-xs font-semibold text-forest-700 flex items-center gap-1 pt-1">
            <span>Explore Destinations</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link 
          href="/guides"
          className="p-6 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-md transition-all group space-y-3 block"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
            2. In-Depth Guides &amp; Inspiration
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Thoughtful travel guides, cultural deep-dives, and authentic community travel diaries that focus on mindful, immersive exploration.
          </p>
          <div className="text-xs font-semibold text-forest-700 flex items-center gap-1 pt-1">
            <span>Read Travel Guides</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link 
          href="/tools"
          className="p-6 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-md transition-all group space-y-3 block"
        >
          <div className="w-10 h-10 rounded-full bg-terracotta-50 text-terracotta-700 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
            3. Interactive Trip-Planning Tools
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            In-browser interactive packing checklist generator, travel budget calculator, and day-by-day itinerary planner built to streamline your preparation.
          </p>
          <div className="text-xs font-semibold text-terracotta-700 flex items-center gap-1 pt-1">
            <span>Try Planning Tools</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link 
          href="/downloads"
          className="p-6 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-md transition-all group space-y-3 block"
        >
          <div className="w-10 h-10 rounded-full bg-forest-50 text-forest-700 flex items-center justify-center">
            <Download className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
            4. Free Printable Travel Resources
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            A library of 28 print-ready PDF planners, daily travel journals, packing checklists, and tracker sheets you can download and use for free.
          </p>
          <div className="text-xs font-semibold text-forest-700 flex items-center gap-1 pt-1">
            <span>Browse Free Downloads</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Editorial Standards & Fact-Checking Policy */}
      <section id="editorial-standards" className="p-8 rounded-2xl bg-cream-100 border border-[#E6E2D8] space-y-4">
        <div className="flex items-center gap-2 text-forest-800">
          <ShieldCheck className="w-5 h-5" />
          <h2 className="font-serif text-2xl font-bold">Editorial Standards &amp; Practical Accuracy</h2>
        </div>
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          Forever Adventurer is committed to honesty, transparency, and practical utility. We follow clear publishing principles:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Genuinely Working Tools:</strong> We only highlight tools and directories that actually work and are available on this hub. Every calculator and generator is live and free.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Verified Practical Data:</strong> Transit connections, seasonal guidance, and safety considerations are curated from reliable official sources and updated regularly.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>100% Free Downloads:</strong> All 28 printable resources in our library are genuinely free. No paywalls, subscription requirements, or payment information needed.</span>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-8 rounded-2xl border border-[#E6E2D8] space-y-4">
        <h2 className="font-serif text-2xl font-bold text-charcoal-900">Get in Touch</h2>
        <p className="text-xs sm:text-sm text-charcoal-600">
          Have feedback on our travel tools, a destination you would like us to cover, or a suggestion for a printable planner?
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-forest-700">
          <a href="mailto:editorial@foreveradventurer.com" className="flex items-center gap-1.5 hover:underline">
            <Mail className="w-4 h-4" /> editorial@foreveradventurer.com
          </a>
          <span>·</span>
          <Link href="/diaries/new" className="hover:underline">
            Submit a Community Travel Diary →
          </Link>
        </div>
      </section>
    </div>
  );
}
