import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  ArrowRight, 
  DollarSign, 
  Backpack, 
  Compass 
} from 'lucide-react';
import { travelGuidesData } from '@/data/guides';
import { downloadableResourcesData } from '@/data/downloads';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return travelGuidesData.map((g) => ({
    slug: g.slug,
  }));
}

export default function GuideDetailPage({ params }: PageProps) {
  const guide = travelGuidesData.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  const suggestedDownloads = downloadableResourcesData.filter(dl => 
    guide.suggestedDownloads.includes(dl.id)
  );

  return (
    <article className="space-y-16 pb-20">
      {/* 1. GUIDE HEADER */}
      <header className="bg-white border-b border-[#E6E2D8] pt-8 pb-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Breadcrumbs 
            items={[
              { label: 'Travel Guides', href: '/guides' },
              { label: guide.destination }
            ]} 
          />

          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              {guide.destination}, {guide.country} · {guide.duration} Itinerary
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 leading-[1.12]">
              {guide.title}
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-charcoal-600 max-w-3xl">
              {guide.subtitle}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-cream-100 border border-[#E6E2D8] text-xs">
            <div>
              <span className="text-charcoal-400 uppercase text-[10px] font-semibold block">Duration</span>
              <span className="font-medium text-charcoal-900">{guide.duration}</span>
            </div>
            <div>
              <span className="text-charcoal-400 uppercase text-[10px] font-semibold block">Ideal Season</span>
              <span className="font-medium text-charcoal-900">{guide.season}</span>
            </div>
            <div>
              <span className="text-charcoal-400 uppercase text-[10px] font-semibold block">Estimated Budget</span>
              <span className="font-medium text-charcoal-900">{guide.idealBudget}</span>
            </div>
            <div>
              <span className="text-charcoal-400 uppercase text-[10px] font-semibold block">Verified Date</span>
              <span className="font-medium text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> {guide.verifiedDate}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO IMAGE */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#E6E2D8] shadow-lg bg-forest-900/10">
          <SafeImage
            src={guide.heroImage}
            alt={guide.title}
            fallbackTitle={guide.title}
            fallbackCategory={`${guide.destination}, ${guide.country}`}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* 3. MAIN ITINERARY & CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900 border-b border-[#E6E2D8] pb-3">
              Route Overview
            </h2>
            <p className="text-base text-charcoal-700 leading-relaxed font-sans">
              {guide.overview}
            </p>
          </section>

          {/* Day-by-Day Summary Blocks */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900 border-b border-[#E6E2D8] pb-3">
              Itinerary Breakdown
            </h2>
            <div className="space-y-4">
              {guide.itinerarySummary.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-[#E6E2D8] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-forest-700 text-white text-[11px] font-bold">
                      {item.dayRange}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 pl-2 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* In-Depth Practical Sections */}
          {guide.keySections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 border-b border-[#E6E2D8] pb-3">
                {sec.heading}
              </h2>
              <p className="text-base text-charcoal-700 leading-relaxed">
                {sec.body}
              </p>
              <div className="p-5 rounded-xl bg-cream-50 border border-[#E6E2D8] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                  Field Tips:
                </span>
                <ul className="space-y-1.5 text-xs text-charcoal-600">
                  {sec.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-forest-700 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Packing Essentials Box */}
          <div className="p-6 rounded-2xl bg-white border border-[#E6E2D8] space-y-4 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
              <Backpack className="w-4 h-4" /> Essential Packing Gear
            </span>
            <ul className="space-y-2.5 text-xs text-charcoal-700">
              {guide.packingEssentials.map((gear, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{gear}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Companion Printable Resources */}
          <div className="p-6 rounded-2xl bg-forest-900 text-white space-y-4 shadow-md">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
              Printable Companions
            </span>
            <h3 className="font-serif text-lg font-bold">Printable Itinerary Sheets</h3>
            <div className="space-y-3">
              {suggestedDownloads.map((res) => (
                <div key={res.id} className="p-3 rounded-lg bg-forest-800 border border-forest-700 space-y-1.5">
                  <p className="font-serif text-xs font-semibold text-white">{res.title}</p>
                  <a
                    href={res.downloadUrl}
                    download
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 hover:text-emerald-200"
                  >
                    <Download className="w-3 h-3" /> Download Free PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
