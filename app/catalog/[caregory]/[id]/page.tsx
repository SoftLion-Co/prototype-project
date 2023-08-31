"use client";

import { usePathname, redirect } from "next/navigation";
import data from "@/data/cards-bike.json";

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

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Category;
