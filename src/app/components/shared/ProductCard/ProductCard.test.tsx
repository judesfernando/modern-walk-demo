import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '@/app/components/shared/ProductCard/ProductCard';
import { Product } from '@/app/types';

describe('ProductCard', () => {
  const testProduct: Product = {
    id: 1,
    title: 'Test Product',
    price: "2500",
    description: 'A test description for this product.',
    category: 'electronics',
    image: '/images/test-product.png',
  };

  const loadingProduct: Product = {
    id: 0,
    title: '',
    price: "0",
    description: '',
    category: 'loading',
    image: '',
  };

  const unknownCategoryProduct: Product = {
    ...testProduct,
    category: "unknown-category"
  };

  it('renders ProductItem when not loading', () => {
    render(<ProductCard product={testProduct} />);
    
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Rs 2500/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText('A test description for this product.')).toBeInTheDocument();
  });

  it('renders ProductSkeleton when category is "loading"', () => {
    render(<ProductCard product={loadingProduct} />);
    
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true');
  });

  it('applies fallback background class when category is not mapped', () => {
    const { container } = render(<ProductCard product={unknownCategoryProduct} />);

    const bgDiv = container.querySelector('.product-details');
    expect(bgDiv?.className).toContain('bg-gray-100'); 
  });

  it('slugifies category and applies correct background class', () => {
    const customProduct: Product = {
      ...testProduct,
      category: "men's clothing"
    };

    const { container } = render(<ProductCard product={customProduct} />);
    const bgDiv = container.querySelector('.product-details');

    expect(bgDiv?.className).toContain('bg-cat-mens-clothing');
  });
});
