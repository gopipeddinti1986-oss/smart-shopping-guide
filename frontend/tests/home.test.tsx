import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage Component", () => {
  it("renders homepage navigation and brand logo", () => {
    render(<HomePage />);
    expect(screen.getAllByText("Smart Shopping Guide").length).toBeGreaterThan(0);
    expect(screen.getByRole("navigation", { name: "Main Navigation" })).toBeInTheDocument();
  });

  it("renders the hero headline and search input", () => {
    render(<HomePage />);
    expect(screen.getByText(/Find the Best Prices at/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Search products, brands, or nearby stores.../i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("renders the categories section with preview catalog", () => {
    render(<HomePage />);
    expect(screen.getByText("Browse by Category")).toBeInTheDocument();
    expect(screen.getAllByText("Electronics").length).toBeGreaterThan(0);
    expect(screen.getByText("Grocery & Daily Essentials")).toBeInTheDocument();
    expect(screen.getByText("Fashion & Apparel")).toBeInTheDocument();
  });

  it("renders the local store discovery section", () => {
    render(<HomePage />);
    expect(screen.getByText("Local Stores Near You")).toBeInTheDocument();
    expect(screen.getByText(/Apex Digital Electronics/i)).toBeInTheDocument();
  });

  it("renders the retailer CTA section", () => {
    render(<HomePage />);
    expect(screen.getByText(/Put Your Local Store on the Digital Map/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Claim or Register Your Store/i })).toBeInTheDocument();
  });

  it("renders the footer with copyright and legal links", () => {
    render(<HomePage />);
    expect(screen.getByText(/Phase 1 Foundation • Next.js App Router & FastAPI/i)).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  });
});
