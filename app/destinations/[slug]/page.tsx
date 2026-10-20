import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Compass, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight,
  BookOpen,
  Bus,
  Coffee,
  Globe
} from 'lucide-react';
import { destinationsData, Destination } from '@/data/destinations';
import { downloadableResourcesData } from '@/data/downloads';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return destinationsData.map((d) => ({
    slug: d.slug,
  }));
}

export default function DestinationDetailPage({ params }: PageProps) {
  const dest = destinationsData.find((d) => d.slug === params.slug);

  if (!dest) {
    notFound();
  }

  // Recommended free printables for this trip
  const recommendedDownloads = downloadableResourcesData.slice(0, 3);
  const relatedDestinations = destinationsData.filter(d => d.continent === dest.continent && d.id !== dest.id).slice(0, 2);

  return (
    <article className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <header className="bg-white border-b border-[#E6E2D8] pt-6 pb-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <Breadcrumbs 
            items={[
              { label: 'Destinations', href: '/destinations' },
              { label: dest.continent, href: `/destinations?continent=${encodeURIComponent(dest.continent)}` },
              { label: dest.country }
            ]} 
          />

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                {dest.continent} · {dest.country}
              </span>
              <span className="text-xs text-charcoal-400">· {dest.region}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-charcoal-900 leading-[1.1]">
              {dest.name}
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-charcoal-600 max-w-3xl">
              &ldquo;{dest.tagline}&rdquo;
            </p>
          </div>

          {/* Quick Fact Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-cream-100 border border-[#E6E2D8] text-xs">
            <div className="space-y-0.5">
              <span className="text-charcoal-400 uppercase tracking-wider font-semibold block text-[10px]">Best Season</span>
              <span className="font-medium text-charcoal-800">{dest.bestSeason}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-charcoal-400 uppercase tracking-wider font-semibold block text-[10px]">Ideal Duration</span>
              <span className="font-medium text-charcoal-800">{dest.idealDuration}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-charcoal-400 uppercase tracking-wider font-semibold block text-[10px]">Budget Level</span>
              <span className="font-medium text-charcoal-800">{dest.budgetLevel} (Moderate to High)</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-charcoal-400 uppercase tracking-wider font-semibold block text-[10px]">Verified Info</span>
              <span className="font-medium text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> {dest.practicalTips.safetyVerifiedDate}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CINEMATIC HERO IMAGE & GALLERY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#E6E2D8] shadow-lg bg-forest-900/10">
          <SafeImage
            src={dest.heroImage}
            alt={dest.name}
            fallbackTitle={dest.name}
            fallbackCategory={`${dest.continent} · ${dest.country}`}
            fill
            priority
            className="object-cover"
          />
        </div>

        {dest.galleryImages && dest.galleryImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {dest.galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E6E2D8] bg-forest-900/10">
                <SafeImage 
                  src={img} 
                  alt={`${dest.name} vista ${idx + 1}`} 
                  fallbackTitle={`${dest.name} View ${idx + 1}`}
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. MAIN CONTENT BODY */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Narrative Guide */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 border-b border-[#E6E2D8] pb-3">
              Destination Overview
            </h2>
            <p className="text-base text-charcoal-700 leading-relaxed font-sans">
              {dest.overview}
            </p>
          </section>

          {/* Key Experiences & Highlights */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 border-b border-[#E6E2D8] pb-3">
              Notable Experiences &amp; Highlights
            </h2>
            <ul className="space-y-3">
              {dest.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E6E2D8]">
                  <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <span className="text-sm text-charcoal-800 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Suggested Multi-Day Itinerary */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                {dest.suggestedItinerary.title}
              </h2>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cream-200 text-charcoal-700">
                {dest.suggestedItinerary.days.length} Days
              </span>
            </div>

            <div className="space-y-4">
              {dest.suggestedItinerary.days.map((d) => (
                <div key={d.day} className="p-5 rounded-xl bg-white border border-[#E6E2D8] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-forest-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {d.day}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">
                      {d.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 pl-8 leading-relaxed">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Logistics & Etiquette */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 border-b border-[#E6E2D8] pb-3">
              Practical Logistics &amp; Cultural Guidance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#E6E2D8] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Bus className="w-4 h-4 text-forest-700" /> Getting Around &amp; Transport
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {dest.practicalTips.transport}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E6E2D8] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-terracotta-600" /> Culture &amp; Etiquette
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {dest.practicalTips.culture}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E6E2D8] space-y-2 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-700" /> Currency &amp; Verification Note
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {dest.practicalTips.currency}. Information verified as of {dest.practicalTips.safetyVerifiedDate}.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar: Free Printables & Interactive Tools */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Free Printable Companion Card */}
          <div className="bg-forest-900 text-white rounded-2xl p-6 space-y-5 shadow-md">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                Trip Planning Companions
              </span>
              <h3 className="font-serif text-xl font-bold">Free Printable Planners</h3>
              <p className="text-xs text-gray-300">
                Print these genuine PDF resources to take with you to {dest.country}:
              </p>
            </div>

            <div className="space-y-3">
              {recommendedDownloads.map((res) => (
                <div key={res.id} className="p-3 rounded-lg bg-forest-800/80 border border-forest-700 space-y-2">
                  <p className="font-serif text-xs font-medium text-white">{res.title}</p>
                  <div className="flex items-center justify-between text-[10px] text-gray-300">
                    <span>{res.pages} Pages · PDF</span>
                    <a
                      href={res.downloadUrl}
                      download
                      className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" /> Download Free
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/downloads"
              className="block text-center text-xs text-emerald-300 hover:underline pt-2"
            >
              Browse All 27+ Free PDF Planners →
            </Link>
          </div>

          {/* Interactive Tools Callout */}
          <div className="bg-white rounded-2xl p-6 border border-[#E6E2D8] space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">
              Interactive Tools
            </span>
            <h3 className="font-serif text-lg font-bold text-charcoal-900">
              Plan Your {dest.name} Budget
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Use our in-browser Travel Budget Calculator to estimate your exact flight, lodging, and daily meal expenses for {dest.country}.
            </p>
            <Link
              href="/tools/budget-calculator"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-charcoal-900 hover:bg-forest-800 text-white text-xs font-semibold transition-colors"
            >
              <span>Open Budget Calculator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Related Destinations */}
          {relatedDestinations.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
                More in {dest.continent}
              </p>
              <div className="space-y-3">
                {relatedDestinations.map(rel => (
                  <Link
                    key={rel.id}
                    href={`/destinations/${rel.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 transition-colors group"
                  >
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-forest-900/10">
                      <SafeImage src={rel.heroImage} alt={rel.name} fallbackTitle={rel.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-charcoal-900 group-hover:text-forest-700">{rel.name}</p>
                      <p className="text-[11px] text-charcoal-500">{rel.country} · {rel.idealDuration}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
