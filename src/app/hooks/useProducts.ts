import { useQuery } from '@tanstack/react-query';
import { productApiClient } from '@/app/utils/ApiClient/productApiClient';
import { Product, ProductFilters } from '@/app/types';
import { placeholderData } from '@/app/constants/placeholderData';
import { filterSaleItems } from '../utils/helpers';

const buildQueryParams = (filters?: ProductFilters): string => {
  const params = new URLSearchParams();
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== 'category') {
        params.append(key, String(value));
      }
    });
  }
  const type = (filters?.type && filters.type!=="sale") ? `/${filters.type}` : '';
  const category = filters?.category ? `/${filters.category}` : '';
  const query = params.toString();

  return `${type}${category}${query ? `?${query}` : ''}`;
};

const fetchProducts = async (filters?: ProductFilters): Promise<Product[]> => {
  const url = buildQueryParams(filters);
    const res =  await productApiClient.get<Product[]>(url);
    if (filters?.type == "sale") {
      return filterSaleItems(res);
    }
    return res;
};

export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    initialData: placeholderData
  });
};