import React from "react";
import { Tag, Store, ArrowRight, Layers } from "lucide-react";
import { MOCK_PRODUCTS_PREVIEW } from "@/lib/constants";

export function ProductDiscoverySection() {
  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2.5 py-0.5 rounded-md mb-2">
              <Layers className="h-3.5 w-3.5" />
              <span>Multi-Store Comparison Concept</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Local Product Price Comparison
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Representative examples showing how consumers will compare real-time pricing and stock
              across multiple nearby retailers simultaneously.
            </p>
          </div>
          <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
            Illustrative Mock Data
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS_PREVIEW.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-300 transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <Store className="h-3.5 w-3.5 text-slate-400" />
                    {item.availableStoreCount} stores
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug min-h-[2.5rem]">
                  {item.title}
                </h3>

                <div className="mt-4 rounded-xl bg-slate-50 p-3 border border-slate-100">
                  <span className="text-[11px] text-slate-500 block uppercase font-medium tracking-wide">
                    Indicative Price Range
                  </span>
                  <div className="text-lg font-extrabold text-slate-900 mt-0.5">
                    {item.indicativePriceRange}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full"
                    >
                      <Tag className="h-3 w-3 text-slate-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors"
                >
                  <span>Compare Local Stores</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
