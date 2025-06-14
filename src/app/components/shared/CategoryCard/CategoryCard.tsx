import Link from "next/link";
import { slugify } from "@/app/utils/helpers";
import { categoryBgClasses } from "@/app/constants/categoryStyles";

interface CategoryCardProps {
  label: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ label }) => {
  const slug = slugify(label);
  const bgClass = categoryBgClasses[slug] || "bg-gray-100"; // fallback

  return (
    <Link
      href={`/${slug}`}
      aria-label={`Browse ${label} category`}
      className={`category-card flex-1 h-40 rounded-xl flex items-center justify-center ${bgClass}`}
    >
      <h3 className="text-white text-xl font-bold">{label}</h3>
    </Link>
  );
};

export default CategoryCard;
