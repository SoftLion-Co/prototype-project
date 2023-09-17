import React from "react";
import s from "./FooterComponent.module.scss";
import Logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiFacebook } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";


const FooterComponent = () => {
  const routes: { path: string; label: string }[] = [
    { path: "/catalog", label: "Catalog" },
    { path: "/wishlist", label: "Wishlist" },
    { path: "/cart", label: "Cart" },
    { path: "/orders", label: "Orders"},
    { path: "/about-us", label: "About Us" },
  ];

  const social: { url: string; icon: JSX.Element }[] = [
    {
      url: "#",
      icon: <FiLinkedin className={s.footer__icon} />,
    },
    {
      url: "#",
      icon: <PiTelegramLogoDuotone className={s.footer__icon} />,
    },
    {
      url: "#",
      icon: <FiFacebook className={s.footer__icon} />,
    },
    {
      url: "#",
      icon: <AiOutlineInstagram className={s.footer__icon} />,
    },
  ];

  return (
    <footer className={s.footer_container}>
      <div className={s.container}>
        <div className={s.footer}>
          <div className={s.footer__copyright}>
            <Link href="/">
              <Image src={Logo} alt="" className={s.footer__logo} />
            </Link>
            <p className={s.footer__copyright__title}>
              ©2023 All rights reserved.
            </p>
          </div>
          <div className={s.footer__navigation}>
            {routes.map((route, index) => (
              <Link key={index} href={route.path} className={s.footer__link}>
                {route.label}
              </Link>
            ))}
            <div className={s.footer__social}>
              {/* <p className={s.footer__link}>Contact Us</p> */}
              <div className={s.footer__social__container}>
                {social.map((link, index) => (
                    <Link className={s.footer__social__link} key={index} href={link.url}>
                      {link.icon}
                    </Link>
                  
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
