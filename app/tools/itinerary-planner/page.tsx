'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Plus, Trash2, Printer, Download, Clock, MapPin, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

interface DayPlan {
  id: string;
  dayNumber: number;
  dateStr: string;
  location: string;
  morning: string;
  afternoon: string;
  evening: string;
  confirmationCodes: string;
}

const defaultDays: DayPlan[] = [
  {
    id: 'day-1',
    dayNumber: 1,
    dateStr: 'Day 1',
    location: 'Arrival & Old Town Exploration',
    morning: 'Arrive at international airport, board train/shuttle to central accommodation, drop bags.',
    afternoon: 'Wander the historic cobblestone quarters, stop for local espresso, visit central market.',
    evening: 'Sunset viewpoint walk, traditional dinner at family-run taverna / trattoria.',
    confirmationCodes: 'Flight BA1428 / Booking #849204',
  },
  {
    id: 'day-2',
    dayNumber: 2,
    dateStr: 'Day 2',
    location: 'Premier Landmark & Cultural Exploration',
    morning: 'Early morning visit to historic citadel / temple complex before peak mid-day crowds arrive.',
    afternoon: 'Regional art museum or scenic botanical garden walk; leisurely lunch.',
    evening: 'Aperitivo overlooking the water, relaxed evening stroll.',
    confirmationCodes: 'Museum Entry Voucher #TK-9921',
  },
  {
    id: 'day-3',
    dayNumber: 3,
    dateStr: 'Day 3',
    location: 'Scenic Day Excursion',
    morning: 'Morning departure for coastal hike, vineyard valley, or adjacent island ferry.',
    afternoon: 'Outdoor exploration, local wine tasting, or coastal swimming.',
    evening: 'Return to base city; seafood dinner.',
    confirmationCodes: 'Ferry Ticket QR #77312',
  },
];

export default function ItineraryPlannerPage() {
  const [tripTitle, setTripTitle] = useState('My Slow Travel Journey');
  const [days, setDays] = useState<DayPlan[]>(defaultDays);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fa_itinerary_planner');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.tripTitle) setTripTitle(parsed.tripTitle);
        if (parsed.days && parsed.days.length > 0) setDays(parsed.days);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save to localStorage
  const savePlan = (newTitle: string, newDays: DayPlan[]) => {
    setTripTitle(newTitle);
    setDays(newDays);
    localStorage.setItem('fa_itinerary_planner', JSON.stringify({ tripTitle: newTitle, days: newDays }));
  };

  const updateDay = (id: string, field: keyof DayPlan, val: any) => {
    const updated = days.map((d) => (d.id === id ? { ...d, [field]: val } : d));
    savePlan(tripTitle, updated);
  };

  const addDay = () => {
    const nextNum = days.length + 1;
    const newDay: DayPlan = {
      id: 'day-' + Date.now(),
      dayNumber: nextNum,
      dateStr: `Day ${nextNum}`,
      location: 'New Destination / Focus',
      morning: '',
      afternoon: '',
      evening: '',
      confirmationCodes: '',
    };
    savePlan(tripTitle, [...days, newDay]);
  };

  const removeDay = (id: string) => {
    if (days.length <= 1) return;
    const filtered = days.filter((d) => d.id !== id).map((d, idx) => ({ ...d, dayNumber: idx + 1 }));
    savePlan(tripTitle, filtered);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <div className="no-print">
        <Breadcrumbs items={[{ label: 'Plan Your Trip', href: '/tools' }, { label: 'Itinerary Planner' }]} />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E6E2D8] pb-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Day-by-Day Journey Builder
          </span>
          <input
            type="text"
            value={tripTitle}
            onChange={(e) => savePlan(e.target.value, days)}
            className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 bg-transparent border-b border-transparent hover:border-[#E6E2D8] focus:border-forest-600 focus:outline-none w-full"
          />
          <p className="text-xs sm:text-sm text-charcoal-600">
            Structure your days with morning, afternoon, and evening pacing. Auto-saved locally.
          </p>
        </div>

        <div className="no-print flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-full border border-[#E6E2D8] bg-white hover:bg-cream-100 text-xs font-semibold text-charcoal-800 flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Itinerary</span>
          </button>
          <button
            onClick={addDay}
            className="px-4 py-2 rounded-full bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Day</span>
          </button>
        </div>
      </div>

      {/* Day Cards */}
      <div className="space-y-8">
        {days.map((d) => (
          <div key={d.id} className="bg-white rounded-2xl border border-[#E6E2D8] p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-forest-700 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {d.dayNumber}
                </span>
                <input
                  type="text"
                  value={d.location}
                  onChange={(e) => updateDay(d.id, 'location', e.target.value)}
                  placeholder="Day focus / destination..."
                  className="font-serif text-xl font-bold text-charcoal-900 bg-transparent border-b border-transparent hover:border-[#E6E2D8] focus:border-forest-600 focus:outline-none"
                />
              </div>

              {days.length > 1 && (
                <button
                  onClick={() => removeDay(d.id)}
                  className="no-print text-charcoal-400 hover:text-red-600 p-1 rounded"
                  title="Remove this day"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Morning */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-forest-800 block">
                  Morning (Key Sights / Transit)
                </label>
                <textarea
                  rows={4}
                  value={d.morning}
                  onChange={(e) => updateDay(d.id, 'morning', e.target.value)}
                  placeholder="Morning activities..."
                  className="w-full p-3 rounded-xl border border-[#E6E2D8] bg-[#FDFBF7] text-xs text-charcoal-800 focus:outline-none focus:border-forest-600"
                />
              </div>

              {/* Afternoon */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-700 block">
                  Afternoon (Lunch &amp; Leisure)
                </label>
                <textarea
                  rows={4}
                  value={d.afternoon}
                  onChange={(e) => updateDay(d.id, 'afternoon', e.target.value)}
                  placeholder="Afternoon exploration..."
                  className="w-full p-3 rounded-xl border border-[#E6E2D8] bg-[#FDFBF7] text-xs text-charcoal-800 focus:outline-none focus:border-forest-600"
                />
              </div>

              {/* Evening */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700 block">
                  Evening (Sunset, Dinner &amp; Stay)
                </label>
                <textarea
                  rows={4}
                  value={d.evening}
                  onChange={(e) => updateDay(d.id, 'evening', e.target.value)}
                  placeholder="Evening plans & dinner..."
                  className="w-full p-3 rounded-xl border border-[#E6E2D8] bg-[#FDFBF7] text-xs text-charcoal-800 focus:outline-none focus:border-forest-600"
                />
              </div>
            </div>

            {/* Confirmation Codes & Notes */}
            <div className="pt-3 border-t border-[#E6E2D8]">
              <input
                type="text"
                value={d.confirmationCodes}
                onChange={(e) => updateDay(d.id, 'confirmationCodes', e.target.value)}
                placeholder="Confirmation codes, reservation references, hotel address..."
                className="w-full px-3 py-1.5 rounded-lg border border-[#E6E2D8] bg-[#FAF7F2] text-[11px] font-mono text-charcoal-700 focus:outline-none focus:border-forest-600"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add Day Button */}
      <div className="no-print text-center pt-2">
        <button
          onClick={addDay}
          className="px-6 py-3 rounded-full border-2 border-dashed border-[#E6E2D8] hover:border-forest-600 text-xs font-semibold text-charcoal-700 hover:text-forest-700 transition-colors inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Another Day to Itinerary</span>
        </button>
      </div>
    </div>
  );
}
