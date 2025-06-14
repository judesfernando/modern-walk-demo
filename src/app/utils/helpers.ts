import { Product } from "../types";

export const slugify = (text: string): string => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/['"]/g, '')
      .replace(/[\s\W_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
};

export const filterSaleItems = (data:Product[]): Product[] => {
  
  const mens:Product[] = data.filter(item => item.category === "men's clothing");
  const womens:Product[] = data.filter(item => item.category === "women's clothing");

  const result:Product[] = [];
  let i = 0;
  
  while (i < mens.length || i < womens.length) {
    if (i < mens.length) result.push(mens[i]);
    if (i < womens.length) result.push(womens[i]);
    i++;
  }
  return result;
};