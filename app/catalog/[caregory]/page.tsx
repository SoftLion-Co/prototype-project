"use client";

import { usePathname, redirect } from "next/navigation";
import data from "@/data/categories.json";

const Category = () => {
  const category = usePathname().split("/").reverse()[0];

  if (!data.includes(category)) {
    redirect(`/catalog/${data[0]}`);
  }
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};

export default Category;
