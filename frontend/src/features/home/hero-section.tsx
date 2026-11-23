"use client";

import React, { useState } from "react";
import { Search, MapPin, Sparkles } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Downtown District");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Nonfunctional in Phase 1 as designed
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-slate-50/30 to-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-xs mb-6">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          <span>Local Commerce Discovery Engine</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
          Find the Best Prices at{" "}
          <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">
            Shops Near You.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Discover local stores, compare prices, check availability, and shop smarter in your city.
        </p>

        {/* Search UI Container */}
        <div className="mt-10 max-w-3xl mx-auto">
          <form
            role="search"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-2.5 rounded-2xl bg-white p-2.5 shadow-lg shadow-slate-200/50 border border-slate-200"
          >
            {/* Location selector */}
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5 sm:w-1/3 border border-slate-200/80">
              <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
              <label htmlFor="location-select" className="sr-only">
                Select Your Neighborhood or City
              </label>
              <select
                id="location-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-slate-800 focus:outline-hidden cursor-pointer"
              >
                <option value="Downtown District">Downtown District</option>
                <option value="Westside Promenade">Westside Promenade</option>
                <option value="Arts District">Arts District</option>
                <option value="North Heights">North Heights</option>
              </select>
            </div>

            {/* Product search input */}
            <div className="relative flex-1 flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-slate-400" />
              <label htmlFor="search-input" className="sr-only">
                Search products, brands, or local inventory
              </label>
              <input
                id="search-input"
                type="search"
                enterKeyHint="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search products, brands, or nearby stores..."
                className="w-full rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden"
              />
            </div>

            {/* Search action */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 active:scale-98 transition-all"
            >
              <span>Search</span>
            </button>
          </form>

          {/* Quick tags */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-400">Popular searches:</span>
            {["Espresso machine", "Noise-cancelling headphones", "Organic apples", "Type-C cable"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchQuery(item)}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
