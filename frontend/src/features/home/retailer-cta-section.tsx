import React from "react";
import { Store, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export function RetailerCTASection() {
  const benefits = [
    "Broadcast your physical inventory to high-intent local shoppers",
    "Bring foot traffic into your brick-and-mortar store",
    "Real-time catalog synchronization with easy setup",
    "Zero hidden fees during introductory launch",
  ];

  return (
    <section id="retailer-cta" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <Store className="h-3.5 w-3.5" />
              <span>For Brick & Mortar Retailers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Put Your Local Store on the Digital Map.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Join Smart Shopping Guide to connect with shoppers within 5 miles looking to buy today.
              Turn online searches into immediate in-store visits.
            </p>

            <ul className="space-y-3 pt-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-md hover:bg-emerald-400 active:scale-98 transition-all"
              >
                Claim or Register Your Store
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
              >
                Learn How It Works
              </button>
            </div>
          </div>

          {/* Stat highlights / Trust card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-700/80 bg-slate-800/50 p-8 backdrop-blur-xs space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Local-First Commerce</div>
                  <div className="text-xs text-slate-400">Empowering independent merchants</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Shopper Intent</span>
                  <span className="text-emerald-400 font-semibold">Immediate Purchase</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 w-4/5 rounded-full" />
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  80%+ of local queries result in same-day store visits.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                <Users className="h-4 w-4 text-emerald-400" />
                <span>Partnering with verified local merchant associations nationwide.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
