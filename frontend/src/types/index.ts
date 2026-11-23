export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

export interface BackendHealthResponse {
  status: "healthy" | "unhealthy";
  application: string;
  version: string;
}

export interface BackendReadyResponse {
  status: "ready" | "unavailable";
  database: "connected" | "disconnected";
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  itemCountDesc: string;
  href: string;
}

export interface LocalShopPreview {
  id: string;
  name: string;
  category: string;
  neighborhood: string;
  distance: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  isVerifiedPlaceholder: boolean;
}

export interface ProductPreview {
  id: string;
  title: string;
  category: string;
  indicativePriceRange: string;
  availableStoreCount: number;
  tags: string[];
}
