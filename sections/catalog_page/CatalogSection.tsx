import { FC } from "react";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import s from "./CatalogSection.module.scss";
import categories from "../../data/categories.json";
import Image from "next/image";
import Link from "next/link";

export const CatalogSection: FC = () => {
  const links = [{ title: "Catalog", href: "" }];

  return (
    <div className={s.catalog_section__bg}>
      <section className={s.container}>
        <div className={s.catalog_section__breadcrumbs_container}>
          <BreadcrumbsComponent links={links} />
        </div>

        <div className={s.catalog_section}>
          <h1 className={s.catalog_section__title}>Catalog specialized</h1>

          <ul className={s.catalog_section__list}>
            {Object.entries(categories).map(([key, value]) => {
              return (
                <Link className={s.catalog_section__link} href={`/catalog/${key}`}>
                  <li key={key} className={s.catalog_section__item}>
                    <Image
                      className={s.catalog_section__item__image}
                      src={value}
                      alt="bike"
                      width={200}
                      height={100}
                    />

                    <h4 className={s.catalog_section__item__title}>{key}</h4>
                    <p className={s.catalog_section__item__text}>55 in stock</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
