import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { Compass, Calendar, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { travelGuidesData } from '@/data/guides';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      <Breadcrumbs items={[{ label: 'Travel Guides & Itineraries' }]} />

      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5" /> Curated Field Guides
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-charcoal-900 leading-tight">
          Practical Travel Guides
        </h1>
        <p className="text-base text-charcoal-600 leading-relaxed">
          Comprehensive, field-tested itineraries balancing iconic wonders with quiet local corners. Detailed day-by-day pacing, transport strategies, and estimated daily budgets.
        </p>
      </div>

      {/* List of Travel Guides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {travelGuidesData.map((guide) => (
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
                  {guide.duration} · {guide.difficulty}
                </div>
              </Link>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-charcoal-500">
                  <span className="font-medium text-charcoal-800">{guide.destination}, {guide.country}</span>
                  <span>·</span>
                  <span>{guide.season}</span>
                </div>

                <Link href={`/guides/${guide.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                    {guide.title}
                  </h3>
                </Link>

                <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed">
                  {guide.overview}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#E6E2D8] mt-4 flex items-center justify-between text-xs">
              <span className="text-charcoal-500">Budget: <strong className="text-charcoal-800">{guide.idealBudget}</strong></span>
              <Link
                href={`/guides/${guide.slug}`}
                className="font-semibold text-forest-700 hover:text-forest-800 flex items-center gap-1"
              >
                <span>Full Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
