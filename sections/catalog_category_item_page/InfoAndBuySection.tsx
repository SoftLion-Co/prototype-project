import { FC, MouseEvent, useState } from "react";
import s from "./InfoAndBuySection.module.scss";
import { Slider } from "@/components/catalog_category_item_page/Slider";
import data from "@/data/cards-bike.json";
import { AiOutlineHeart } from "react-icons/ai";
import CardBikeComponent from "@/components/CardBikeComponent";
import SliderComponent from "@/components/SliderComponent";
import useCartlist from "@/hooks/useCartlist";
import useWishlist from "@/hooks/useWishlist";
import classNames from "classnames";
import Link from "next/link";

interface BikeI {
  name: string;
  colors: {
    [color: string]: string;
  };
  series: string[];
  sizes: number[];
  category: string;
  price: number;
  discount: number;
  equipment: string[];
  description: string;
  characteristics: string;
}

export const InfoAndBuySection: FC<{ id: string }> = ({ id }) => {
  const bike: { [key: string]: BikeI } = data;
  const item = bike[id];
  const { cartItems, setItems } = useCartlist();
  const { likedItems, toggleLike } = useWishlist();

  const [size, setSize] = useState(item.sizes[0]);
  const [description, setDescription] = useState("description");
  const [color, setColor] = useState(item.colors[0]);

  const changeColor = (id: number) => {
    setColor(Object.keys(item.colors)[id]);
  };

  const getBikesFromTheSameSeries = () => {
    const seria = item.series[0];
    const matchingIds = [];

    for (const id in data) {
      const item = bike[id];

      if (item.series[0] === seria) {
        matchingIds.push(id);
      }
    }

    return matchingIds;
  };

  const handleSizeBtn = (e: MouseEvent) => {
    setSize(Number(e.currentTarget.id));
  };

  const handleDescriptionBtn = (e: MouseEvent) => {
    setDescription(e.currentTarget.id);
  };

  const handleAddToCartBtn = () => {
    if (Object.keys(cartItems).includes(id)) {
      setItems(id, 0);
    } else {
      setItems(id, 1);
    }
  };

  return (
    <section className={s.container}>
      <div className={s.info_and_buy_section}>
        <div className={s.info_and_buy_section__wrap}>
          <div className={s.info_and_buy_section__slider_container}>
            <h2>
              {item.series[0]} {item.name}
            </h2>
            <Slider
              pictures={Object.values(item.colors)}
              changeColor={changeColor}
            />
          </div>

          <div className={s.info_and_buy_container}>
            <h2>
              {item.series[0]} {item.name}
            </h2>

            <div className={s.info_and_buy_container__info}>
              {Object.keys(item.colors)[0] !== "none" ? (
                <>
                  <h4 className={s.info_and_buy_container__title}>Color</h4>
                  <ul className={s.info_and_buy_container__colors_list}>
                    {Object.keys(item.colors).map((el) => {
                      return (
                        <li
                          className={color === el ? s.active : ""}
                          style={{ backgroundColor: el }}
                        ></li>
                      );
                    })}
                  </ul>
                </>
              ) : null}

              <h4 className={s.info_and_buy_container__title}>Size</h4>
              <ul className={s.info_and_buy_container__size_list}>
                {item.sizes.map((el) => {
                  return (
                    <li>
                      <button
                        onClick={handleSizeBtn}
                        className={size === el ? s.active : ""}
                        id={`${el}`}
                      >
                        {el}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {item.discount !== 0 ? (
                <div className={s.info_and_buy_container__discount_container}>
                  <div>
                    <p
                      className={
                        s.info_and_buy_container__discount_container__price
                      }
                    >
                      {item.price}$
                    </p>
                    <p
                      className={
                        s.info_and_buy_container__discount_container__discount
                      }
                    >
                      -{item.discount}%
                    </p>
                  </div>
                  <p
                    className={
                      s.info_and_buy_container__discount_container__calc_price
                    }
                  >
                    {item.price - (item.price / 100) * item.discount}$
                  </p>
                </div>
              ) : (
                <div className={s.info_and_buy_container__price}>
                  {item.price}$
                </div>
              )}
            </div>
            <div className={s.info_and_buy_container__buy}>
              {Object.keys(cartItems).includes(id) ? (
                <Link style={{ width: "100%" }} href="/cart">
                  <button className={s.info_and_buy_container__buy__add_btn}>
                    Already in cart
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleAddToCartBtn}
                  className={s.info_and_buy_container__buy__add_btn}
                >
                  Add to cart
                </button>
              )}
              <Link style={{ width: "calc(100% - 56px - 18px)" }} href="/cart">
                <button className={s.info_and_buy_container__buy__order_btn}>
                  Order in 1 click
                </button>
              </Link>

              <button
                onClick={() => toggleLike(id)}
                className={classNames(
                  s.info_and_buy_container__buy__favorite_btn,
                  likedItems.includes(id) ? s.active : ""
                )}
              >
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>

        <div className={s.info_and_buy_description}>
          <div className={s.info_and_buy_description__wariables}>
            <button
              className={description === "description" ? s.active : ""}
              onClick={handleDescriptionBtn}
              id="description"
            >
              Description
            </button>
            <button
              className={description === "characteristics" ? s.active : ""}
              onClick={handleDescriptionBtn}
              id="characteristics"
            >
              Characteristics
            </button>
          </div>

          <p className={s.info_and_buy_description__text}>
            {description === "description" && item.description}
            {description === "characteristics" && item.characteristics}
          </p>
        </div>
      </div>

      {item.equipment.length !== 0 ? (
        <div className={s.equipment_component}>
          <h2>Equipment</h2>

          <ul className={s.equipment_component__list}>
            {item.equipment.map((id) => {
              return <li>{<CardBikeComponent id={id} />}</li>;
            })}
          </ul>
        </div>
      ) : null}

      <div className={s.picture_component}>
        <p>A new level of fit, ventilation and confidence</p>
      </div>

      <div className={s.bikes_from_this_series}>
        <h2 className={s.bikes_from_this_series__title}>
          Bikes from this series
        </h2>

        <SliderComponent id={getBikesFromTheSameSeries()} />
      </div>
    </section>
  );
};
