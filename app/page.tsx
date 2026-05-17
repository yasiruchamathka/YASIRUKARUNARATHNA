"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ipp");
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const WHATSAPP_NUMBER = "94706548484";

  const generalQuickMessage = encodeURIComponent(
    "Hello Yasiru, I would like to get more information about Softlogic Life insurance plans."
  );

  const formSubmissionMessage = encodeURIComponent(
    `Hello Yasiru, I would like to get a personalized insurance plan.\n\n` +
      `*Name:* ${name || "Not provided"}\n` +
      `*Contact:* ${contactInfo || "Not provided"}\n\n` +
      `Please contact me with more details.`
  );

  const metrics = [
    { value: "Rs. 40 Bn+", label: "Total Premium Collected", detail: "Total Revenue Generated", marker: "収益" },
    { value: "245%", label: "Capital Adequacy Ratio", detail: "Double the Required Level", marker: "資本" },
    { value: "Rs. 19.4 Bn", label: "Claims Paid Out", detail: "Money Paid to Customers", marker: "給付" },
    { value: "1 Day", label: "Claim Settlement", detail: "90% Paid in 24 Hours", marker: "迅速" },
    { value: "18.4%", label: "Market Share", detail: "Strong National Presence", marker: "市場" },
    { value: "Rs. 68.6 Bn", label: "Total Assets Managed", detail: "Our Financial Strength", marker: "資産" },
    { value: "27%", label: "Year-on-Year Growth", detail: "Fastest Growing Insurer", marker: "成長" },
    { value: "#1", label: "Health Insurance Innovator", detail: "Best in the Industry", marker: "革新" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1C1C1E] font-sans antialiased selection:bg-emerald-100 relative overflow-x-hidden">
      
      {/* Large Structural Background Watermark - Trust (信頼) */}
      <div className="absolute top-48 right-4 text-[14rem] font-black text-slate-900/[0.04] select-none pointer-events-none hidden xl:block font-serif tracking-widest writing-mode-vertical">
        信頼
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-sm font-black tracking-widest text-slate-950 group-hover:text-emerald-600 transition-colors duration-300">
              YASIRU <span className="font-light text-slate-500">KARUNARATHNE</span>
            </span>
            <span className="hidden md:inline-block text-[10px] uppercase tracking-widest font-bold text-slate-400 border-l border-slate-200 pl-4">
              Insurance Advisor · Softlogic Life · 安心 (Peace of Mind)
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-wider font-bold text-slate-500">
            <a href="#claims" className="hover:text-slate-950 transition-colors duration-300">Fast Payouts</a>
            <a href="#metrics" className="hover:text-slate-950 transition-colors duration-300">Our Numbers</a>
            <a href="#solutions" className="hover:text-slate-950 transition-colors duration-300">Our Plans</a>
            <a href="#contact" className="hover:text-slate-950 transition-colors duration-300">Contact</a>
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generalQuickMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition-all duration-300 shadow-xs gap-2"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.405.003 12.022.003c3.201.001 6.212 1.248 8.477 3.517 2.266 2.268 3.51 5.28 3.501 8.484-.017 6.674-5.361 12.018-11.977 12.018-2.007-.002-3.98-.502-5.735-1.45l-6.231 1.633zm6.104-3.411l.363.215c1.592.946 3.427 1.446 5.3 1.448 5.64.001 10.236-4.594 10.248-10.234.006-2.732-1.054-5.3-2.986-7.235C17.152 3.082 14.585 2.022 11.85 2.022 6.211 2.022 1.615 6.618 1.603 12.26c-.004 1.92.502 3.796 1.465 5.4l.236.395-.98 3.579 3.664-.961z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-16 relative">
          
          {/* Left Background Watermark - Protection (保護) */}
          <div className="absolute left-[-2rem] top-12 text-[10rem] font-bold text-slate-900/[0.04] select-none pointer-events-none hidden lg:block font-serif">
            保護
          </div>

          <div className="flex-1 space-y-6 text-left z-10">
            <div className="inline-flex items-center gap-2 rounded-sm bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200/50">
              <span className="font-bold text-emerald-600">安全</span>
              Income & Wealth Protection
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Protecting your income. <br />
              <span className="font-serif italic font-normal text-emerald-700">Securing your family legacy.</span>
            </h1>
            <p className="text-sm text-slate-500 max-w-lg leading-relaxed font-normal">
              Reliable financial planning to protect your hard-earned money. Offered by <strong className="text-slate-950 font-semibold">Yasiru Karunarathne</strong> in partnership with <strong className="text-slate-950 font-semibold">Softlogic Life PLC</strong>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="rounded-sm bg-slate-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-600 transition-all duration-300">
                Get a Free Plan
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generalQuickMessage}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-sm border border-slate-200 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-slate-50 transition-all duration-300 flex items-center gap-2"
              >
                Message Yasiru
              </a>
            </div>
          </div>
          
          {/* Executive Portfolio Card */}
          <div className="flex-1 max-w-sm w-full relative group">
            {/* Background Character - Peace of Mind (安心) */}
            <div className="absolute top-[-3.5rem] left-[-2.5rem] text-8xl font-black text-slate-900/[0.08] select-none pointer-events-none font-serif group-hover:scale-105 transition-transform duration-500">
              安心
            </div>
            <div className="relative bg-white border border-slate-200 rounded-lg p-8 shadow-xs hover:border-slate-400 transition-all duration-500 z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-600 font-bold block">Your Trusted Advisor</span>
                  <span className="text-xs font-serif font-bold text-slate-400">顧問</span>
                </div>
                <h3 className="text-xl font-black tracking-tight text-slate-950">Yasiru Karunarathne</h3>
                <div className="w-8 h-[2px] bg-slate-950 group-hover:w-20 transition-all duration-500"></div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Specialized Insurance Consultant helping you secure your business stability, family income, and long-term investment models. Based in Colombo.
                </p>
                <div className="flex items-center gap-1.5 pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-50">
                  <span>誠実</span>
                  <span>· Integrity & Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Claim Settlement Speed Section */}
        <section id="claims" className="max-w-7xl mx-auto px-6 py-8">
          <div className="rounded-lg bg-slate-950 text-white overflow-hidden border border-slate-900 relative group">
            {/* Background Character - Speed/Instant (迅速) */}
            <div className="absolute bottom-4 right-6 text-7xl font-black text-white/[0.04] select-none pointer-events-none font-serif tracking-widest group-hover:translate-x-1 transition-transform duration-700">
              迅速
            </div>
            <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300 border border-white/10">
                  Super-Fast Payouts · 即時
                </div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">Claims Settled in <span className="font-serif font-normal italic text-emerald-400">24 Hours</span></h2>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  No structural red tape. Softlogic Life processes and pays out the vast majority of standard medical and life critical claims within a single business day.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-light text-white">1 Day</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-1">Maximum Wait Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-emerald-400">100%</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-1">Digital Core Pipeline</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-lg p-8 text-center space-y-4 backdrop-blur-md">
                <div>
                  <div className="text-4xl font-light tracking-tight text-white">Minutes</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-bold">Average Approval Time</div>
                </div>
                <div className="w-8 h-[1px] bg-white/10 mx-auto"></div>
                <div>
                  <div className="text-4xl font-light tracking-tight text-emerald-400">0%</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-bold">Manual Overheads</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Metrics Grid Section */}
        <section id="metrics" className="bg-white border-y border-slate-100 py-28 relative overflow-hidden">
          {/* Subtle geometric lines and vertical text background to cut layout flatness */}
          <div className="absolute right-12 top-1/3 text-[8rem] font-black text-slate-900/[0.02] font-serif select-none pointer-events-none tracking-widest hidden lg:block writing-mode-vertical">
            企業実績
          </div>
          <div className="absolute left-6 bottom-12 text-xs font-mono text-slate-300 tracking-widest select-none pointer-events-none hidden xl:block [writing-mode:vertical-lr]">
            SECURE INFRASTRUCTURE // LEVEL_04
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-100 pb-6 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold flex items-center gap-2">
                  <span>実績</span>
                  <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                  Corporate Performance & Assets
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
                  Our Market Position <span className="font-serif italic font-normal text-slate-400">by the numbers</span>
                </h2>
              </div>
              <div className="text-right font-serif text-slate-300 text-sm tracking-loose max-w-xs md:block hidden">
                Guaranteed metrics backed by systemic capital validation models.
              </div>
            </div>

            {/* Redesigned Dynamic Asymmetric Grid to fix emptiness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className={`group bg-[#FAFAFB] p-8 rounded-lg border border-slate-100/80 hover:border-slate-300 hover:bg-white transition-all duration-300 flex flex-col justify-between relative shadow-2xs hover:shadow-md hover:-translate-y-0.5 ${
                    idx === 1 || idx === 6 ? "lg:translate-y-3" : ""
                  } ${
                    idx === 3 || idx === 4 ? "lg:-translate-y-3" : ""
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-slate-950 opacity-0 group-hover:opacity-100 group-hover:bg-emerald-600 transition-all duration-300"></div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-3xl font-extralight tracking-tight text-slate-950 group-hover:text-emerald-700 transition-colors duration-300">
                        {metric.value}
                      </span>
                      <span className="text-[9px] font-serif font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
                        {metric.marker}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-900 tracking-tight transition-all duration-300">
                        {metric.label}
                      </div>
                      <div className="text-[10px] text-slate-400 font-normal font-mono group-hover:text-slate-500">
                        {metric.detail}
                      </div>
                    </div>
                  </div>

                  {/* Design accent: minimal corner chevron anchor */}
                  <div className="mt-6 pt-4 border-t border-slate-100/60 flex items-center justify-between text-[8px] font-mono tracking-widest text-slate-300 uppercase">
                    <span>SEC_ID // 0{idx + 1}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-emerald-600 transition-opacity duration-300">✦</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive footprint filling the base space */}
            <div className="mt-16 p-6 rounded-lg bg-slate-50 border border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">Audited System Compliance:</span>
                <span className="text-slate-700">Fully recognized under ICASL and CBSL regulatory boundaries.</span>
              </div>
              <a href="#contact" className="text-[10px] font-mono uppercase tracking-widest font-bold text-slate-900 hover:text-emerald-600 transition-colors flex items-center gap-1">
                Verify Data Details <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="max-w-7xl mx-auto px-6 py-28 relative">
          {/* Background Typography - The Future (未来) */}
          <div className="absolute top-12 left-4 text-8xl font-black text-slate-900/[0.04] select-none pointer-events-none font-serif hidden lg:block">
            未来
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">Our Services · サービス</span>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Insurance Solutions <span className="font-serif italic font-normal text-emerald-600">Tailored For You</span>
              </h2>
            </div>
            
            {/* Minimal Tab Switcher */}
            <div className="flex p-1 bg-slate-100 rounded-lg max-w-full overflow-x-auto gap-1">
              {[
                { id: "ipp", label: "Income Protection" },
                { id: "corporate", label: "Business Cover" },
                { id: "wealth", label: "Savings & Growth" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-slate-950 text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Layout Container */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden min-h-[420px] grid lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between space-y-8">
              {activeTab === "ipp" && (
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-sm uppercase border border-emerald-200/40">
                    Highly Recommended · 推奨
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-slate-950">Income Protection Plans (IPP)</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                    Your ability to earn an income is your most vital structural asset. This layout guarantees that you and your chosen beneficiaries receive a clean monthly replacement cash flow if severe sudden medical challenges or long-term disability prevent ongoing work.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs text-slate-600">
                      <span className="w-5 h-5 rounded-sm bg-slate-100 text-slate-800 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">01</span>
                      <p className="leading-relaxed"><strong>Consistent Replacement Revenue:</strong> Safely shields ongoing overheads and daily family operations without breaking assets.</p>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-slate-600">
                      <span className="w-5 h-5 rounded-sm bg-slate-100 text-slate-800 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">02</span>
                      <p className="leading-relaxed"><strong>Premium Waiver Protocols:</strong> The structural execution stays fully funded dynamically by Softlogic Life if severe incidents impact your capacity.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "corporate" && (
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest font-bold text-slate-800 bg-slate-50 px-2.5 py-1 rounded-sm uppercase border border-slate-200">
                    Corporate Strategy · 企業
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-slate-950">Key Person & Business Continuity</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                    Shield enterprise structures from organizational vulnerabilities. Protect liquidity targets if central partners or high-value executives encounter disruptive medical emergencies.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs text-slate-600">
                      <span className="w-5 h-5 rounded-sm bg-slate-100 text-slate-800 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">01</span>
                      <p className="leading-relaxed"><strong>Liability Coverage Pools:</strong> Immediate corporate capital infusions to settle operational balances, commercial real estate overheads, or institutional credit obligations lines cleanly.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "wealth" && (
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-sm uppercase border border-emerald-200/40">
                    Wealth Management · 資産
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-slate-950">Long‑Term Wealth Preservation</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                    High-efficiency premium frameworks bridging guaranteed capital return vectors with structural life parameters. Programmed exclusively for legacy planning, stable retirement paths, and long-range wealth transfer dynamics.
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <a href="#contact" className="px-5 py-3 rounded-sm bg-slate-950 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-600 transition-colors duration-300">
                  Request Specific Proposal
                </a>
              </div>
            </div>

            {/* Right Panel Parameters Column */}
            <div className="lg:col-span-5 bg-[#F9F9FB] border-t lg:border-t-0 lg:border-l border-slate-200 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold block">Plan Parameters & Resilience</span>
                
                <div className="bg-white border border-slate-200 p-5 rounded-lg space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-950">
                      {activeTab === "ipp" && "Personal Income Defense Layer"}
                      {activeTab === "corporate" && "Enterprise Viability Index"}
                      {activeTab === "wealth" && "Compound Maturity Horizon"}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-xs">Active</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-mono">
                        <span>Capital Liquidity Guard</span>
                        <span className="font-bold text-slate-950">{activeTab === "ipp" ? "85%" : activeTab === "corporate" ? "95%" : "75%"}</span>
                      </div>
                      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-950 rounded-full transition-all duration-500" 
                          style={{ width: activeTab === "ipp" ? "85%" : activeTab === "corporate" ? "95%" : "75%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-mono">
                        <span>Risk Alleviation Rate</span>
                        <span className="font-bold text-slate-950">{activeTab === "ipp" ? "90%" : activeTab === "corporate" ? "80%" : "95%"}</span>
                      </div>
                      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
                          style={{ width: activeTab === "ipp" ? "90%" : activeTab === "corporate" ? "80%" : "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 text-white rounded-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Softlogic Corporate Guarantee</div>
                    <div className="text-xs font-bold">100% Structural Backing</div>
                  </div>
                  <span className="text-lg font-serif font-bold text-slate-300">確実</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Engagement Intake Form */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-20 text-left border-t border-slate-200">
          <div className="max-w-xl mb-12 flex items-baseline justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold block">Get In Touch · 連絡</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-950">Connect with an Expert</h2>
              <p className="text-slate-500 text-xs">Direct human channels. No automated generic bots.</p>
            </div>
            <span className="text-xl font-serif font-bold text-slate-300">相談</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6 border border-slate-200 rounded-lg p-8 bg-white flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider">Fast Contact Methods</h4>
                <p className="text-xs text-slate-400 font-normal mt-1">Initiate safe encryption chat lines instantly</p>
                <div className="mt-6">
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generalQuickMessage}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-sm transition-all duration-300 gap-2"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.405.003 12.022.003c3.201.001 6.212 1.248 8.477 3.517 2.266 2.268 3.51 5.28 3.501 8.484-.017 6.674-5.361 12.018-11.977 12.018-2.007-.002-3.98-.502-5.735-1.45l-6.231 1.633zm6.104-3.411l.363.215c1.592.946 3.427 1.446 5.3 1.448 5.64.001 10.236-4.594 10.248-10.234.006-2.732-1.054-5.3-2.986-7.235C17.152 3.082 14.585 2.022 11.85 2.022 6.211 2.022 1.615 6.618 1.603 12.26c-.004 1.92.502 3.796 1.465 5.4l.236.395-.98 3.579 3.664-.961z"/>
                    </svg>
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider py-3 rounded-sm hover:bg-slate-100 transition-colors"
                >
                  LinkedIn
                </a>
                <a href="mailto:advisor@example.com" className="flex items-center justify-center border border-slate-200 bg-white text-slate-700 text-[10px] font-bold uppercase tracking-wider py-3 rounded-sm hover:border-slate-400 transition-colors">
                  Email Me
                </a>
              </div>
            </div>
            
            <div className="space-y-4 border border-slate-200 rounded-lg p-8 bg-white">
              <div>
                <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider">Request a Proposal</h4>
                <p className="text-xs text-slate-400 font-normal mt-1">Submit your details to compile accurate financial simulations</p>
              </div>
              <div className="space-y-3 pt-2">
                <input 
                  type="text" 
                  placeholder="Your Name / Company Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="w-full border border-slate-200 bg-slate-50 rounded-sm px-4 py-3 text-xs focus:outline-none focus:bg-white focus:border-slate-950 transition-all text-slate-900 placeholder:text-slate-400" 
                />
                <input 
                  type="text" 
                  placeholder="WhatsApp Number or Email" 
                  value={contactInfo} 
                  onChange={(e) => setContactInfo(e.target.value)} 
                  className="w-full border border-slate-200 bg-slate-50 rounded-sm px-4 py-3 text-xs focus:outline-none focus:bg-white focus:border-slate-950 transition-all text-slate-900 placeholder:text-slate-400" 
                />
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${formSubmissionMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-full bg-slate-950 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-sm transition-all duration-300"
                >
                  Send Details via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Layout Container */}
      <footer className="border-t border-slate-100 py-12 text-slate-400 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest font-bold">
          <span>© 2026 Yasiru Karunarathne · Softlogic Life Insurance Solutions · 誠実 (Integrity)</span>
          <div className="flex gap-6">
            <span className="hover:text-slate-950 transition-colors cursor-pointer">Reliable Strategy</span>
            <span className="hover:text-slate-950 transition-colors cursor-pointer">Absolute Defense</span>
          </div>
        </div>
      </footer>
    </div>
  );
}