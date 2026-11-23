import React from "react";
import { MapPin, Star, Clock, Info } from "lucide-react";
import { MOCK_SHOPS_PREVIEW } from "@/lib/constants";

export function LocalDiscoverySection() {
  return (
    <section id="shops" className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2.5 py-0.5 rounded-md mb-2">
              <Info className="h-3.5 w-3.5" />
              <span>Future Search Experience Preview</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Local Stores Near You
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Preview of how neighborhood businesses, their current open status, and inventory ratings
              will be presented in your selected area.
            </p>
          </div>
          <div className="text-xs text-slate-500 bg-white border border-slate-200 rounded-lg p-2.5">
            <strong>Notice:</strong> Prototype view. Actual local inventory indexing begins in upcoming phases.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_SHOPS_PREVIEW.map((shop) => (
            <div
              key={shop.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:shadow-md hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                    {shop.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-600">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    {shop.rating} ({shop.reviewCount})
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {shop.name}
                </h3>

                <div className="mt-2.5 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{shop.neighborhood} • {shop.distance}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className={shop.isOpen ? "text-emerald-700 font-medium" : "text-slate-400"}>
                      {shop.isOpen ? "Open Now" : "Opens Tomorrow 9 AM"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 italic">
                  Preview Placeholder
                </span>
                <button
                  type="button"
                  className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors"
                >
                  View Inventory
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
