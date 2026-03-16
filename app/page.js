'use client';

import { useState } from 'react';
import './globals.css';

// --- DATA STORE (No external imports needed) ---
const researchPapers = [
  { id: 1, title: "DeFi Liquidity Crisis: A Post-Mortem Analysis", author: "Research Team", source: "Messari", date: "2024-01-15", summary: "Comprehensive analysis of liquidity drainage across major DeFi protocols following the October crisis.", keyMetrics: ["TVL", "Liquidity Depth"], tags: ["DeFi", "Liquidity"], thesis: "DeFi protocols with diversified liquidity sources showed 3x faster recovery." },
  { id: 2, title: "Stablecoin Flows During Market Stress", author: "On-Chain Team", source: "Glassnode", date: "2024-01-12", summary: "Analysis of stablecoin mint/burn patterns and exchange flows during the October crisis.", keyMetrics: ["Exchange Inflows"], tags: ["Stablecoins"], thesis: "USDT and USDC saw divergent flow patterns." },
  { id: 3, title: "Institutional Crypto Holdings: Q4 Rebalancing", author: "Institutional Research", source: "Chainalysis", date: "2024-01-10", summary: "Examines changes in institutional crypto allocations following October events.", keyMetrics: ["Institutional Holdings"], tags: ["Institutional"], thesis: "Institutional investors showed varied responses." },
  { id: 4, title: "Exchange Reserve Dynamics Post-Crisis", author: "Market Intel", source: "Nansen", date: "2024-01-08", summary: "Deep dive into exchange balance changes.", keyMetrics: ["Exchange Reserves"], tags: ["Exchanges"], thesis: "Exchange reserves dropped to 18-month lows." },
  { id: 5, title: "Volatility Regime Analysis", author: "Quant Research", source: "Glassnode", date: "2024-01-05", summary: "Statistical analysis of volatility patterns.", keyMetrics: ["Realized Volatility"], tags: ["Volatility"], thesis: "Volatility regime shifted from mean-reverting to trending." },
  { id: 6, title: "Cross-Chain Capital Migration", author: "DeFi Team", source: "Dune", date: "2024-01-03", summary: "Analysis of how capital moved between L1 and L2 ecosystems.", keyMetrics: ["Bridge Volume"], tags: ["DeFi"], thesis: "L2 ecosystems captured 35% of migrating capital." }
];

const blogArticles = [
  { id: 1, title: "Capital Rotation After the October Crash", category: "analysis", date: "2024-01-14", readTime: "8 min", excerpt: "Examining how capital has rotated between sectors.", content: "The October crisis triggered one of the most significant capital rotation events in crypto market history." },
  { id: 2, title: "Stablecoin Liquidity and Market Recovery", category: "analysis", date: "2024-01-10", readTime: "6 min", excerpt: "How stablecoin flows predicted the market recovery.", content: "Stablecoin metrics served as leading indicators throughout the October crisis." },
  { id: 3, title: "Research Review: DeFi Protocol Health", category: "review", date: "2024-01-08", readTime: "5 min", excerpt: "A detailed review of lending protocol health.", content: "Comprehensive assessment of lending protocol health through the crisis." }
];

const trends = [
  { title: "DeFi Liquidity Concentration", growth: "+23%", confidence: 92 },
  { title: "Cross-Chain Bridge Activity", growth: "+67%", confidence: 88 },
  { title: "Institutional Custody Solutions", growth: "+34%", confidence: 85 },
  { title: "L2 Adoption Acceleration", growth: "+89%", confidence: 91 }
];

const sectors = [
  { name: "DeFi", percentage: 34, color: "var(--accent-primary)" },
  { name: "Stablecoins", percentage: 22, color: "var(--accent-secondary)" },
  { name: "Institutional", percentage: 18, color: "var(--accent-warning)" },
  { name: "Exchanges", percentage: 15, color: "#a855f7" }
];

// --- MAIN COMPONENT ---
export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activePaper, setActivePaper] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const getTagClass = (tag) => {
    if (tag.includes('DeFi')) return 'tag-defi';
    if (tag.includes('Stable')) return 'tag-stablecoin';
    if (tag.includes('Institutional')) return 'tag-institutional';
    return 'tag-defi';
  };

  return (
    <>
      {/* Background Effects */}
      <div className="grid-bg"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-color)]" style={{ background: 'rgba(10, 14, 23, 0.9)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--bg-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">CAOC Research</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {['home', 'papers', 'blog', 'insights', 'about'].map(item => (
              <button key={item} onClick={() => navigate(item)} className={`nav-link ${currentPage === item ? 'active' : ''}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:bg-[var(--bg-elevated)] rounded-lg">
            <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div className="max-w-7xl mx-auto py-12">
            <div className="max-w-3xl mb-16">
              <h1 className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-6">
                Crypto After<br/><span className="text-[var(--accent-primary)]">October Crisis</span>
              </h1>
              <p className="text-[var(--text-secondary)] text-lg mb-8">
                Independent research analyzing structural changes in cryptocurrency markets.
              </p>
              <div className="flex gap-4">
                <button onClick={() => navigate('papers')} className="btn-primary">Explore Research</button>
                <button onClick={() => navigate('insights')} className="btn-secondary">View Insights</button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { label: 'Indexed Papers', value: '247' },
                { label: 'Sources', value: '18' },
                { label: 'Topics', value: '34' },
                { label: 'Summaries', value: '189' }
              ].map((m, i) => (
                <div key={i} className="card p-6">
                  <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider mb-2">{m.label}</div>
                  <div className="metric-value">{m.value}</div>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold mb-6">Featured Research</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchPapers.slice(0, 6).map(paper => (
                <div key={paper.id} className="card p-6 cursor-pointer" onClick={() => setActivePaper(paper)}>
                  <div className="text-xs text-[var(--accent-primary)] mb-2">{paper.source}</div>
                  <h3 className="font-display font-bold mb-2">{paper.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm line-clamp-2">{paper.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAPERS PAGE */}
        {currentPage === 'papers' && (
          <div className="max-w-7xl mx-auto py-12">
            <h1 className="font-display text-3xl font-bold mb-8">Research Papers</h1>
            <input 
              type="text" 
              placeholder="Search papers..." 
              className="input-field mb-8 w-full max-w-md"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="space-y-4">
              {researchPapers.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map(paper => (
                <div key={paper.id} className="card p-6 cursor-pointer" onClick={() => setActivePaper(paper)}>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-display font-bold">{paper.title}</h3>
                    <span className="text-xs text-[var(--text-muted)]">{paper.date}</span>
                  </div>
                  <div className="text-sm text-[var(--accent-primary)] mb-2">{paper.source}</div>
                  <p className="text-[var(--text-secondary)] text-sm">{paper.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BLOG PAGE */}
        {currentPage === 'blog' && (
          <div className="max-w-7xl mx-auto py-12">
            <h1 className="font-display text-3xl font-bold mb-8">Analysis & Insights</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogArticles.map(article => (
                <div key={article.id} className="card p-6 cursor-pointer" onClick={() => setActiveArticle(article)}>
                  <div className={`tag ${article.category === 'analysis' ? 'tag-defi' : 'tag-institutional'} mb-3`}>{article.category}</div>
                  <h3 className="font-display font-bold mb-2">{article.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INSIGHTS PAGE */}
        {currentPage === 'insights' && (
          <div className="max-w-7xl mx-auto py-12">
            <h1 className="font-display text-3xl font-bold mb-8">Market Insights</h1>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="font-bold mb-4">AI-Detected Trends</h3>
                <div className="space-y-3">
                  {trends.map((t, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-[var(--bg-secondary)] rounded-lg">
                      <span>{t.title}</span>
                      <span className="text-[var(--accent-primary)] font-bold">{t.growth}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <h3 className="font-bold mb-4">Research by Sector</h3>
                <div className="space-y-4">
                  {sectors.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{s.name}</span>
                        <span>{s.percentage}%</span>
                      </div>
                      <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.percentage}%`, background: s.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="max-w-3xl mx-auto py-12">
            <h1 className="font-display text-3xl font-bold mb-8">About</h1>
            <div className="card p-8">
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Independent research analyzing structural changes in cryptocurrency markets following the October crisis. 
                Data sources include Messari, Glassnode, Chainalysis, Dune Analytics, and Nansen.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* MODALS */}
      {activePaper && (
        <div className="modal-overlay active" onClick={() => setActivePaper(null)}>
          <div className="modal-content active" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[var(--accent-primary)] text-sm font-medium">{activePaper.source}</span>
                <button onClick={() => setActivePaper(null)} className="text-[var(--text-muted)] hover:text-white">✕</button>
              </div>
              <h2 className="font-display text-xl font-bold mb-4">{activePaper.title}</h2>
              <p className="text-[var(--text-secondary)] mb-4">{activePaper.summary}</p>
              <div className="bg-[var(--bg-secondary)] rounded-lg p-4 mb-4">
                <h4 className="text-xs uppercase text-[var(--text-muted)] mb-2">Key Thesis</h4>
                <p className="text-sm">{activePaper.thesis}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {activePaper.tags.map(tag => <span key={tag} className={`tag ${getTagClass(tag)}`}>{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeArticle && (
        <div className="modal-overlay active" onClick={() => setActiveArticle(null)}>
          <div className="modal-content active" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className={`tag ${activeArticle.category === 'analysis' ? 'tag-defi' : 'tag-institutional'}`}>{activeArticle.category}</span>
                <button onClick={() => setActiveArticle(null)} className="text-[var(--text-muted)] hover:text-white">✕</button>
              </div>
              <h2 className="font-display text-xl font-bold mb-4">{activeArticle.title}</h2>
              <p className="text-[var(--text-secondary)]">{activeArticle.content}</p>
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="modal-overlay active" onClick={() => setIsSearchOpen(false)}>
          <div className="modal-content active" onClick={e => e.stopPropagation()}>
            <div className="p-6">
              <input type="text" placeholder="Search..." className="input-field mb-4" autoFocus onChange={(e) => setSearchQuery(e.target.value)} />
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {researchPapers.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map(p => (
                  <div key={p.id} className="p-3 hover:bg-[var(--bg-elevated)] rounded-lg cursor-pointer" onClick={() => { setActivePaper(p); setIsSearchOpen(false); }}>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-xs text-[var(--text-muted)]">{p.source}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
