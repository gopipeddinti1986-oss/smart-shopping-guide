/**
 * Smart Shopping Guide - Centralized Frontend Configuration
 */
export const siteConfig = {
  name: "Smart Shopping Guide",
  tagline: "One Platform. Every City. Every Local Shop.",
  description:
    "Discover local stores, compare prices, check availability, and shop smarter in your city.",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  environment: process.env.NODE_ENV || "development",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Categories", href: "#categories" },
    { label: "Nearby Shops", href: "#shops" },
    { label: "Trending Products", href: "#products" },
  ],
  footerLinks: {
    about: [
      { label: "About Us", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Our Mission", href: "#" },
      { label: "Careers", href: "#" },
    ],
    customers: [
      { label: "Search Stores", href: "#" },
      { label: "Price Comparison", href: "#" },
      { label: "City Guides", href: "#" },
      { label: "Help Center", href: "#" },
    ],
    retailers: [
      { label: "Retailer Portal", href: "#retailer-cta" },
      { label: "Claim Your Store", href: "#retailer-cta" },
      { label: "Inventory Sync", href: "#" },
      { label: "Retailer FAQ", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
