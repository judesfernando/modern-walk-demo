import { ProductFetchOptions } from "@/app/types";

export class productApiClient {
  static async request<T>(
    url: string,
    options: ProductFetchOptions = {}
  ): Promise<T> {
    const {
      method = 'GET',
      headers = { 'Content-Type': 'application/json' },
      body,
      cache = 'no-cache',
      next,
    } = options;

    const fetchOptions: RequestInit = {
      method,
      headers,
      cache,
    };

    if (body && method !== 'GET') {
      fetchOptions.body = JSON.stringify(body);
    }

    const finalUrl = process.env.NEXT_PUBLIC_PRODUCT_API_BASE_URL
      ? `${process.env.NEXT_PUBLIC_PRODUCT_API_BASE_URL}${url}`
      : url;

    const res = await fetch(finalUrl, {
      ...fetchOptions,
      next, // Enables ISR / cache tags if used in app router
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Fetch failed: ${res.status} ${res.statusText} - ${errorText}`);
    }

    return res.json();
  }

  static get<T>(url: string, next?: ProductFetchOptions['next']) {
    return this.request<T>(url, { method: 'GET', next });
  }

  static post<T>(url: string, body:string) {
    return this.request<T>(url, { method: 'POST', body });
  }

  static put<T>(url: string, body: string) {
    return this.request<T>(url, { method: 'PUT', body });
  }

  static delete<T>(url: string) {
    return this.request<T>(url, { method: 'DELETE' });
  }
}
