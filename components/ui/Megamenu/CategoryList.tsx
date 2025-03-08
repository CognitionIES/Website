// CategoryList.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MainCategory } from "@/components/ui/Megamenu/menuData";

interface CategoryListProps {
  data: MainCategory[];
  activeCategory: number;
  setActiveCategory: (value: number) => void;
}

export function CategoryList({
  data,
  activeCategory,
  setActiveCategory,
}: CategoryListProps) {
  return (
    <div className="space-y-1 bg-[#003c46] flex flex-col py-2">
      {data.map((category, index) => (
        <Link key={category.title} href={category.href}>
          <button
            onMouseEnter={() => setActiveCategory(index)}
            className={cn(
              "w-full flex items-center justify-between px-4 py-2 text-lg font-medium transition-colors duration-200",
              activeCategory === index
                ? "text-[#00b6d3]"
                : "text-white hover:bg-black"
            )}
          >
            <div className="flex items-center">
              {category.icon && <span className="mr-2">{category.icon}</span>}
              {category.title}
            </div>
            {activeCategory === index && (
              <span className="text-[#00b6d3] font-bold text-lg"></span>
            )}
          </button>
        </Link>
      ))}
    </div>
  );
}