import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import s from "./CategorySection.module.scss";
import cards from "../../data/cards-bike.json";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { CgClose } from "react-icons/cg";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import CardBikeComponent from "@/components/CardBikeComponent";
import { Pagination } from "@mantine/core";

export const CategorySection: FC = () => {
  const category = usePathname().split("/").reverse()[0];

  const [showFilters, setShowFilters] = useState(window.innerWidth > 1599 ? true : false);
  const [showCollectionFilter, setShowCollectionFilter] = useState(false);
  const [showSizeFilter, setShowSizeFilter] = useState(false);
  const [showColorFilter, setShowColorFilter] = useState(false);

  const [collectionFilter, setCollectionFilter] = useState<null | string>(null);
  const [sizeFilter, setSizeFilter] = useState<null | number>(null);
  const [colorFilter, setColorFilter] = useState<null | string>(null);

  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortDropdown, setSortDropdown] = useState("lower");

  const [activePage, setActivePage] = useState(1);
  const pages = useRef({ totalPages: 0 });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activePage]);

  const getCollections = () => {
    const collections: Set<string> = new Set();
    for (const card of Object.values(cards)) {
      collections.add(card.series[0]);
    }
    const collectionsArr: string[] = Array.from(collections).filter(el => el !== "");

    return collectionsArr;
  };

  const getSizes = () => {
    const sizes: Set<number> = new Set();
    for (const card of Object.values(cards)) {
      card.sizes.map(size => {
        sizes.add(size);
      });
    }
    const sizeArr: number[] = Array.from(sizes);

    return sizeArr;
  };

  const getColors = () => {
    const colors: Set<string> = new Set();
    for (const card of Object.values(cards)) {
      for (const color in card.colors) {
        colors.add(color);
      }
    }
    const colorsArr: string[] = Array.from(colors).filter(el => el !== "none");

    return colorsArr;
  };

  const handleShowDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const handleClick = () => {
    setShowSortDropdown(false);
  };

  useEffect(() => {
    if (showSortDropdown) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showSortDropdown]);

  const handleSortDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "lower") {
      setSortDropdown("lower");
    } else {
      setSortDropdown("higher");
    }

    setShowSortDropdown(false);
  };

  const handleWindowWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1599 && showFilters !== true) {
      setShowFilters(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleShowFilterBtn = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "collection") setShowCollectionFilter(!showCollectionFilter);
    if (e.currentTarget.id === "size") setShowSizeFilter(!showSizeFilter);
    if (e.currentTarget.id === "color") setShowColorFilter(!showColorFilter);
  };

  const handleCancelFilter = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "collection") setCollectionFilter(null);
    if (e.currentTarget.id === "size") setSizeFilter(null);
    if (e.currentTarget.id === "color") setColorFilter(null);
    setActivePage(1);
  };

  const handleResetFilters = () => {
    setCollectionFilter(null);
    setSizeFilter(null);
    setColorFilter(null);
    setActivePage(1);
  };

  const handleCollection = (e: MouseEvent<HTMLButtonElement>) => {
    setActivePage(1);

    if (e.currentTarget.id === collectionFilter) {
      setCollectionFilter(null);
      return;
    }

    setCollectionFilter(e.currentTarget.id);
  };

  const handleSize = (e: MouseEvent<HTMLButtonElement>) => {
    setActivePage(1);

    if (Number(e.currentTarget.id) === sizeFilter) {
      setSizeFilter(null);
      return;
    }

    setSizeFilter(Number(e.currentTarget.id));
  };

  const handleColor = (e: MouseEvent<HTMLButtonElement>) => {
    setActivePage(1);

    if (e.currentTarget.id === colorFilter) {
      setColorFilter(null);
      return;
    }

    setColorFilter(e.currentTarget.id);
  };

  const sortAndFilterData = (
    cards: any,
    sortByPriceDescending: string,
    filterSize: number | null,
    filterColor: string | null,
    filterCollection: string | null
  ) => {
    let filteredData = Object.keys(cards).filter(id => Number(id) < 101) as string[];

    filteredData = filteredData.filter(id => cards[id].category.includes(category));

    if (sortByPriceDescending === "lower") {
      filteredData = filteredData.sort((a, b) => cards[a].price - cards[b].price);
    } else {
      filteredData = filteredData.sort((a, b) => cards[b].price - cards[a].price);
    }

    if (filterSize) {
      filteredData = filteredData.filter(id => cards[id].sizes.includes(filterSize));
    }

    if (filterColor) {
      filteredData = filteredData.filter(id => cards[id].colors[filterColor]);
    }

    if (filterCollection) {
      filteredData = filteredData.filter(id => cards[id].series[0] === filterCollection);
    }

    pages.current.totalPages = Math.ceil(filteredData.length / 6);

    filteredData = filteredData.slice((activePage - 1) * 6, activePage * 6);

    return filteredData;
  };

  return (
    <section className={s.container}>
      <div className={s.category_section}>
        <h2 className={s.category_section__title}>{category}</h2>

        <div className={s.category_section__wrap}>
          <button onClick={handleShowFilters} className={s.category_section__show_filters_btn}>
            {showFilters ? "Hide filters" : "Show filters"}
          </button>

          {showFilters && (
            <aside className={s.category_section__aside}>
              {(colorFilter || sizeFilter || collectionFilter) && (
                <div className={s.category_section__filters}>
                  <h4>Filters</h4>

                  {collectionFilter && (
                    <div className={s.category_section__filters__row}>
                      <div className={s.category_section__filters__row__label}>Collection:</div>
                      <div className={s.category_section__filters__row__value}>
                        {collectionFilter}
                      </div>
                      <div className={s.category_section__filters__row__cancel}>
                        <button onClick={handleCancelFilter} id="collection">
                          <CgClose />
                        </button>
                      </div>
                    </div>
                  )}

                  {sizeFilter && (
                    <div className={s.category_section__filters__row}>
                      <div className={s.category_section__filters__row__label}>Size:</div>
                      <div className={s.category_section__filters__row__value}>{sizeFilter}</div>
                      <div className={s.category_section__filters__row__cancel}>
                        <button onClick={handleCancelFilter} id="size">
                          <CgClose />
                        </button>
                      </div>
                    </div>
                  )}

                  {colorFilter && (
                    <div className={s.category_section__filters__row}>
                      <div className={s.category_section__filters__row__label}>Color:</div>
                      <div className={s.category_section__filters__row__value}>{colorFilter}</div>
                      <div className={s.category_section__filters__row__cancel}>
                        <button onClick={handleCancelFilter} id="color">
                          <CgClose />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className={s.category_section__filters__info}>
                    <div className={s.category_section__filters__info__label}>Results: {}</div>
                    <div className={s.category_section__filters__info__value}>Reset</div>
                    <div className={s.category_section__filters__row__cancel}>
                      <button onClick={handleResetFilters}>
                        <CgClose />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className={s.category_section__filter_box}>
                <div className={s.category_section__filter_box__head}>
                  <h4>Collection</h4>
                  <button
                    className={showCollectionFilter ? s.active : ""}
                    onClick={handleShowFilterBtn}
                    id="collection"
                  >
                    <div />
                    <div />
                  </button>
                </div>

                {showCollectionFilter && (
                  <ul className={s.category_section__filter_box__list}>
                    {getCollections().map(collection => {
                      return (
                        <li>
                          <button
                            className={collection === collectionFilter ? s.active : ""}
                            id={collection}
                            onClick={handleCollection}
                          >
                            {collection}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <div className={s.category_section__filter_box}>
                <div className={s.category_section__filter_box__head}>
                  <h4>Size</h4>
                  <button
                    className={showSizeFilter ? s.active : ""}
                    onClick={handleShowFilterBtn}
                    id="size"
                  >
                    <div />
                    <div />
                  </button>
                </div>

                {showSizeFilter && (
                  <ul className={s.category_section__filter_box__list}>
                    {getSizes().map(size => {
                      return (
                        <li>
                          <button
                            className={size === sizeFilter ? s.active : ""}
                            id={`${size}`}
                            onClick={handleSize}
                          >
                            {size}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <div className={s.category_section__filter_box}>
                <div className={s.category_section__filter_box__head}>
                  <h4>Color</h4>
                  <button
                    className={showColorFilter ? s.active : ""}
                    onClick={handleShowFilterBtn}
                    id="color"
                  >
                    <div />
                    <div />
                  </button>
                </div>

                {showColorFilter && (
                  <ul className={classNames(s.category_section__filter_box__list, s.color)}>
                    {getColors().map(color => {
                      return (
                        <li>
                          <button
                            className={color === colorFilter ? s.active : ""}
                            id={color}
                            onClick={handleColor}
                            style={{ borderColor: color }}
                          >
                            <div style={{ backgroundColor: color }} />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </aside>
          )}

          <div className={s.category_section__content}>
            <div className={s.category_section__content__sort}>
              <PiArrowsDownUpFill className={s.category_section__content__sort__icon} />
              <p className={s.category_section__content__sort__title}>Sort</p>

              <div className={s.category_section__content__sort__box}>
                <button
                  className={s.category_section__content__sort__control}
                  onClick={handleShowDropdown}
                >
                  <p>
                    {sortDropdown === "lower"
                      ? "From lower to higher prices"
                      : "From higher to lower prices"}
                  </p>
                  <MdKeyboardArrowDown />
                </button>

                {showSortDropdown && (
                  <div className={s.category_section__content__sort__dropdown}>
                    <button
                      className={sortDropdown === "lower" ? s.active : ""}
                      onClick={handleSortDropdown}
                      id="lower"
                    >
                      From lower to higher prices
                    </button>
                    <button
                      className={sortDropdown === "higher" ? s.active : ""}
                      onClick={handleSortDropdown}
                      id="higher"
                    >
                      From higher to lower prices
                    </button>
                  </div>
                )}
              </div>
            </div>
            <ul className={s.category_section__content__cards_list}>
              {sortAndFilterData(
                cards,
                sortDropdown,
                Number(sizeFilter),
                colorFilter,
                collectionFilter
              ).map(el => {
                return (
                  <li>
                    <CardBikeComponent id={el} />
                  </li>
                );
              })}
            </ul>

            {pages.current.totalPages > 1 && (
              <Pagination
                position={"center"}
                value={activePage}
                onChange={setActivePage}
                total={pages.current.totalPages}
                style={{ marginTop: 20 }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
