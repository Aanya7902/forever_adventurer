'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Compass, 
  Search, 
  Download, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  BookOpen, 
  Calendar, 
  Calculator, 
  CheckSquare, 
  Globe2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SearchModal from './SearchModal';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const subNavLinks = [
    { label: 'Latest Stories', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Travel Diaries', href: '/diaries' },
    { label: 'Travel Guides', href: '/guides' },
    { label: 'Free Printables (27+)', href: '/downloads', highlight: true },
    { label: 'Interactive Tools', href: '/tools' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#121714] text-[#E6E2D8] text-[11px] tracking-wider uppercase py-1.5 px-4 sm:px-8 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Forever Adventurer · Your Travel Hub for Discovering, Planning &amp; Journeying
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/downloads" className="hover:text-white transition-colors flex items-center gap-1 text-emerald-300">
              <Download className="w-3 h-3" /> 28 Free Printable Planners
            </Link>
            <span className="text-charcoal-600">|</span>
            <span className="text-charcoal-400">Global Edition</span>
            <span className="text-charcoal-600">|</span>
            <Link href="/about" className="hover:text-white transition-colors">
              About the Hub
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6E2D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Tagline */}
            <Link href="/" onClick={closeAll} className="group flex flex-col justify-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-900 group-hover:text-forest-700 transition-colors uppercase">
                Forever Adventurer
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] font-sans font-semibold text-forest-700 group-hover:text-forest-800 transition-colors -mt-0.5">
                Your Travel Hub
              </span>
            </Link>

            {/* Desktop Navigation Links with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* Explore the World */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('explore')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/destinations"
                  className={`text-sm font-medium tracking-wide flex items-center gap-1 py-2 transition-colors ${
                    pathname.startsWith('/destinations') ? 'text-forest-700 font-semibold' : 'text-charcoal-800 hover:text-forest-700'
                  }`}
                >
                  Explore the World
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'explore' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'explore' && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E6E2D8] p-4 animate-fadeIn">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400 mb-2">Explore By Region</p>
                    <div className="grid grid-cols-2 gap-1 mb-3">
                      {['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'].map((continent) => (
                        <Link
                          key={continent}
                          href={`/destinations?continent=${encodeURIComponent(continent)}`}
                          onClick={closeAll}
                          className="text-xs px-2.5 py-1.5 rounded-md text-charcoal-700 hover:bg-forest-50 hover:text-forest-700 flex items-center justify-between"
                        >
                          {continent}
                        </Link>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-[#E6E2D8]">
                      <Link
                        href="/destinations"
                        onClick={closeAll}
                        className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center justify-between group"
                      >
                        <span>Browse All 50+ Destinations</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Travel Diaries */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('diaries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/diaries"
                  className={`text-sm font-medium tracking-wide flex items-center gap-1 py-2 transition-colors ${
                    pathname.startsWith('/diaries') ? 'text-forest-700 font-semibold' : 'text-charcoal-800 hover:text-forest-700'
                  }`}
                >
                  Travel Diaries
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'diaries' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'diaries' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#E6E2D8] p-4 animate-fadeIn">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400 mb-2">Editorial Stories</p>
                    <div className="space-y-1 mb-3">
                      <Link
                        href="/diaries/walking-the-limestone-at-dawn-dubrovnik"
                        onClick={closeAll}
                        className="block p-2 rounded-md hover:bg-forest-50 text-xs text-charcoal-800 hover:text-forest-700"
                      >
                        <p className="font-serif font-medium">Walking the Limestone at Dawn</p>
                        <p className="text-[11px] text-charcoal-500">Dubrovnik, Croatia · 6 min read</p>
                      </Link>
                      <Link
                        href="/diaries/the-grammar-of-silence-kyoto-zen-gardens"
                        onClick={closeAll}
                        className="block p-2 rounded-md hover:bg-forest-50 text-xs text-charcoal-800 hover:text-forest-700"
                      >
                        <p className="font-serif font-medium">The Grammar of Silence</p>
                        <p className="text-[11px] text-charcoal-500">Kyoto, Japan · 7 min read</p>
                      </Link>
                    </div>
                    <div className="pt-3 border-t border-[#E6E2D8]">
                      <Link
                        href="/diaries"
                        onClick={closeAll}
                        className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center justify-between"
                      >
                        <span>View All Travel Diaries</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Travel Guides */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('guides')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/guides"
                  className={`text-sm font-medium tracking-wide flex items-center gap-1 py-2 transition-colors ${
                    pathname.startsWith('/guides') ? 'text-forest-700 font-semibold' : 'text-charcoal-800 hover:text-forest-700'
                  }`}
                >
                  Travel Guides
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'guides' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'guides' && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E6E2D8] p-4 animate-fadeIn">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400 mb-2">In-Depth Itineraries</p>
                    <div className="space-y-1 mb-3">
                      <Link
                        href="/guides/dalmatian-coast-7-day-guide"
                        onClick={closeAll}
                        className="block p-2 rounded-md hover:bg-forest-50 text-xs text-charcoal-800 hover:text-forest-700"
                      >
                        <p className="font-serif font-medium">Dalmatian Coast 7-Day Guide</p>
                        <p className="text-[11px] text-charcoal-500">Croatia · Split, Hvar &amp; Dubrovnik</p>
                      </Link>
                      <Link
                        href="/guides/essential-kyoto-4-day-cultural-guide"
                        onClick={closeAll}
                        className="block p-2 rounded-md hover:bg-forest-50 text-xs text-charcoal-800 hover:text-forest-700"
                      >
                        <p className="font-serif font-medium">Essential Kyoto 4-Day Guide</p>
                        <p className="text-[11px] text-charcoal-500">Japan · Culture, Gardens &amp; Tea</p>
                      </Link>
                    </div>
                    <div className="pt-3 border-t border-[#E6E2D8]">
                      <Link
                        href="/guides"
                        onClick={closeAll}
                        className="text-xs font-semibold text-forest-700 hover:text-forest-800 flex items-center justify-between"
                      >
                        <span>Browse All Guides &amp; Itineraries</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Free Downloads (Highlighted Badge) */}
              <Link 
                href="/downloads"
                className={`text-sm font-medium tracking-wide flex items-center gap-1.5 py-1 px-3 rounded-full transition-all ${
                  pathname.startsWith('/downloads') 
                    ? 'bg-forest-700 text-white shadow-sm' 
                    : 'text-charcoal-900 bg-cream-200 hover:bg-forest-50 hover:text-forest-700 border border-[#E6E2D8]'
                }`}
              >
                <span>Free Downloads</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 bg-emerald-600 text-white rounded-full">
                  27+
                </span>
              </Link>

              {/* Plan Your Trip (Interactive Tools) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('tools')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/tools"
                  className={`text-sm font-medium tracking-wide flex items-center gap-1 py-2 transition-colors ${
                    pathname.startsWith('/tools') ? 'text-forest-700 font-semibold' : 'text-charcoal-800 hover:text-forest-700'
                  }`}
                >
                  Plan Your Trip
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'tools' && (
                  <div className="absolute top-full right-0 w-72 bg-white rounded-xl shadow-xl border border-[#E6E2D8] p-4 animate-fadeIn">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-400 mb-2">Interactive Trip Tools</p>
                    <div className="space-y-1 mb-3">
                      <Link
                        href="/tools/packing-checklist"
                        onClick={closeAll}
                        className="flex items-center gap-2.5 p-2 rounded-md hover:bg-forest-50 text-xs text-charcoal-800 hover:text-forest-700"
                      >
                        <CheckSquare className="w-4 h-4 text-forest-700" />
                        <div>
                          <p className="font-medium">Interactive Packing Checklist</p>
                          <p className="text-[10px] text-charcoal-500">Customise &amp; save items</p>
                        </div>
                      </Link>
                      <Link
                        href="/tools/budget-calculator"
                        onClick={closeAll}
                        className="flex items-center gap-2.5 p-2 rounded-md hover:bg-forest-50 text-xs text-charcoal-800 hover:text-forest-700"
                      >
                        <Calculator className="w-4 h-4 text-forest-700" />
                        <div>
                          <p className="font-medium">Trip Budget Calculator</p>
                          <p className="text-[10px] text-charcoal-500">Estimate total trip expenses</p>
                        </div>
                      </Link>
                      <Link
                        href="/tools/itinerary-planner"
                        onClick={closeAll}
                        className="flex items-center gap-2.5 p-2 rounded-md hover:bg-forest-50 text-xs text-charcoal-800 hover:text-forest-700"
                      >
                        <Calendar className="w-4 h-4 text-forest-700" />
                        <div>
                          <p className="font-medium">Trip Itinerary Planner</p>
                          <p className="text-[10px] text-charcoal-500">Day-by-day activity board</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <Link 
                href="/about" 
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === '/about' ? 'text-forest-700 font-semibold' : 'text-charcoal-800 hover:text-forest-700'
                }`}
              >
                About
              </Link>
            </nav>

            {/* Right Side Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Search Trigger Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-[#E6E2D8] bg-cream-50 text-charcoal-600 hover:border-forest-600 hover:text-charcoal-900 transition-colors text-xs"
                title="Search destinations, guides, printables"
              >
                <Search className="w-4 h-4 text-charcoal-500" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.2 bg-cream-200 text-charcoal-500 rounded text-[10px] font-mono">⌘K</kbd>
              </button>

              {/* CTA Button */}
              <Link
                href="/downloads"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest-700 hover:bg-forest-800 text-white text-xs font-medium tracking-wide transition-colors shadow-sm hover:shadow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Free Planners</span>
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-charcoal-800 hover:bg-cream-200 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Sub-Navigation Bar (Flash Pack Reference Principle) */}
        <div className="border-t border-[#E6E2D8] bg-[#FAF7F2] overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex items-center gap-8 py-2.5 text-xs tracking-wider uppercase font-medium whitespace-nowrap">
              {subNavLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative py-1 transition-colors ${
                      isActive 
                        ? 'text-forest-700 font-bold' 
                        : item.highlight
                        ? 'text-emerald-700 font-bold hover:text-emerald-800'
                        : 'text-charcoal-600 hover:text-charcoal-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest-700 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm" onClick={closeAll} />
          
          <div className="relative ml-auto w-full max-w-xs bg-[#FDFBF7] h-full shadow-2xl flex flex-col z-10 p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6E2D8]">
              <span className="font-serif font-bold text-lg text-charcoal-900">ForeverAdventurer</span>
              <button onClick={closeAll} className="p-1 rounded-full text-charcoal-600 hover:bg-cream-200">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-4 border-b border-[#E6E2D8]">
              <button
                onClick={() => { closeAll(); setIsSearchOpen(true); }}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[#E6E2D8] bg-white text-charcoal-500 text-xs"
              >
                <Search className="w-4 h-4" />
                <span>Search destinations &amp; printables...</span>
              </button>
            </div>

            <div className="flex-1 py-4 space-y-4">
              <Link 
                href="/" 
                onClick={closeAll} 
                className="block text-base font-serif font-medium text-charcoal-900 hover:text-forest-700"
              >
                Home
              </Link>
              <Link 
                href="/destinations" 
                onClick={closeAll} 
                className="block text-base font-serif font-medium text-charcoal-900 hover:text-forest-700"
              >
                Explore the World (50+ Destinations)
              </Link>
              <Link 
                href="/diaries" 
                onClick={closeAll} 
                className="block text-base font-serif font-medium text-charcoal-900 hover:text-forest-700"
              >
                Travel Diaries
              </Link>
              <Link 
                href="/guides" 
                onClick={closeAll} 
                className="block text-base font-serif font-medium text-charcoal-900 hover:text-forest-700"
              >
                Travel Guides &amp; Itineraries
              </Link>
              <Link 
                href="/downloads" 
                onClick={closeAll} 
                className="flex items-center justify-between text-base font-serif font-medium text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200"
              >
                <span>Free Downloads (27+ PDFs)</span>
                <Download className="w-4 h-4 text-emerald-700" />
              </Link>
              <Link 
                href="/tools" 
                onClick={closeAll} 
                className="block text-base font-serif font-medium text-charcoal-900 hover:text-forest-700"
              >
                Plan Your Trip (Interactive Tools)
              </Link>
              <Link 
                href="/about" 
                onClick={closeAll} 
                className="block text-base font-serif font-medium text-charcoal-900 hover:text-forest-700"
              >
                About &amp; Editorial Philosophy
              </Link>
            </div>

            <div className="pt-4 border-t border-[#E6E2D8] text-xs text-charcoal-500 space-y-2">
              <p>ForeverAdventurer Publication</p>
              <p>All downloadable resources are 100% free with no registration required.</p>
            </div>
          </div>
        </div>
      )}

      {/* Global Interactive Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
