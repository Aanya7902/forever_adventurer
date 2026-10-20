'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calculator, Printer, Download, DollarSign, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BudgetCalculatorPage() {
  const [destination, setDestination] = useState('Kyoto, Japan');
  const [currency, setCurrency] = useState('$');
  const [days, setDays] = useState(7);
  const [travelers, setTravelers] = useState(2);

  // Cost inputs
  const [flightsTotal, setFlightsTotal] = useState(1200);
  const [lodgingPerNight, setLodgingPerNight] = useState(140);
  const [dailyFoodPerPerson, setDailyFoodPerPerson] = useState(55);
  const [activitiesPerPerson, setActivitiesPerPerson] = useState(35);
  const [dailyLocalTransit, setDailyLocalTransit] = useState(20);
  const [contingencyPercent, setContingencyPercent] = useState(10);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fa_budget_calc');
    if (saved) {
      try {
        const d = JSON.parse(saved);
        if (d.destination) setDestination(d.destination);
        if (d.currency) setCurrency(d.currency);
        if (d.days) setDays(d.days);
        if (d.travelers) setTravelers(d.travelers);
        if (d.flightsTotal !== undefined) setFlightsTotal(d.flightsTotal);
        if (d.lodgingPerNight !== undefined) setLodgingPerNight(d.lodgingPerNight);
        if (d.dailyFoodPerPerson !== undefined) setDailyFoodPerPerson(d.dailyFoodPerPerson);
        if (d.activitiesPerPerson !== undefined) setActivitiesPerPerson(d.activitiesPerPerson);
        if (d.dailyLocalTransit !== undefined) setDailyLocalTransit(d.dailyLocalTransit);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('fa_budget_calc', JSON.stringify({
      destination, currency, days, travelers, flightsTotal, lodgingPerNight, dailyFoodPerPerson, activitiesPerPerson, dailyLocalTransit
    }));
  }, [destination, currency, days, travelers, flightsTotal, lodgingPerNight, dailyFoodPerPerson, activitiesPerPerson, dailyLocalTransit]);

  // Calculations
  const lodgingTotal = lodgingPerNight * Math.max(days - 1, 1);
  const foodTotal = dailyFoodPerPerson * days * travelers;
  const activitiesTotal = activitiesPerPerson * days * travelers;
  const transitTotal = dailyLocalTransit * days;

  const subtotal = flightsTotal + lodgingTotal + foodTotal + activitiesTotal + transitTotal;
  const contingencyAmount = Math.round(subtotal * (contingencyPercent / 100));
  const grandTotal = subtotal + contingencyAmount;

  const costPerPerson = travelers > 0 ? Math.round(grandTotal / travelers) : 0;
  const costPerDayPerPerson = (travelers > 0 && days > 0) ? Math.round(grandTotal / (travelers * days)) : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <div className="no-print">
        <Breadcrumbs items={[{ label: 'Plan Your Trip', href: '/tools' }, { label: 'Travel Budget Calculator' }]} />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E6E2D8] pb-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta-700 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" /> Financial Planning Tool
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900">
            Travel Budget Calculator
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Estimate flight, lodging, food, and daily excursion costs with realistic contingency buffers.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="no-print px-4 py-2 rounded-full border border-[#E6E2D8] bg-white hover:bg-cream-100 text-xs font-semibold text-charcoal-800 flex items-center gap-1.5 self-start sm:self-auto shadow-sm"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print Summary</span>
        </button>
      </div>

      {/* Core Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left 7 Columns: Form Controls */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E2D8] space-y-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase text-charcoal-700 block mb-1">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E6E2D8] text-sm font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-charcoal-700 block mb-1">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E6E2D8] text-sm font-medium"
              >
                <option value="$">USD ($)</option>
                <option value="€">EUR (€)</option>
                <option value="£">GBP (£)</option>
                <option value="A$">AUD (A$)</option>
                <option value="C$">CAD (C$)</option>
                <option value="¥">JPY (¥)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase text-charcoal-700 block mb-1">Trip Duration</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="180"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-[#E6E2D8] text-sm"
                />
                <span className="text-xs text-charcoal-500">Days</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-charcoal-700 block mb-1">Travelers</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-[#E6E2D8] text-sm"
                />
                <span className="text-xs text-charcoal-500">People</span>
              </div>
            </div>
          </div>

          <hr className="border-[#E6E2D8]" />

          {/* Expense Fields */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1">
                <span>Flights &amp; Long-Distance Transit (Total for all)</span>
                <span>{currency}{flightsTotal}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                value={flightsTotal}
                onChange={(e) => setFlightsTotal(Number(e.target.value))}
                className="w-full accent-forest-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1">
                <span>Accommodation (Per Night)</span>
                <span>{currency}{lodgingPerNight} / night</span>
              </div>
              <input
                type="range"
                min="20"
                max="800"
                step="10"
                value={lodgingPerNight}
                onChange={(e) => setLodgingPerNight(Number(e.target.value))}
                className="w-full accent-forest-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1">
                <span>Food &amp; Dining (Per Person / Day)</span>
                <span>{currency}{dailyFoodPerPerson} / day</span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={dailyFoodPerPerson}
                onChange={(e) => setDailyFoodPerPerson(Number(e.target.value))}
                className="w-full accent-forest-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1">
                <span>Activities &amp; Sightseeing (Per Person / Day)</span>
                <span>{currency}{activitiesPerPerson} / day</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                value={activitiesPerPerson}
                onChange={(e) => setActivitiesPerPerson(Number(e.target.value))}
                className="w-full accent-forest-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1">
                <span>Local Transit &amp; Fuel (Daily Group Total)</span>
                <span>{currency}{dailyLocalTransit} / day</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="5"
                value={dailyLocalTransit}
                onChange={(e) => setDailyLocalTransit(Number(e.target.value))}
                className="w-full accent-forest-700"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-charcoal-800 mb-1">
                <span>Contingency / Emergency Buffer</span>
                <span>{contingencyPercent}% ({currency}{contingencyAmount})</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="5"
                value={contingencyPercent}
                onChange={(e) => setContingencyPercent(Number(e.target.value))}
                className="w-full accent-terracotta-600"
              />
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Real-Time Results Summary */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-forest-900 text-white p-6 sm:p-8 rounded-2xl space-y-6 shadow-lg">
            <div className="space-y-1 border-b border-forest-800 pb-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                Estimated Total Trip Budget
              </span>
              <p className="font-serif text-4xl sm:text-5xl font-bold text-white">
                {currency}{grandTotal.toLocaleString()}
              </p>
              <p className="text-xs text-gray-300">
                For {travelers} {travelers === 1 ? 'person' : 'people'} across {days} days in {destination}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-forest-800/80">
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Per Person</span>
                <span className="font-serif text-lg font-bold text-white">{currency}{costPerPerson.toLocaleString()}</span>
              </div>
              <div className="p-3 rounded-lg bg-forest-800/80">
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Daily / Person</span>
                <span className="font-serif text-lg font-bold text-white">{currency}{costPerDayPerPerson.toLocaleString()}</span>
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="space-y-2 text-xs">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-300">
                Cost Breakdown:
              </span>
              <div className="space-y-1.5 text-gray-200">
                <div className="flex justify-between">
                  <span>Flights / Transit:</span>
                  <span className="font-mono">{currency}{flightsTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Accommodation:</span>
                  <span className="font-mono">{currency}{lodgingTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Food &amp; Dining:</span>
                  <span className="font-mono">{currency}{foodTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities:</span>
                  <span className="font-mono">{currency}{activitiesTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Local Transit:</span>
                  <span className="font-mono">{currency}{transitTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-300 pt-1 border-t border-forest-800">
                  <span>Emergency Reserve ({contingencyPercent}%):</span>
                  <span className="font-mono">+{currency}{contingencyAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Companion PDF */}
          <div className="no-print p-6 rounded-2xl bg-white border border-[#E6E2D8] space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-700">Free Printable Companion</span>
            <p className="font-serif text-base font-bold text-charcoal-900">
              Download the Travel Budget Tracker PDF
            </p>
            <p className="text-xs text-charcoal-600">
              Take a physical expense ledger with you to track cash withdrawals, foreign card fees, and daily receipts.
            </p>
            <a
              href="/downloads/forever-adventurer-travel-budget-tracker.pdf"
              download
              className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-700 hover:text-forest-800 pt-1"
            >
              <Download className="w-3.5 h-3.5" /> Download Free Budget Sheet (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
