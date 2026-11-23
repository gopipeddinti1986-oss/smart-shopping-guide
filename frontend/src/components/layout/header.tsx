"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Store, Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm transition-transform group-hover:scale-105">
            <Store className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
              Smart Shopping Guide
            </span>
            <span className="text-[11px] font-medium text-emerald-700 tracking-wide">
              Every City. Every Local Shop.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Sign In
          </button>
          <a
            href="#retailer-cta"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition-all"
          >
            <span>Retailer Portal</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-5 md:hidden space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-emerald-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              type="button"
              className="w-full rounded-lg border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Sign In
            </button>
            <a
              href="#retailer-cta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-lg bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              Join as Retailer
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
