'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Trash2, 
  Eye, 
  RefreshCw, 
  PenTool, 
  CheckCircle, 
  AlertCircle, 
  Lock, 
  Globe2, 
  FileText, 
  Sparkles,
  ArrowRight,
  Database
} from 'lucide-react';

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'moderation' | 'writer' | 'sync'>('moderation');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Overview data
  const [overview, setOverview] = useState<{
    isConfigured: boolean;
    stats: { totalDiaries: number; communityPosts: number; newsItems: number; advisories: number };
    posts: any[];
  } | null>(null);

  // Writer form state
  const [newTitle, setNewTitle] = useState('');
  const [newDestination, setNewDestination] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newCategory, setNewCategory] = useState('Slow Journeys');
  const [newHeroImage, setNewHeroImage] = useState('https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop');
  const [newContent, setNewContent] = useState('');
  const [newReflections, setNewReflections] = useState('');
  const [newTags, setNewTags] = useState('');

  // Sync state
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<any>(null);

  // Check saved session
  useEffect(() => {
    const saved = sessionStorage.getItem('fa_admin_key');
    if (saved) {
      setAdminKey(saved);
      authenticate(saved);
    }
  }, []);

  const authenticate = async (keyToUse: string) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey: keyToUse, action: 'get_overview' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');

      setIsAuthenticated(true);
      sessionStorage.setItem('fa_admin_key', keyToUse);
      setOverview(data);
    } catch (err: any) {
      setErrorMsg(err.message || 'Incorrect admin secret key.');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authenticate(adminKey);
  };

  const handleDeletePost = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey, action: 'delete_post', payload: { id } }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccessMsg(data.message || 'Post deleted');
      // Refresh list
      authenticate(adminKey);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'published' ? 'pending' : 'published';
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey, action: 'toggle_status', payload: { id, status: newStatus } }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccessMsg(data.message);
      authenticate(adminKey);
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminKey,
          action: 'create_article',
          payload: {
            title: newTitle,
            destination: newDestination,
            country: newCountry,
            category: newCategory,
            hero_image: newHeroImage,
            content: newContent,
            reflections: newReflections,
            tags: newTags,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccessMsg('Article published successfully!');
      setNewTitle('');
      setNewContent('');
      setNewReflections('');
      authenticate(adminKey);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTriggerSync = async () => {
    setSyncing(true);
    setSyncResult(null);
    try {
      const res = await fetch('/api/sync?admin_bypass=true', { method: 'POST' });
      const data = await res.json();
      setSyncResult(data);
      authenticate(adminKey);
    } catch (err: any) {
      setErrorMsg('Sync failed: ' + err.message);
    } finally {
      setSyncing(false);
    }
  };

  // 1. Password Lock Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-[#E6E2D8] shadow-lg space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-charcoal-900 text-white rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-charcoal-900">
              Admin Console
            </h1>
            <p className="text-xs text-charcoal-500">
              Enter your private admin password to access the ForeverAdventurer management portal.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-600 block mb-1">
                Admin Secret Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E6E2D8] text-sm focus:outline-none focus:border-forest-600"
              />
              <p className="text-[11px] text-charcoal-400 mt-1">
                Default local pass: <code className="bg-cream-200 px-1 rounded">foreveradventurer2024!</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-charcoal-900 hover:bg-forest-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Unlock Dashboard'}
            </button>
          </form>

          <div className="pt-4 border-t border-[#E6E2D8] text-center">
            <Link href="/" className="text-xs text-charcoal-500 hover:text-charcoal-900">
              ← Return to website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. Unlocked Admin Dashboard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E2D8] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-700">Editorial Headquarters</span>
            {overview?.isConfigured ? (
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                <Database className="w-3 h-3" /> Supabase Live
              </span>
            ) : (
              <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">
                Local Preview Mode (Add keys to .env.local to link Supabase)
              </span>
            )}
          </div>
          <h1 className="font-serif text-3xl font-bold text-charcoal-900 mt-1">
            ForeverAdventurer Control Centre
          </h1>
        </div>

        <button
          onClick={() => { sessionStorage.removeItem('fa_admin_key'); setIsAuthenticated(false); }}
          className="text-xs px-4 py-2 rounded-lg border border-[#E6E2D8] hover:bg-cream-200 text-charcoal-600 self-start sm:self-auto"
        >
          Lock &amp; Sign Out
        </button>
      </div>

      {/* Messages */}
      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center justify-between">
          <span>{successMsg}</span>
          <button onClick={() => setSuccessMsg('')} className="font-bold">✕</button>
        </div>
      )}

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-[#E6E2D8]">
          <p className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold">Total Articles</p>
          <p className="font-serif text-3xl font-bold text-charcoal-900 mt-1">{overview?.stats.totalDiaries || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[#E6E2D8]">
          <p className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold">Community Posts</p>
          <p className="font-serif text-3xl font-bold text-forest-700 mt-1">{overview?.stats.communityPosts || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[#E6E2D8]">
          <p className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold">Curated News</p>
          <p className="font-serif text-3xl font-bold text-charcoal-900 mt-1">{overview?.stats.newsItems || 0}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[#E6E2D8]">
          <p className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold">Active Advisories</p>
          <p className="font-serif text-3xl font-bold text-terracotta-700 mt-1">{overview?.stats.advisories || 0}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-[#E6E2D8] gap-4">
        <button
          onClick={() => setActiveTab('moderation')}
          className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
            activeTab === 'moderation'
              ? 'border-forest-700 text-forest-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          Moderate Community Stories ({overview?.posts.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('writer')}
          className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
            activeTab === 'writer'
              ? 'border-forest-700 text-forest-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          Write Official Article (No-Code)
        </button>
        <button
          onClick={() => setActiveTab('sync')}
          className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
            activeTab === 'sync'
              ? 'border-forest-700 text-forest-700'
              : 'border-transparent text-charcoal-500 hover:text-charcoal-900'
          }`}
        >
          Automated Content &amp; RSS Sync
        </button>
      </div>

      {/* TAB 1: MODERATE COMMUNITY POSTS */}
      {activeTab === 'moderation' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-charcoal-600">
              Review and moderate community submissions and editorial posts. Click Delete to instantly remove spam or unwanted posts.
            </p>
            <button
              onClick={() => authenticate(adminKey)}
              className="text-xs flex items-center gap-1 text-forest-700 hover:underline"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Refresh List
            </button>
          </div>

          <div className="bg-white rounded-xl border border-[#E6E2D8] divide-y divide-[#E6E2D8] overflow-hidden">
            {overview?.posts.length === 0 ? (
              <div className="p-8 text-center text-xs text-charcoal-500">
                No user posts submitted yet.
              </div>
            ) : (
              overview?.posts.map((post) => (
                <div key={post.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-cream-50/50 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        post.is_community ? 'bg-amber-100 text-amber-800' : 'bg-forest-100 text-forest-800'
                      }`}>
                        {post.is_community ? 'Community Post' : 'Editorial'}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        post.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {post.status}
                      </span>
                      <span className="text-xs text-charcoal-400">· {post.destination}, {post.country}</span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-charcoal-900">
                      {post.title}
                    </h3>
                    <p className="text-xs text-charcoal-500">
                      By <strong className="text-charcoal-700">{post.author_name}</strong> {post.author_email && `(${post.author_email})`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleToggleStatus(post.id, post.status)}
                      className="px-3 py-1.5 rounded-lg border border-[#E6E2D8] text-xs hover:bg-cream-200 text-charcoal-700"
                    >
                      {post.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <Link
                      href={`/diaries/${post.slug}`}
                      target="_blank"
                      className="px-3 py-1.5 rounded-lg border border-[#E6E2D8] text-xs hover:bg-cream-200 text-charcoal-700 flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </Link>
                    <button
                      onClick={() => handleDeletePost(post.id, post.title)}
                      className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 2: WRITE OFFICIAL ARTICLE (NO-CODE EDITOR) */}
      {activeTab === 'writer' && (
        <form onSubmit={handleCreateArticle} className="bg-white p-6 sm:p-8 rounded-xl border border-[#E6E2D8] space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-charcoal-900">Publish a New Official Travel Story</h3>
            <p className="text-xs text-charcoal-500">Write directly to the website without writing code or committing to GitHub.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-charcoal-700 uppercase block mb-1">Headline *</label>
              <input
                type="text"
                required
                placeholder="e.g. Wandering the Ancient Vineyards of Georgia"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E6E2D8] text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-charcoal-700 uppercase block mb-1">Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E6E2D8] text-sm"
              >
                <option value="Slow Journeys">Slow Journeys</option>
                <option value="Solo Travel">Solo Travel</option>
                <option value="Cultural Immersion">Cultural Immersion</option>
                <option value="Wilderness">Wilderness</option>
                <option value="Culinary Trails">Culinary Trails</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-charcoal-700 uppercase block mb-1">Destination *</label>
              <input
                type="text"
                required
                placeholder="e.g. Kakheti"
                value={newDestination}
                onChange={(e) => setNewDestination(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E6E2D8] text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-charcoal-700 uppercase block mb-1">Country *</label>
              <input
                type="text"
                required
                placeholder="e.g. Georgia"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-[#E6E2D8] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-charcoal-700 uppercase block mb-1">Hero Image URL</label>
            <input
              type="url"
              value={newHeroImage}
              onChange={(e) => setNewHeroImage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#E6E2D8] text-xs font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-charcoal-700 uppercase block mb-1">Article Story (Double Enter for paragraphs) *</label>
            <textarea
              required
              rows={8}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Write the full travel story here..."
              className="w-full p-4 rounded-lg border border-[#E6E2D8] text-sm leading-relaxed"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-charcoal-700 uppercase block mb-1">Reflection Takeaways (One per line)</label>
            <textarea
              rows={3}
              value={newReflections}
              onChange={(e) => setNewReflections(e.target.value)}
              placeholder="Travel wisdom takeaway 1&#10;Travel wisdom takeaway 2"
              className="w-full p-3 rounded-lg border border-[#E6E2D8] text-xs"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-full bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            {loading ? 'Publishing...' : 'Publish Official Article'}
          </button>
        </form>
      )}

      {/* TAB 3: AUTOMATED CONTENT & RSS SYNC */}
      {activeTab === 'sync' && (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E6E2D8] space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-charcoal-900">Automated Content Scraper &amp; Advisory Sync</h3>
            <p className="text-xs text-charcoal-500">
              When deployed to Vercel, this runs automatically every Monday via Vercel Cron. You can also trigger an instant sync right now with this button:
            </p>
          </div>

          <div className="p-6 rounded-xl bg-forest-50 border border-forest-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-lg font-bold text-forest-900">Instant Content Ingestion</p>
              <p className="text-xs text-forest-800 mt-1">
                Pulls fresh articles from verified travel RSS sources and updates worldwide country safety indices.
              </p>
            </div>
            <button
              onClick={handleTriggerSync}
              disabled={syncing}
              className="px-6 py-3 rounded-full bg-forest-700 hover:bg-forest-800 disabled:opacity-50 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md"
            >
              <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
              <span>{syncing ? 'Running Sync...' : 'Run Content Sync Now'}</span>
            </button>
          </div>

          {syncResult && (
            <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#E6E2D8] space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Sync Finished: Processed {syncResult.articlesProcessed} articles across open feeds!</span>
              </div>

              {syncResult.latestArticles && syncResult.latestArticles.length > 0 && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-600">Sample Articles Scraped:</p>
                  <ul className="space-y-1.5 text-xs text-charcoal-700">
                    {syncResult.latestArticles.map((art: any, idx: number) => (
                      <li key={idx} className="p-2.5 rounded bg-white border border-[#E6E2D8] flex items-center justify-between">
                        <div>
                          <p className="font-medium text-charcoal-900">{art.title}</p>
                          <p className="text-[11px] text-charcoal-500">{art.source_name} · {art.category}</p>
                        </div>
                        <a href={art.source_url} target="_blank" rel="noopener noreferrer" className="text-xs text-forest-700 hover:underline">
                          Source ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
