// SubCategoryList.tsx
import Link from "next/link";
import { SubCategory } from "@/components/ui/Megamenu/menuData";

interface SubCategoryListProps {
  subCategories: SubCategory[];
}

export function SubCategoryList({ subCategories }: SubCategoryListProps) {
  return (
    <div className="space-y-1 bg-[#0098af] flex flex-col py-2">
      {subCategories.map((subCategory) => (
        <Link
          key={subCategory.title}
          href={subCategory.href}
          className="flex items-center px-4 py-1 text-base text-white hover:text-[#003c46] transition-colors duration-200"
        >
          {subCategory.icon && <span className="mr-2">{subCategory.icon}</span>}
          {subCategory.title}
        </Link>
      ))}
    </div>
  );
}