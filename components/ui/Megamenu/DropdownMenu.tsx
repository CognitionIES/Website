// DropdownMenu.tsx
import { CategoryList } from "./CategoryList";
import { SubCategoryList } from "./SubCategoryList";
import { FeaturedImage } from "./FeaturedImage";
import { MainCategory } from "@/components/ui/Megamenu/menuData";

interface DropdownMenuProps {
  data: MainCategory[];
  activeCategory: number;
  setActiveCategory: (value: number) => void;
}

export function DropdownMenu({
  data,
  activeCategory,
  setActiveCategory,
}: DropdownMenuProps) {
  return (
    <div className="absolute z-[100] left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out min-h-[350px]">
      <div className="grid grid-cols-3 min-h-[450px]">
        <CategoryList
          data={data}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <SubCategoryList subCategories={data[activeCategory].subCategories} />
        <FeaturedImage image={data[activeCategory].image} />
      </div>
    </div>
  );
}