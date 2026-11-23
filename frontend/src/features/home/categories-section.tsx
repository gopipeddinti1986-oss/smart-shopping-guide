import React from "react";
import { Laptop, Apple, Shirt, Home, Smartphone, Sparkles, ChevronRight } from "lucide-react";
import { CATEGORIES_DATA } from "@/lib/constants";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Apple,
  Shirt,
  Home,
  Smartphone,
  Sparkles,
};

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Discover inventory across specialized retailers in your neighborhood.
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Preview Catalog
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Laptop;
            return (
              <a
                key={cat.id}
                href={cat.href}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-center transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50/30 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-xs border border-slate-200/80 transition-transform group-hover:scale-110 group-hover:text-emerald-700">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {cat.itemCountDesc}
                </p>
                <span className="mt-3 inline-flex items-center text-[11px] font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ChevronRight className="h-3 w-3 ml-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
