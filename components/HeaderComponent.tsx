"use client";
import React from "react";
import s from "./HeaderComponent.module.scss";
import Logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBagSimple } from "react-icons/pi";
import data from "@/data/categories.json";

const HeaderComponent = () => {
  return (
    <header>
      <div className={s.header_container}>
        <div className={s.container}>
          <div className={s.header}>
            <div className={s.header__items_container}>
              <Link href="/">
                <Image
                  className={s.header__logo}
                  src={Logo}
                  alt="Specialized"
                />
              </Link>
              <div className={s.header__search}>
                <AiOutlineSearch className={s.header__search__icon} />
                <input className={s.header__search__input} />
              </div>
            </div>
            <div className={s.header__items_container}>
              <div className={s.header__items_container__item}>
                <HiOutlineLocationMarker className={s.header__icon} />
                <p className={s.header__items_container__title}>Kyiv</p>
              </div>
              <Link href="/heart" className={s.header__items_container__item}>
                <AiOutlineHeart className={s.header__icon} />
              </Link>
              <Link href="/basket" className={s.header__items_container__item}>
                <PiBagSimple className={s.header__icon} />
              </Link>
              <Link href="/login" className={s.header__items_container__item}>
                <AiOutlineUser className={s.header__icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={s.navigation}>
        <div className={s.container}>
          <div className={s.navigation__container}>
            <ul className={s.navigation__list}>
              {data.map((item) => (
                <li>
                  <Link
                    className={s.navigation__title}
                    key={item}
                    href={`/catalog/${item}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
