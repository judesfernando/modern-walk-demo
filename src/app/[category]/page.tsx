import { slugify } from "../utils/helpers";
import CategoryList from "./CategoryList";
import { productApiClient } from "@/app/utils/ApiClient/productApiClient";
import { Metadata } from "next";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const {category} = await params
  const categories = await productApiClient.get<string[]>("/categories");
  const categoryMap: Record<string, string> = categories.reduce((acc, cat) => {
    acc[slugify(cat)] = cat;
    return acc;
  }, {} as Record<string, string>);

  const readableCategory = categoryMap[category] || "Unknown Category";
  const capitalized =
    readableCategory.charAt(0).toUpperCase() + readableCategory.slice(1);

  return {
    title: `${capitalized} - Modern Walk`,
    description: `Browse the latest in ${capitalized} at Modern Walk. Discover stylish picks for every look.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categories = await productApiClient.get<string[]>("/categories");

  const categoryMap: Record<string, string> = categories.reduce((acc, cat) => {
    const key = slugify(cat);
    acc[key] = cat;
    return acc;
  }, {} as Record<string, string>);

  return (
    <div className="container mx-auto px-4 md:px-0">
      <h2 className="text-2xl font-bold my-6 capitalize">
        {categoryMap[category]}
      </h2>
      <CategoryList
        category={category}
        categoryMap={categoryMap}
      ></CategoryList>
    </div>
  );
}
