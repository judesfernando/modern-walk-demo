import { slugify, filterSaleItems } from '@/app/utils/helpers';
import { Product } from '@/app/types';

describe('slugify', () => {
    it('converts basic strings to kebab-case', () => {
        expect(slugify('Hello World')).toBe('hello-world');
    });

    it('removes single and double quotes', () => {
        expect(slugify(`Men's "Clothing"`)).toBe('mens-clothing');
    });

    it('trims whitespace and lowercases', () => {
        expect(slugify('   Fancy CATEGORY   ')).toBe('fancy-category');
    });

    it('handles special characters', () => {
        expect(slugify('New & Improved!')).toBe('new-improved');
    });

    it('removes leading/trailing dashes', () => {
        expect(slugify('--Dash--Test--')).toBe('dash-test');
    });

    it('collapses multiple spaces and symbols into a single dash', () => {
        expect(slugify('A   B___C!! D')).toBe('a-b-c-d');
    });

    it('returns empty string for empty input', () => {
        expect(slugify('')).toBe('');
    });
});

describe('filterSaleItems', () => {
    it('should interleave men\'s and women\'s clothing products', () => {
        const input: Product[] = [
            { id: 1, category: "men's clothing", title: 'Men Shirt 1', price: "", description: "", image: "" },
            { id: 2, category: "women's clothing", title: 'Women Dress 1', price: "", description: "", image: "" },
            { id: 3, category: "men's clothing", title: 'Men Shirt 2', price: "", description: "", image: "" },
            { id: 4, category: "women's clothing", title: 'Women Dress 2', price: "", description: "", image: "" },
            { id: 5, category: "men's clothing", title: 'Men Shirt 3', price: "", description: "", image: "" },
            { id: 6, category: 'electronics', title: 'Phone', price: "", description: "", image: "" },
            { id: 7, category: "women's clothing", title: 'Women Dress 3', price: "", description: "", image: "" },
        ];

        const result = filterSaleItems(input);

        expect(result).toEqual([
            { id: 1, category: "men's clothing", title: 'Men Shirt 1', price: "", description: "", image: "" },
            { id: 2, category: "women's clothing", title: 'Women Dress 1', price: "", description: "", image: "" },
            { id: 3, category: "men's clothing", title: 'Men Shirt 2', price: "", description: "", image: "" },
            { id: 4, category: "women's clothing", title: 'Women Dress 2', price: "", description: "", image: "" },
            { id: 5, category: "men's clothing", title: 'Men Shirt 3', price: "", description: "", image: "" },
            { id: 7, category: "women's clothing", title: 'Women Dress 3', price: "", description: "", image: "" },
        ]);

        expect(result.every(item =>
            item.category === "men's clothing" || item.category === "women's clothing"
        )).toBe(true);
    });
});
