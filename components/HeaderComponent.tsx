"use client";
import React, { useState } from "react";
import s from "./HeaderComponent.module.scss";
import Logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBagSimple } from "react-icons/pi";
import data from "@/data/categories.json";
import classNames from "classnames";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={s.header_container}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.header__items_container}>
            <Link href="/">
              <Image className={s.header__logo} src={Logo} alt="Specialized" />
            </Link>
          </div>
          <div className={s.header__items_container}>
            <Link href="/orders" className={s.navigation__link}>View orders</Link>
            <Link
              href="/wishlist"
              className={classNames(s.header__items_container__mobile)}
            >
              <AiOutlineHeart className={s.header__icon_menu} />
            </Link>
            <Link
              href="/cart"
              className={classNames(s.header__items_container__mobile)}
            >
              <PiBagSimple className={s.header__icon_menu} />
            </Link>
            <button
              className={s.header__btn_burger}
              onClick={handleButtonClick}
            >
              {menuOpen ? (
                <MdOutlineClose className={s.header__icon_menu} />
              ) : (
                <AiOutlineMenu className={s.header__icon_menu} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={s.navigation}>
        <div className={s.container}>
          <div className={s.navigation__container}>
            <ul className={s.navigation__list}>
              {Object.keys(data).map((item) => (
                <li key={item}>
                  <Link
                    href={`/catalog/${item}`}
                    className={s.navigation__link}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={s.navigation__items}>
              <Link
                href="/wishlist"
                className={classNames(s.header__items_container__item)}
              >
                <AiOutlineHeart className={s.header__icon_menu} />
              </Link>
              <Link
                href="/cart"
                className={classNames(s.header__items_container__item)}
              >
                <PiBagSimple className={s.header__icon_menu} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className={s.navigation_mobile}>
          <ul className={s.navigation_mobile__items}>
            {Object.keys(data).map((item) => (
              <li key={item}>
                <Link
                  href={`/catalog/${item}`}
                  className={s.navigation_mobile__link}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
