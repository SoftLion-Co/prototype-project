"use client";

import { usePathname, redirect } from "next/navigation";
import data from "@/data/categories.json";

const Category = () => {
  const category = usePathname().split("/").reverse()[0];

  if (!Object.keys(data).includes(category)) {
    redirect(`/catalog/${Object.keys(data)[0]}`);
  }
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};

export default Category;
