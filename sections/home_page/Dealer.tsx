import { FC } from "react";
import classNames from "classnames";
import s from "./Dealer.module.scss";
import Image from "next/image";
import newspaper from "@/images/newspaper.jpg";
import stumpjumper from "@/images/stumpjumper.jpg";
import { FindLocation } from "@/components/FindLocation";

export const Dealer: FC = () => {
  return (
    <section className={s.container}>
      <div className={s.dealer_section}>
        <div className={s.dealer_section__first_container}>
          <div>
            <h2 className={s.dealer_section__title}>year 1974</h2>
            <p>
              The fact that we are riders has always been the driving force behind our decisions.
              Since 1974. Realizing that it is not possible to find quality tires, we have directed
              our efforts to create the best rubber on the market. When people needed to ride
              cross-country on a cruiser, we created the first mountain bike. When highway lovers
              needed to go faster, we started working with carbon fiber and built our own wind
              tunnel, and after addressing the problem of Attention Deficit Disorder, we founded the
              Specialized Foundation.
            </p>
          </div>

          <Image
            className={s.dealer_section__newspaperImg}
            src={newspaper}
            width={270}
            height={366}
            alt="Newspaper"
          />
        </div>

        <div className={s.dealer_section__second_container}>
          <div>
            <h2 className={s.dealer_section__title}>because mountain bikes need trails</h2>
            <p>
              As soon as the first mountain bikes appeared, the question arose of where to ride
              them. Already by 1987, the cycling community for the first time felt the pressure of
              municipal land. At the same time, we took part in a number of advisory councils, as a
              result of which, within 6 months, a decision was made to establish the International
              Mountain Bike Association (IMBA). We became MTB evangelists who helped riders gain
              access to the trails. It's simple: without trail protectors, there's nothing left to
              protect
            </p>
          </div>

          <Image
            className={s.dealer_section__stumpjumperImg}
            src={stumpjumper}
            width={270}
            height={366}
            alt="Stumpjumper"
          />
        </div>

        <FindLocation />
      </div>
    </section>
  );
};
