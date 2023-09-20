"use client";

import { usePathname, redirect } from "next/navigation";
import data from "@/data/cards-bike.json";
import { InfoAndBuySection } from "@/sections/catalog_category_item_page/InfoAndBuySection";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";

const Category = () => {
  const items: { [key: string]: { category: string } } = data;
  const path = usePathname().split("/").reverse();
  const id = path[0];
  const category = path[1];

  if (!Object.keys(data).includes(id)) {
    redirect(
      `/catalog/${items[Object.keys(items)[0]].category}/${
        Object.keys(items)[0]
      }`
    );
  }

  if (items[id].category !== category) {
    redirect(`/catalog/${items[id].category}/${id}`);
  }

  console.log(category);

  const links = [
    { title: "Catalog", href: "/catalog" },
    { title: `${category}`, href: "" },
    { title: `${id}`, href: "" },
  ];

  return (
    <div>
      <BreadcrumbsComponent links={links} />
      <InfoAndBuySection id={id} />
    </div>
  );
};

export default Category;
