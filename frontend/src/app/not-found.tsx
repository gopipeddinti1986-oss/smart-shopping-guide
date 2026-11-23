import React from "react";
import Link from "next/link";
import { Store, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-6">
        <Store className="h-8 w-8" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">404</h1>
      <p className="mt-2 text-xl font-semibold text-slate-700">
        Page Not Found
      </p>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        The page you are looking for doesn&apos;t exist or has been moved to another location.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Return to Home
      </Link>
    </div>
  );
}
