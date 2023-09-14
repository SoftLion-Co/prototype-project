import s from "./SliderSeason.module.scss";

import SliderComponent from "@/components/SliderComponent";
import data from "../../data/cards-bike.json";
import classNames from "classnames";
import Link from "next/link";

const SliderSeason = () => {
  const items = Object.keys(data).slice(0, 12);

  return (
    <section className={classNames(s.container, s.main)}>
      <h1>Preparing for the season</h1>
      <SliderComponent id={items} />
      <Link className={s.main__btn} href={"/catalog"}>
        To catalog
      </Link>
    </section>
  );
};

export default SliderSeason;
