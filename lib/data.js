export const researchPapers = [
  {
    id: 1,
    title: "DeFi Liquidity Crisis: A Post-Mortem Analysis",
    author: "Research Team",
    source: "Messari",
    date: "2024-01-15",
    summary: "Comprehensive analysis of liquidity drainage across major DeFi protocols following the October crisis.",
    keyMetrics: ["TVL", "Liquidity Depth", "Slippage", "Protocol Revenue"],
    tags: ["DeFi", "Liquidity"],
    topics: ["DeFi"],
    thesis: "DeFi protocols with diversified liquidity sources showed 3x faster recovery.",
    implications: "Protocols should implement emergency liquidity reserves."
  },
  {
    id: 2,
    title: "Stablecoin Flows During Market Stress",
    author: "On-Chain Analytics Team",
    source: "Glassnode",
    date: "2024-01-12",
    summary: "Analysis of stablecoin mint/burn patterns and exchange flows during the October crisis.",
    keyMetrics: ["Exchange Inflows", "Mint/Burn Rate"],
    tags: ["Stablecoins", "Capital Flows"],
    topics: ["Stablecoins"],
    thesis: "USDT and USDC saw divergent flow patterns.",
    implications: "Stablecoin composition matters for exchange liquidity."
  },
  // Add the rest of your papers here...
  // (Truncated for brevity, copy from previous data store)
];

export const blogArticles = [
  {
    id: 1,
    title: "Capital Rotation After the October Crash",
    category: "analysis",
    date: "2024-01-14",
    readTime: "8 min",
    excerpt: "Examining how capital has rotated between sectors, protocols, and chains.",
    content: `<p>The October crisis triggered one of the most significant capital rotation events...</p>`,
    tags: ["Capital Flows", "Market Dynamics"],
    citations: [1, 3, 6]
  },
  // Add rest of articles...
];

export const trends = [
  { title: "DeFi Liquidity Concentration", description: "Liquidity is concentrating in top-tier protocols.", growth: "+23%", confidence: 92, papers: 47 },
  { title: "Cross-Chain Bridge Activity", description: "Increased bridge usage suggests capital seeking yield.", growth: "+67%", confidence: 88, papers: 23 },
  { title: "Stablecoin Diversification", description: "Growing interest in non-USD stablecoins.", growth: "+15%", confidence: 75, papers: 18 },
  { title: "Institutional Custody Solutions", description: "Migration toward regulated custodial services.", growth: "+34%", confidence: 85, papers: 31 },
  { title: "L2 Adoption Acceleration", description: "Users migrating to L2s for cost efficiency.", growth: "+89%", confidence: 91, papers: 28 },
  { title: "Liquid Staking Growth", description: "Liquid staking derivatives gaining traction.", growth: "+45%", confidence: 82, papers: 22 }
];

export const sectors = [
  { name: "DeFi", percentage: 34, color: "var(--accent-primary)" },
  { name: "Stablecoins", percentage: 22, color: "var(--accent-secondary)" },
  { name: "Institutional", percentage: 18, color: "var(--accent-warning)" },
  { name: "Exchanges", percentage: 15, color: "#a855f7" },
  { name: "Derivatives", percentage: 11, color: "var(--accent-danger)" }
];

export const topics = [
  { name: "DeFi Recovery", count: 47, tag: "tag-defi" },
  { name: "Stablecoin Flows", count: 38, tag: "tag-stablecoin" },
  { name: "Institutional Activity", count: 31, tag: "tag-institutional" },
  { name: "Exchange Reserves", count: 28, tag: "tag-exchange" },
  { name: "Volatility Analysis", count: 24, tag: "tag-volatility" }
];
