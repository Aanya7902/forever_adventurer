'use client';

import React from 'react';
import Link from 'next/link';
import { Download, Globe2, Compass, Heart, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121714] text-[#E6E2D8] border-t border-charcoal-800">
      {/* Newsletter Dispatch Banner */}
      <div className="border-b border-charcoal-800 bg-[#161D19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                The Adventurer’s Dispatch
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Slow travel reflections &amp; new printable planners in your inbox.
              </h3>
              <p className="text-sm text-charcoal-400 max-w-xl">
                Join curious wanderers worldwide. We send thoughtful destination notes and notify you whenever new print-ready journals and checklists are published. Zero spam, ever.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form 
                onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to The Adventurer’s Dispatch! You will receive our monthly dispatch.'); }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  className="px-4 py-3 rounded-lg bg-charcoal-900 border border-charcoal-700 text-white placeholder-charcoal-500 text-sm focus:outline-none focus:border-emerald-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[11px] text-charcoal-500 mt-2">
                Optional subscription. All downloads remain 100% free without sign-up.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="group inline-flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase block">
                Forever Adventurer
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-emerald-400 font-medium">
                Your Travel Hub
              </span>
            </Link>
            <p className="text-xs text-charcoal-400 leading-relaxed max-w-md">
              Your travel hub for discovering destinations, finding inspiration and planning your next adventure. Explore curated destination guides, interactive planning tools, and a library of genuinely free printable travel resources.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent editorial · Verified travel data</span>
            </div>
          </div>

          {/* Explore Worldwide */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Explore By Region
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li><Link href="/destinations?continent=Europe" className="hover:text-white transition-colors">Europe (32 Countries)</Link></li>
              <li><Link href="/destinations?continent=Asia" className="hover:text-white transition-colors">Asia (28 Countries)</Link></li>
              <li><Link href="/destinations?continent=Africa" className="hover:text-white transition-colors">Africa (18 Countries)</Link></li>
              <li><Link href="/destinations?continent=North+America" className="hover:text-white transition-colors">North America (14 Countries)</Link></li>
              <li><Link href="/destinations?continent=South+America" className="hover:text-white transition-colors">South America (12 Countries)</Link></li>
              <li><Link href="/destinations?continent=Oceania" className="hover:text-white transition-colors">Oceania (8 Countries)</Link></li>
              <li><Link href="/destinations" className="text-emerald-400 hover:text-emerald-300 font-medium">Browse All Destinations →</Link></li>
            </ul>
          </div>

          {/* Free Printable Library */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Free Downloads
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li><Link href="/downloads#travel-journals" className="hover:text-white transition-colors">Travel Journals &amp; Prompts</Link></li>
              <li><Link href="/downloads#calendars-planners" className="hover:text-white transition-colors">Calendars &amp; Trip Planners</Link></li>
              <li><Link href="/downloads#packing-lists" className="hover:text-white transition-colors">Packing Checklists</Link></li>
              <li><Link href="/downloads#trip-planning" className="hover:text-white transition-colors">Budget &amp; Itinerary Sheets</Link></li>
              <li><Link href="/downloads#world-exploration" className="hover:text-white transition-colors">Countries Visited Tracker</Link></li>
              <li><Link href="/downloads" className="text-emerald-400 hover:text-emerald-300 font-medium">View All 27+ Free PDFs →</Link></li>
            </ul>
          </div>

          {/* Interactive Tools & Editorial */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Tools &amp; Editorial
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li><Link href="/tools/packing-checklist" className="hover:text-white transition-colors">Interactive Packing Tool</Link></li>
              <li><Link href="/tools/budget-calculator" className="hover:text-white transition-colors">Trip Budget Calculator</Link></li>
              <li><Link href="/tools/itinerary-planner" className="hover:text-white transition-colors">Itinerary Planner</Link></li>
              <li><Link href="/diaries" className="hover:text-white transition-colors">Travel Diary Archive</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Editorial Philosophy</Link></li>
              <li><Link href="/about#verification" className="hover:text-white transition-colors">Fact-Checking &amp; Accuracy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <p>© {new Date().getFullYear()} Forever Adventurer · Your Travel Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-charcoal-300 transition-colors">XML Sitemap</Link>
            <Link href="/robots.txt" className="hover:text-charcoal-300 transition-colors">Robots.txt</Link>
            <Link href="/about" className="hover:text-charcoal-300 transition-colors">Privacy &amp; Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
