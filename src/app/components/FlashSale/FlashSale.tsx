"use client";
import { useProducts } from '@/app/hooks/useProducts';
import ProductGrid from "../shared/ProductGrid/ProductGrid";

const FlashSale = () => {
  const { data, isLoading, error } = useProducts({
    sort:'desc',
    type: 'sale'
  });

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <section className="my-10">
      <h2 className="text-xl font-semibold mb-4">Flash Sale</h2>
      {
          isLoading && <div>Loading...</div>
      }
      {
      data && <ProductGrid items={data}></ProductGrid>
      }
    </section>
  );
};

export default FlashSale;
