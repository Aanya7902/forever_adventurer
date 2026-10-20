'use client';

import React, { useState } from 'react';
import SafeImage from '@/components/SafeImage';
import { 
  Download, 
  Search, 
  Printer, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Eye, 
  X, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { downloadableResourcesData, downloadCategories, DownloadableResource } from '@/data/downloads';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Resources');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewResource, setPreviewResource] = useState<DownloadableResource | null>(null);

  const filtered = downloadableResourcesData.filter((item) => {
    const matchesCat = selectedCategory === 'All Resources' || item.category === selectedCategory;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <Breadcrumbs items={[{ label: 'Free Downloads Library' }]} />

      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1.5">
          <Download className="w-3.5 h-3.5" /> Genuinely Free Travel Printables Library
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal-900 leading-tight">
          Printable Travel Planners &amp; Journals
        </h1>
        <p className="text-base text-charcoal-600 leading-relaxed">
          A curated collection of 27+ print-ready PDF planners, reflection journals, packing checklists, and itinerary templates. Designed for standard A4 and US Letter paper. Always 100% free with no registration or paywalls.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#E6E2D8] pb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {downloadCategories.map((cat) => (
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

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search 27+ printable tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full border border-[#E6E2D8] bg-white text-xs text-charcoal-900 focus:outline-none focus:border-forest-600"
          />
        </div>
      </div>

      {/* Grid of Resources */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((res) => (
          <div
            key={res.id}
            id={res.slug}
            className="bg-white rounded-xl overflow-hidden border border-[#E6E2D8] flex flex-col justify-between editorial-card group"
          >
            <div>
              {/* Preview image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-900/10">
                <SafeImage
                  src={res.previewImage}
                  alt={res.title}
                  fallbackTitle={res.title}
                  fallbackCategory={res.category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-semibold text-charcoal-800 uppercase tracking-wider">
                  {res.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-charcoal-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-mono">
                  {res.pages} {res.pages === 1 ? 'Page' : 'Pages'} · PDF
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">
                  {res.description}
                </p>

                <ul className="space-y-1.5 pt-2 text-xs text-charcoal-600">
                  {res.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-[#E6E2D8] mt-4 flex items-center gap-2">
              <button
                onClick={() => setPreviewResource(res)}
                className="flex-1 py-2.5 rounded-lg border border-[#E6E2D8] hover:bg-cream-100 text-xs font-semibold text-charcoal-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Details</span>
              </button>
              <a
                href={res.downloadUrl}
                download
                className="flex-1 py-2.5 rounded-lg bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Resource Detail Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm">
          <div className="bg-[#FDFBF7] rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-[#E6E2D8] space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-forest-700 bg-forest-50 px-2.5 py-0.5 rounded border border-forest-200">
                  {previewResource.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 mt-2">
                  {previewResource.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="p-1 rounded-full text-charcoal-500 hover:bg-cream-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
              {previewResource.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                What&apos;s Included in this Printable:
              </span>
              <ul className="space-y-2 text-xs text-charcoal-700">
                {previewResource.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-cream-100 border border-[#E6E2D8] space-y-1 text-xs">
              <p className="font-semibold text-charcoal-800">Recommended For:</p>
              <p className="text-charcoal-600">{previewResource.recommendedFor}</p>
              <div className="flex items-center justify-between pt-2 border-t border-[#E6E2D8] text-[11px] text-charcoal-500 font-mono">
                <span>Format: {previewResource.format}</span>
                <span>Pages: {previewResource.pages}</span>
                <span>Size: {previewResource.fileSize}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={previewResource.downloadUrl}
                download
                className="flex-1 py-3 rounded-full bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Free PDF ({previewResource.fileSize})</span>
              </a>
              <button
                onClick={() => setPreviewResource(null)}
                className="px-6 py-3 rounded-full border border-[#E6E2D8] text-xs font-medium text-charcoal-700 hover:bg-cream-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
