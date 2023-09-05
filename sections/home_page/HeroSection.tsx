import React, { FC } from "react";
import s from "./HeroSection.module.scss";
import Link from "next/link";
import classNames from "classnames";


export const HeroSection: FC = () => {
  return (
    <section className={s.hero_section}>
      <div className={s.container}>
        <div className={s.hero_section__container}>
          <div className={s.hero_section__title}>
            <span>Speed</span>
            <span>Accuracy</span>
            <span>Security</span>
          </div>
          <div className={s.hero_section__description}>
            <p>
              If there is one thing that unites everyone who works at our
              company, it is the belief that bicycles can really make a
              difference in people's lives.
            </p>
          </div>
          <Link href="/catalog" className={s.hero_section__btn}>
            To Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};
