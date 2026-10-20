import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, MapPin, Download, Sparkles, CheckCircle2, ArrowLeft, ArrowRight, Share2, BookOpen } from 'lucide-react';
import { travelDiariesData } from '@/data/diaries';
import { downloadableResourcesData } from '@/data/downloads';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return travelDiariesData.map((d) => ({
    slug: d.slug,
  }));
}

export default function DiaryDetailPage({ params }: PageProps) {
  const diary = travelDiariesData.find((d) => d.slug === params.slug);

  if (!diary) {
    notFound();
  }

  // Recommended printable resources
  const suggestedDownloads = downloadableResourcesData.filter(dl => 
    diary.suggestedDownloads.includes(dl.id)
  );

  const relatedDiaries = travelDiariesData.filter(d => d.id !== diary.id).slice(0, 2);

  return (
    <article className="space-y-12 pb-20">
      {/* 1. EDITORIAL HEADER */}
      <header className="bg-white border-b border-[#E6E2D8] pt-8 pb-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Breadcrumbs 
            items={[
              { label: 'Travel Diaries', href: '/diaries' },
              { label: diary.destination }
            ]} 
          />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-wider text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                {diary.category}
              </span>
              <span className="text-charcoal-400">·</span>
              <span className="text-charcoal-600 font-medium">{diary.destination}, {diary.country}</span>
              <span className="text-charcoal-400">·</span>
              <span className="text-charcoal-500">{diary.date}</span>
              <span className="text-charcoal-400">·</span>
              <span className="flex items-center gap-1 text-charcoal-500"><Clock className="w-3.5 h-3.5" /> {diary.readTime}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-charcoal-900 leading-[1.12]">
              {diary.title}
            </h1>

            {diary.subtitle && (
              <p className="font-serif italic text-lg sm:text-xl text-charcoal-600 leading-relaxed">
                {diary.subtitle}
              </p>
            )}

            {diary.isIllustrativeSample && (
              <div className="inline-block p-3 rounded-lg bg-cream-100 border border-[#E6E2D8] text-[11px] text-charcoal-600">
                <strong>Editorial Note:</strong> This is an illustrative sample narrative created to showcase the ForeverAdventurer editorial style and reflection framework.
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. CINEMATIC HERO IMAGE WITH CAPTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-2">
        <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-[#E6E2D8] shadow-lg bg-forest-900/10">
          <SafeImage
            src={diary.heroImage}
            alt={diary.title}
            fallbackTitle={diary.title}
            fallbackCategory={diary.category}
            fill
            priority
            className="object-cover"
          />
        </div>
        {diary.heroCaption && (
          <p className="text-xs text-charcoal-500 italic text-center font-serif">
            {diary.heroCaption}
          </p>
        )}
      </section>

      {/* 3. STORY CONTENT & MINDFUL REFLECTIONS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Lead Excerpt */}
        <p className="text-lg sm:text-xl font-serif text-charcoal-900 leading-relaxed border-l-2 border-forest-700 pl-6 italic">
          {diary.excerpt}
        </p>

        {/* Narrative Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-charcoal-800 leading-relaxed font-sans">
          {diary.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Reflections Box */}
        {diary.reflections.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E6E2D8] space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Mindful Reflections from this Journey
            </span>
            <ul className="space-y-3 text-sm text-charcoal-800 font-serif italic">
              {diary.reflections.map((ref, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-forest-700 font-bold text-base mt-0.5">•</span>
                  <span>&ldquo;{ref}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Practical Takeaways */}
        {diary.practicalTakeaways.length > 0 && (
          <div className="p-6 rounded-xl bg-white border border-[#E6E2D8] space-y-4">
            <h3 className="font-serif text-lg font-bold text-charcoal-900">
              Practical Lessons for Traveling to {diary.destination}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
              {diary.practicalTakeaways.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Suggested Free Downloadable Companions */}
        {suggestedDownloads.length > 0 && (
          <div className="p-6 rounded-2xl bg-forest-900 text-white space-y-4 shadow-md">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                Recommended Printable Companions
              </span>
              <h3 className="font-serif text-lg font-bold">Print Before You Go</h3>
              <p className="text-xs text-gray-300">
                Take these free printable tools with you to preserve your thoughts and stay organized:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestedDownloads.map((res) => (
                <div key={res.id} className="p-3.5 rounded-xl bg-forest-800 border border-forest-700 space-y-2">
                  <p className="font-serif text-xs font-semibold text-white">{res.title}</p>
                  <p className="text-[11px] text-gray-300 line-clamp-2">{res.description}</p>
                  <a
                    href={res.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 pt-1"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Free PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags & Share */}
        <div className="pt-6 border-t border-[#E6E2D8] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap gap-1.5">
            {diary.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-cream-200 text-charcoal-700">
                #{tag}
              </span>
            ))}
          </div>

          <Link href="/diaries" className="text-forest-700 hover:underline font-semibold flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all diaries
          </Link>
        </div>
      </div>

      {/* 4. RELATED STORIES */}
      {relatedDiaries.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-8 pt-12 border-t border-[#E6E2D8] space-y-6">
          <h3 className="font-serif text-2xl font-bold text-charcoal-900">
            More Travel Reflections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedDiaries.map((rel) => (
              <Link
                key={rel.id}
                href={`/diaries/${rel.slug}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E6E2D8] hover:border-forest-600 transition-colors group"
              >
                <div className="relative w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-forest-900/10">
                  <SafeImage src={rel.heroImage} alt={rel.title} fallbackTitle={rel.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-terracotta-600">{rel.category}</span>
                  <h4 className="font-serif text-sm font-bold text-charcoal-900 group-hover:text-forest-700">{rel.title}</h4>
                  <p className="text-[11px] text-charcoal-500 mt-0.5">{rel.destination} · {rel.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
