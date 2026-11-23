import { siteConfig } from "@/config";
import { ApiResponse, BackendHealthResponse, BackendReadyResponse } from "@/types";

/**
 * Centralized API client for Smart Shopping Guide
 */
export async function apiRequest<T>(
  path: string,
  options?: RequestInit,
  timeoutMs = 6000
): Promise<ApiResponse<T>> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteConfig.apiUrl}${normalizedPath}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options?.headers || {}),
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        data: null,
        error: `Server responded with status ${response.status}`,
        status: response.status,
      };
    }

    const data: T = await response.json();
    return {
      data,
      error: null,
      status: response.status,
    };
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const errorMessage =
      err instanceof DOMException && err.name === "AbortError"
        ? "Request timed out"
        : "Failed to connect to backend service";

    return {
      data: null,
      error: errorMessage,
      status: 0,
    };
  }
}

/**
 * Health check endpoints
 */
export async function fetchHealth(): Promise<ApiResponse<BackendHealthResponse>> {
  return apiRequest<BackendHealthResponse>("/health");
}

export async function fetchReady(): Promise<ApiResponse<BackendReadyResponse>> {
  return apiRequest<BackendReadyResponse>("/health/ready");
}
