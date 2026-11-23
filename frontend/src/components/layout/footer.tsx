import React from "react";
import Link from "next/link";
import { Store, ShieldCheck, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config";

export function Footer() {
  const retailerAndLegalLinks = [
    ...siteConfig.footerLinks.retailers,
    ...siteConfig.footerLinks.legal.slice(0, 2),
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <Store className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Smart Shopping Guide
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Empowering local consumers to search neighborhood stores, verify physical stock,
              and compare real-time prices before they buy.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 pt-2">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Verified Local Shops
              </span>
              <span className="inline-flex items-center gap-1">
                <HeartHandshake className="h-4 w-4 text-emerald-600" />
                Support Neighborhoods
              </span>
            </div>
          </div>

          {/* Links: About */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              About
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Customers */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Shoppers
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerLinks.customers.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Retailers & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Retailers & Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {retailerAndLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Smart Shopping Guide. All rights reserved.</p>
          <p className="text-slate-400">
            Phase 1 Foundation • Next.js App Router & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
}
