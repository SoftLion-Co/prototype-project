"use client";

import s from "./CartCardComponent.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import data from "../../data/cards-bike.json";
import useWishlist from "@/hooks/useWishlist";

interface CardBikeProps {
  name: string;
  colors?: {
    [color: string]: string;
  };
  series: string[];
  category: string;
  price: string;
  discount: string;
}

const CartCardComponent = () => {
  //   const { likedItems, toggleLike } = useWishlist();
  //   const item: { [key: string]: CardBikeProps } = data;
  //   const liked = likedItems.;

  return (
    <section className={classNames(s.card, s.container)}>
      <div>
        <div>
          <div>
            <Image />
          </div>
          <div>
            <h4></h4>
            <div>
              <div></div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <AiOutlineMinus />
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <AiOutlinePlus />
            </div>
          </div>
          <p></p>
          <div>
            <HiOutlineTrash />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartCardComponent;
