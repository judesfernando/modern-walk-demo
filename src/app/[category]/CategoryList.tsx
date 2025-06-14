"use client";
import { useProducts } from "../hooks/useProducts";
import ProductGrid from "../components/shared/ProductGrid/ProductGrid";

const CategoryList: React.FC<{
  category: string;
  categoryMap: Record<string, string>;
}> = ({ category, categoryMap }) => {
  const { data, isLoading, error } = useProducts({
    type: "category",
    sort: "desc",
    category: categoryMap[category],
  });

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data && <ProductGrid items={data} />}
    </div>
  );
};

export default CategoryList;
