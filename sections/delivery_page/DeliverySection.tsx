import React from "react";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import s from "./DeliverySection.module.scss";
import classNames from "classnames";
import Link from "next/link";

const DeliverySection = () => {
  const links = [{ title: "Wishlist", href: "" }];
  return (
    <section>
      <BreadcrumbsComponent links={links} />
      <div className={s.container}>
        <div className={s.delivery_container}>
          <div className={s.delivery_container__box_container}>
            <div className={classNames(s.delivery_container__box)}>
              <div className={s.delivery_container__box__title}>
                What is important to know?
              </div>
              <span className={s.delivery_container__white}>
                At Specialized, our guiding principle is “The Rider is the
                Boss.” Our main goal is to provide riders with the most
                innovative cycling products in the world and be responsible for
                their quality. That's why we're excited to introduce one of the
                most generous and rider-friendly warranty policies in the
                industry. Plus, it's pretty simple:
              </span>
            </div>
            <div
              className={classNames(
                s.delivery_container__box,
                s.delivery_container__box__image_second
              )}
            ></div>
          </div>
          <div className={s.delivery_container__box_second}>
            <div className={s.delivery_container__box_second__title}>
              <div>Fast.</div>
              <div className={s.delivery_container__box_second__red}>
                Reliably.
              </div>
              <div>Professionally.</div>
            </div>
            <span>
              A full description of our policy with all terms and conditions can
              be found below. Please read all points, the policy applies to all
              Specialized products sold after July 1, 2018. Compare for yourself
              - it is one of the best on the market
            </span>
          </div>
          <div className={s.delivery_container__box_three}>
            <div className={s.delivery_container__box_three__container}>
              <div className={s.delivery_container__box_second__title}>
                Location doesn't matter.
              </div>
              <span> 
                Only you add only your bike.
              </span>
            </div>
            <div
              className={classNames(
                s.delivery_container__box_three__background_container,
                s.delivery_container__box_three__background
              )}
            ></div>
          </div>
          <Link
            href="/catalog"
            className={classNames(
              s.delivery_container__btn,
              s.delivery_container__btn__title
            )}
          >
            Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
