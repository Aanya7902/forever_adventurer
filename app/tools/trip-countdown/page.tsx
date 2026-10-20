'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Calendar, CheckCircle2, MapPin, Sparkles, Download, Bell } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function TripCountdownPage() {
  const [destination, setDestination] = useState('Dubrovnik, Croatia');
  const [targetDate, setTargetDate] = useState('2025-05-15T09:00');
  
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fa_countdown');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.destination) setDestination(parsed.destination);
        if (parsed.targetDate) setTargetDate(parsed.targetDate);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Update timer every second
  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isPast: false,
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSave = (newDest: string, newDate: string) => {
    setDestination(newDest);
    setTargetDate(newDate);
    localStorage.setItem('fa_countdown', JSON.stringify({ destination: newDest, targetDate: newDate }));
  };

  const milestones = [
    { label: 'T-30 Days', task: 'Check passport has at least 6 months validity & verify visa rules.' },
    { label: 'T-21 Days', task: 'Book key museum time-slots, catamarans, and popular train segments.' },
    { label: 'T-14 Days', task: 'Order modest cash foreign currency & install eSIM on mobile.' },
    { label: 'T-7 Days', task: 'Review our Carry-On Packing Checklist & purchase travel toiletry minis.' },
    { label: 'T-2 Days', task: 'Charge all power banks, download offline Google Maps, and print vouchers.' },
    { label: 'Day of Travel', task: 'Check flight status, set household thermostat, and lock home doors.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <Breadcrumbs items={[{ label: 'Plan Your Trip', href: '/tools' }, { label: 'Trip Countdown' }]} />

      {/* Header */}
      <div className="space-y-2 border-b border-[#E6E2D8] pb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" /> Departure Countdown
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900">
          Trip Countdown &amp; Milestones
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600">
          Set your departure date to watch the countdown and stay on track with pre-departure milestones.
        </p>
      </div>

      {/* Trip Configuration */}
      <div className="bg-white p-6 rounded-2xl border border-[#E6E2D8] shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold uppercase text-charcoal-700 block mb-1">
            Destination Name
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => handleSave(e.target.value, targetDate)}
            placeholder="e.g. Kyoto, Japan"
            className="w-full px-4 py-2 rounded-lg border border-[#E6E2D8] text-sm"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase text-charcoal-700 block mb-1">
            Departure Date &amp; Time
          </label>
          <input
            type="datetime-local"
            value={targetDate}
            onChange={(e) => handleSave(destination, e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-[#E6E2D8] text-sm font-mono"
          />
        </div>
      </div>

      {/* Ticking Countdown Boxes */}
      <div className="bg-forest-900 text-white p-8 sm:p-12 rounded-3xl text-center space-y-8 shadow-xl">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-300">Counting down to</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">{destination}</h2>
        </div>

        {timeLeft.isPast ? (
          <div className="py-8 space-y-2">
            <p className="font-serif text-3xl text-emerald-300">Safe Travels!</p>
            <p className="text-xs text-gray-300">Your departure date has arrived. Enjoy every mindful moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="p-4 sm:p-6 rounded-2xl bg-forest-800/80 border border-forest-700">
              <span className="font-serif text-4xl sm:text-6xl font-bold block">{timeLeft.days}</span>
              <span className="text-[10px] sm:text-xs uppercase font-semibold text-gray-300 tracking-wider">Days</span>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-forest-800/80 border border-forest-700">
              <span className="font-serif text-4xl sm:text-6xl font-bold block">{timeLeft.hours}</span>
              <span className="text-[10px] sm:text-xs uppercase font-semibold text-gray-300 tracking-wider">Hours</span>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-forest-800/80 border border-forest-700">
              <span className="font-serif text-4xl sm:text-6xl font-bold block">{timeLeft.minutes}</span>
              <span className="text-[10px] sm:text-xs uppercase font-semibold text-gray-300 tracking-wider">Minutes</span>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-forest-800/80 border border-forest-700">
              <span className="font-serif text-4xl sm:text-6xl font-bold block text-emerald-400 font-mono">{timeLeft.seconds}</span>
              <span className="text-[10px] sm:text-xs uppercase font-semibold text-gray-300 tracking-wider">Seconds</span>
            </div>
          </div>
        )}
      </div>

      {/* Pre-Departure Milestones Checklist */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E2D8] space-y-6 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-charcoal-900 border-b border-[#E6E2D8] pb-3">
          Pre-Departure Timeline Milestones
        </h3>

        <div className="space-y-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-cream-50 border border-[#E6E2D8]">
              <span className="px-2.5 py-1 rounded bg-forest-700 text-white text-[10px] font-bold shrink-0">
                {m.label}
              </span>
              <p className="text-xs text-charcoal-800 leading-snug">
                {m.task}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
