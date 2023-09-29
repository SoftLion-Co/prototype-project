"use client";

import s from "./SliderSale.module.scss";

import SliderComponent from "@/components/SliderComponent";
import data from "@/data/cards-bike.json";
import categories from "../../data/categories.json";
import classNames from "classnames";
import { useState, useEffect } from "react";

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

const SliderSale = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [discauntCard, setDiscauntCard] = useState<string[]>([]);

  const cards: { [key: string]: BikeProps } = data;

  useEffect(() => {
    const filteredCards = Object.keys(cards).filter((key) => {
      const card = cards[key];

      return (
        (currentCategory === "" || card.category === currentCategory) &&
        card.discount > 0
      );
    });
    setDiscauntCard(filteredCards);
  }, [currentCategory, setDiscauntCard]);

  const handleCategoryFilter = (category: string) => {
    if (currentCategory === category) {
      setCurrentCategory("");
    } else {
      setCurrentCategory(category);
    }
  };

  return (
    <section className={classNames(s.container, s.sale)}>
      <h2 className={s.sale__name}>Sale of the month</h2>
      <div className={s.sale__wrapper_btn}>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={classNames(
              s.sale__btn,
              s.sale__btn_title,
              currentCategory === category && s.sale__btn_active
            )}
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <SliderComponent id={discauntCard} />
    </section>
  );
};

export default SliderSale;
