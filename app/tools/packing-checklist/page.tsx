'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckSquare, 
  Printer, 
  RotateCcw, 
  Plus, 
  Trash2, 
  ShieldCheck, 
  Download, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PackingCategory {
  id: string;
  name: string;
  items: { id: string; name: string; checked: boolean; isCustom?: boolean }[];
}

const defaultCategories: PackingCategory[] = [
  {
    id: 'clothing',
    name: 'Clothing & Footwear',
    items: [
      { id: 'c1', name: 'Breathable linen / cotton shirts (x4)', checked: false },
      { id: 'c2', name: 'Lightweight trousers / chinos (x2)', checked: false },
      { id: 'c3', name: 'Packable windbreaker / waterproof shell', checked: false },
      { id: 'c4', name: 'Comfortable broken-in walking shoes', checked: false },
      { id: 'c5', name: 'Evening dress shoes or clean sandals', checked: false },
      { id: 'c6', name: 'Underwear & merino socks (x7 pairs)', checked: false },
      { id: 'c7', name: 'UV-blocking sun hat & polarized sunglasses', checked: false },
    ],
  },
  {
    id: 'toiletries',
    name: 'Toiletries & Wellness',
    items: [
      { id: 't1', name: 'TSA 3-1-1 clear quart bag', checked: false },
      { id: 't2', name: 'Solid shampoo bar & organic soap', checked: false },
      { id: 't3', name: 'Toothbrush & biodegradable paste', checked: false },
      { id: 't4', name: 'Reef-safe SPF 50 sunscreen', checked: false },
      { id: 't5', name: 'Compact travel medical kit & blister plasters', checked: false },
      { id: 't6', name: 'Personal prescriptions in original pharmacy bottles', checked: false },
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics & Charging',
    items: [
      { id: 'e1', name: 'Universal worldwide travel plug adapter', checked: false },
      { id: 'e2', name: '10,000mAh external power bank', checked: false },
      { id: 'e3', name: 'Braided USB-C charging cables', checked: false },
      { id: 'e4', name: 'Noise-canceling earphones & 3.5mm flight adapter', checked: false },
      { id: 'e5', name: 'eSIM configuration QR code saved offline', checked: false },
    ],
  },
  {
    id: 'documents',
    name: 'Documents & Valuables',
    items: [
      { id: 'd1', name: 'Physical passport (valid for 6+ months)', checked: false },
      { id: 'd2', name: 'Physical paper copies of passport & travel insurance', checked: false },
      { id: 'd3', name: 'Travel debit/credit cards (foreign fee free)', checked: false },
      { id: 'd4', name: 'Modest local currency cash backup', checked: false },
      { id: 'd5', name: 'Offline digital copies stored in secure cloud', checked: false },
    ],
  },
];

export default function PackingChecklistPage() {
  const [categories, setCategories] = useState<PackingCategory[]>(defaultCategories);
  const [newItemName, setNewItemName] = useState<{ [catId: string]: string }>({});

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('fa_packing_list');
    if (saved) {
      try {
        setCategories(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save to localStorage on change
  const saveCategories = (newCats: PackingCategory[]) => {
    setCategories(newCats);
    localStorage.setItem('fa_packing_list', JSON.stringify(newCats));
  };

  const toggleItem = (catId: string, itemId: string) => {
    const updated = categories.map((cat) => {
      if (cat.id !== catId) return cat;
      return {
        ...cat,
        items: cat.items.map((item) => {
          if (item.id !== itemId) return item;
          return { ...item, checked: !item.checked };
        }),
      };
    });
    saveCategories(updated);
  };

  const handleAddItem = (catId: string, e: React.FormEvent) => {
    e.preventDefault();
    const name = (newItemName[catId] || '').trim();
    if (!name) return;

    const updated = categories.map((cat) => {
      if (cat.id !== catId) return cat;
      return {
        ...cat,
        items: [...cat.items, { id: 'cust_' + Date.now(), name, checked: false, isCustom: true }],
      };
    });

    saveCategories(updated);
    setNewItemName({ ...newItemName, [catId]: '' });
  };

  const handleDeleteItem = (catId: string, itemId: string) => {
    const updated = categories.map((cat) => {
      if (cat.id !== catId) return cat;
      return {
        ...cat,
        items: cat.items.filter((item) => item.id !== itemId),
      };
    });
    saveCategories(updated);
  };

  const resetAll = () => {
    if (confirm('Are you sure you want to uncheck all items and reset to default?')) {
      saveCategories(defaultCategories);
    }
  };

  // Calculate totals
  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedItems = categories.reduce((acc, cat) => acc + cat.items.filter((i) => i.checked).length, 0);
  const percent = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <div className="no-print">
        <Breadcrumbs items={[{ label: 'Plan Your Trip', href: '/tools' }, { label: 'Interactive Packing Checklist' }]} />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E6E2D8] pb-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-700 flex items-center gap-1.5">
            <CheckSquare className="w-3.5 h-3.5" /> Interactive Packing Tool
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900">
            Interactive Packing Checklist
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Check off items as you pack, add your custom gear, and print before departure. Automatically persists in your browser.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="no-print flex items-center gap-2 shrink-0">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-full border border-[#E6E2D8] bg-white hover:bg-cream-100 text-xs font-semibold text-charcoal-800 flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print List</span>
          </button>
          <button
            onClick={resetAll}
            className="px-4 py-2 rounded-full border border-[#E6E2D8] bg-white hover:bg-cream-100 text-xs font-semibold text-charcoal-500 hover:text-red-700 flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Real-time Progress Bar */}
      <div className="p-6 rounded-2xl bg-white border border-[#E6E2D8] shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-charcoal-700">Packing Progress</span>
          <span className="text-forest-700 font-mono text-sm">
            {checkedItems} of {totalItems} items packed ({percent}%)
          </span>
        </div>
        <div className="w-full h-3 rounded-full bg-cream-200 overflow-hidden">
          <div
            className="h-full bg-forest-700 rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
        {percent === 100 && (
          <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1 pt-1">
            <CheckCircle2 className="w-4 h-4" /> All packed! You are ready for departure.
          </p>
        )}
      </div>

      {/* Category Checklists */}
      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-3">
              <h2 className="font-serif text-xl font-bold text-charcoal-900">
                {cat.name}
              </h2>
              <span className="text-xs text-charcoal-500 font-mono">
                {cat.items.filter((i) => i.checked).length} / {cat.items.length}
              </span>
            </div>

            <ul className="space-y-2.5">
              {cat.items.map((item) => (
                <li
                  key={item.id}
                  onClick={() => toggleItem(cat.id, item.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                    item.checked
                      ? 'bg-cream-100 border-[#E6E2D8] text-charcoal-400 line-through'
                      : 'bg-white border-[#E6E2D8] hover:border-forest-600 text-charcoal-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {}} // handled by li onClick
                      className="w-4 h-4 rounded text-forest-700 accent-forest-700 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm font-medium">{item.name}</span>
                  </div>

                  {item.isCustom && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(cat.id, item.id);
                      }}
                      className="text-charcoal-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {/* Add Custom Item */}
            <form
              onSubmit={(e) => handleAddItem(cat.id, e)}
              className="no-print pt-2 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder={`+ Add custom item to ${cat.name}...`}
                value={newItemName[cat.id] || ''}
                onChange={(e) => setNewItemName({ ...newItemName, [cat.id]: e.target.value })}
                className="flex-1 px-4 py-2 rounded-lg border border-[#E6E2D8] bg-[#FDFBF7] text-xs text-charcoal-900 focus:outline-none focus:border-forest-600"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-cream-200 hover:bg-forest-50 hover:text-forest-700 text-xs font-semibold text-charcoal-700 transition-colors"
              >
                Add
              </button>
            </form>
          </div>
        ))}
      </div>

      {/* Companion PDF Callout */}
      <div className="no-print p-6 rounded-2xl bg-forest-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <p className="font-serif text-lg font-bold">Want the pre-printed PDF checklist?</p>
          <p className="text-xs text-gray-300">Download the clean A4 / US Letter checklist directly.</p>
        </div>
        <a
          href="/downloads/forever-adventurer-general-holiday-packing-list.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-charcoal-900 text-xs font-semibold transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Checklist</span>
        </a>
      </div>
    </div>
  );
}
