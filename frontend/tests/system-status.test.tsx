import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { SystemStatus } from "@/components/shared/system-status";
import * as apiClient from "@/lib/api/client";

describe("SystemStatus Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("handles loading and successful backend connection", async () => {
    vi.spyOn(apiClient, "fetchHealth").mockResolvedValueOnce({
      data: {
        status: "healthy",
        application: "Smart Shopping Guide API",
        version: "1.0.0",
      },
      error: null,
      status: 200,
    });

    render(<SystemStatus />);
    // Should show loading initially or transition to connected
    await waitFor(() => {
      expect(screen.getByText("Smart Shopping Guide API")).toBeInTheDocument();
      expect(screen.getByText(/v1.0.0 • Healthy/i)).toBeInTheDocument();
    });
  });

  it("handles backend error or disconnection gracefully", async () => {
    vi.spyOn(apiClient, "fetchHealth").mockResolvedValueOnce({
      data: null,
      error: "Failed to connect to backend service",
      status: 0,
    });

    render(<SystemStatus />);
    await waitFor(() => {
      expect(screen.getByText(/Backend Offline \(Local mode\)/i)).toBeInTheDocument();
    });
  });
});
