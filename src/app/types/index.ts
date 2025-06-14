export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export interface Category {
  label: string;
}

export interface ProductFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: {
    revalidate?: number;
    tags?: string[];
  };  
  body?: string;
}

export interface ProductFilters {
  type?: string;
  category?: string;
  sort?: "asc" | "desc";
  limit?: number
}