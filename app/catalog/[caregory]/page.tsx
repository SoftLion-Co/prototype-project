"use client";

import { usePathname, redirect } from "next/navigation";
import data from "@/data/categories.json";
import { CategorySection } from "@/sections/category_page/CategorySection";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";

const Category = () => {
  const category = usePathname().split("/").reverse()[0];

  if (!Object.keys(data).includes(category)) {
    redirect(`/catalog/${Object.keys(data)[0]}`);
  }

  const links = [
    { title: "Catalog", href: "/catalog" },
    { title: `${category}`, href: "" },
  ];

  return (
    <div>
      <BreadcrumbsComponent links={links} />
      <CategorySection />
    </div>
  );
};

export default Category;
