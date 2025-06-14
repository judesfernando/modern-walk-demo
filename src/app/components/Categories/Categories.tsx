import CategoryCard from "@/app/components/shared/CategoryCard/CategoryCard";
import { Category } from "@/app/types";

const categories: Category[] = [
  { label: "Men's Clothing" },
  { label: "Women's Clothing" },
  // Add more categories here as needed
];

const Categories: React.FC = () => {
  return (
    <section className="my-6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.label} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
