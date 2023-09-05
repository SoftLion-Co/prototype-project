"use client";
import React, { useState, useEffect } from "react";
import s from "./WishlistSection.module.scss";
import useWishlist from "@/hooks/useWishlist";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import categories from "@/data/categories.json";
import CardBikeComponent from "@/components/CardBikeComponent";
import { Group, Pagination } from "@mantine/core";
import data from "@/data/cards-bike.json";
import classNames from "classnames";

interface BikeProps {
  name: string;
  colors?: {
    [color: string]: string;
  };
  series: string[];
  category: string;
  price: number;
  discount: number;
}

const WishlistSection: React.FC = () => {
  const { likedItems, toggleLike } = useWishlist();
  const [itemsToDisplay, setItemsToDisplay] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const links = [{ title: "Wishlist", href: "" }];
  const cards: { [key: string]: BikeProps } = data;

  const itemsPerPage: number = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const updatedItemsToDisplay = likedItems
      .filter((id) => {
        const item = cards[id];
        return currentCategory === "" || currentCategory === item.category;
      })
      .slice(startIndex, endIndex);

    setItemsToDisplay(updatedItemsToDisplay);
  }, [likedItems, currentCategory, startIndex, endIndex]);

  const handleCategoryFilter = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <BreadcrumbsComponent links={links} />
      <div className={s.container}>
        <div className={s.wishlist_container}>
          <div className={s.wishlist_container__title}>Wish List</div>
          <div className={s.wishlist_container__filter_container}>
            {Object.keys(categories).map((index) => (
              <button
                key={index}
                className={classNames(
                  s.wishlist_container__btn,
                  s.wishlist_container__btn__title,
                  currentCategory === index && s.wishlist_container__btn__active
                )}
                onClick={() => handleCategoryFilter(index)}
              >
                {index}
              </button>
            ))}   
          </div>
          <ul className={s.wishlist_container__list}>
            {itemsToDisplay.map((item) => (
              <li className={s.wishlist_container__items}>
                <CardBikeComponent id={item} handleToggle={toggleLike} />
              </li>
            ))}
          </ul>
          <Pagination.Root
            total={likedItems.length}
            value={currentPage}
            onChange={handlePageChange}
            styles={(theme) => ({
              control: {
                "&[data-active]": {
                  backgroundImage: theme.fn.gradient({
                    from: "#6D6B4A",
                    to: "#6D6B4A",
                  }),
                  border: 0,
                },
              },
            })}
            size="lg"
          >
            <Group spacing={10} position="center">
              <Pagination.Previous />
              <Pagination.Items />
              <Pagination.Next />
            </Group>
          </Pagination.Root>
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;
