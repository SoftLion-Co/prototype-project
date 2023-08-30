"use client";

import { usePathname, redirect } from "next/navigation";

const Category = () => {
  const id = usePathname().split("/").reverse()[0];

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Category;
