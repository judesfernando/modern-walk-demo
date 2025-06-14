import React from "react";
import { Product } from "@/app/types";
import Image from "next/image";
import { slugify } from "@/app/utils/helpers";
import { categoryBgClasses } from "@/app/constants/categoryStyles";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="product-card product-card--skeleton bg-white rounded-2xl overflow-hidden shadow-md animate-pulse" role="status" aria-busy="true" aria-label="Loading product">
      <div className="p-4 text-center">
        <div className="mt-2 min-h-12">
          <div className="h-4 w-full rounded bg-gray-200 mx-auto" aria-hidden="true"></div>
          <div className="h-4 mt-2 w-1/3 rounded bg-gray-200 mx-auto" aria-hidden="true"></div>
        </div>
        <div className="h-40 w-1/2 mx-auto relative my-4" aria-hidden="true">
          <Image src="/images/product-placeholder.png" alt="Placeholder" width={200} height={100} className="mx-auto object-contain w-auto h-full" />
        </div>
      </div>
      <div className="p-3 rounded-2xl min-h-36 bg-gray-100">
        <div className="h-5 my-2 w-1/3 rounded bg-gray-200 mx-auto" aria-hidden="true"></div>
        <div className="h-3 mt-2 rounded bg-gray-200 mx-auto" aria-hidden="true"></div>
        <div className="h-3 mt-2 w-1/2 rounded bg-gray-200 mx-auto" aria-hidden="true"></div>
        <div className="h-3 mt-2 w-1/3 rounded bg-gray-200 mx-auto" aria-hidden="true"></div>
        <div className="h-3 mt-2 w-1/2 rounded bg-gray-200 mx-auto" aria-hidden="true"></div>
      </div>
    </div>
   )
}
const ProductItem: React.FC<Product> = ({
  title,
  price,
  description,
  image,
  category,
}) => {
  const slug = slugify(category);
  const bgClass = categoryBgClasses[slug] || "bg-gray-100"; // fallback

  return (
    <article aria-label={`Product: ${title}`} className="product-card bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="p-4 text-center">
        <h3 className="product-name font-semibold mt-2 line-clamp-2 min-h-12">{title}</h3>
        <div className="product-image h-40 w-1/2 mx-auto relative my-4">
          <Image src={image} alt={title} width={200} height={100} className="mx-auto object-contain w-auto h-full" />
        </div>
      </div>
      <div className={`product-details p-3 rounded-2xl min-h-36 ${bgClass}`}>
        <p className="product-details-price text-lg text-center font-bold text-brand-blue" aria-label={`Price: Rs ${price}`}>Rs {price}</p>
        <p className="product-details-description text-sm mt-1 line-clamp-4 text-center px-6">{description}</p>
      </div>
    </article>
  );
}

const ProductCard: React.FC<{product:Product}> = ({product}) => {
  
  const {category} =  product
  const loading = category == "loading"

  return (
    loading ? <ProductSkeleton /> : <ProductItem {...product} />
  );
};

export default ProductCard;
