import React from 'react';
import Link from 'next/link';
import { 
  CheckSquare, 
  Calculator, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Printer, 
  Sparkles 
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ToolsHubPage() {
  const tools = [
    {
      id: 'packing-checklist',
      href: '/tools/packing-checklist',
      title: 'Interactive Packing Checklist',
      icon: CheckSquare,
      color: 'forest',
      badge: 'Interactive & Printable',
      description: 'Check off items, add personal custom gear, track packing progress percentage, and print your finalized checklist. Automatically saves locally.',
    },
    {
      id: 'budget-calculator',
      href: '/tools/budget-calculator',
      title: 'Travel Budget Calculator',
      icon: Calculator,
      color: 'terracotta',
      badge: 'Multi-Currency',
      description: 'Model flight, accommodation, daily food, and activity expenses. Real-time cost-per-day analysis with custom contingency buffers and printable summaries.',
    },
    {
      id: 'itinerary-planner',
      href: '/tools/itinerary-planner',
      title: 'Day-by-Day Itinerary Planner',
      icon: Calendar,
      color: 'emerald',
      badge: 'Custom Builder',
      description: 'Orchestrate multi-day journeys with dedicated morning, afternoon, and evening slots. Keep reservation codes handy and print a clean pocket itinerary.',
    },
    {
      id: 'trip-countdown',
      href: '/tools/trip-countdown',
      title: 'Trip Countdown & Milestone Tracker',
      icon: Clock,
      color: 'charcoal',
      badge: 'Live Timer',
      description: 'Watch the days, hours, and minutes count down to departure. Integrated pre-departure milestone checklist (T-30 to Day 0).',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <Breadcrumbs items={[{ label: 'Plan Your Trip' }]} />

      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Trip-Planning Suite
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal-900 leading-tight">
          Tools for Mindful Travelers
        </h1>
        <p className="text-base text-charcoal-600 leading-relaxed">
          Functioning, in-browser tools to organize every dimension of your journey. All tools save your progress locally in your browser and provide print-friendly formats.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.id}
              href={t.href}
              className="p-8 rounded-2xl bg-white border border-[#E6E2D8] hover:border-forest-600 hover:shadow-xl transition-all group editorial-card flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-cream-200 text-charcoal-700">
                    {t.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                    {t.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs font-semibold text-forest-700">
                <span>Launch Interactive Tool</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Printable Companion Banner */}
      <div className="p-8 rounded-2xl bg-cream-100 border border-[#E6E2D8] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-forest-700">Prefer Pen &amp; Paper?</span>
          <h3 className="font-serif text-2xl font-bold text-charcoal-900">
            Download the Complete Printable Collection
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl">
            If you want tactile companions for your backpack, browse our library of 27+ print-ready PDFs formatted for A4 &amp; US Letter.
          </p>
        </div>
        <Link
          href="/downloads"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold shrink-0 shadow-md transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Browse Free PDF Planners</span>
        </Link>
      </div>
    </div>
  );
}
