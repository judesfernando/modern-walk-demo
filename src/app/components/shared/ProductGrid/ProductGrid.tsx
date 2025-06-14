import { Product } from "@/app/types";
import ProductCard from "@/app/components/shared/ProductCard/ProductCard";

const ProductGrid: React.FC<{items:Product[]}> = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
}
export default ProductGrid;