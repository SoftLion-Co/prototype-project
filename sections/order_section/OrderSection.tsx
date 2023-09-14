"use client";
import React, { useEffect, useState } from "react";
import s from "./OrderSection.module.scss";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import OrderComponent from "@/components/OrderComponent";
import useOrderList from "@/hooks/useOrderlist";

const OrderSection: React.FC = () => {
  const { orders, setOrders } = useOrderList();

  useEffect(() => setOrders([{ "1": 5, "3": 3, "4": 3 }, { "1": 1 }]), []);

  const links = [{ title: "Order", href: "/order" }];

  const handleCancelOrder = (orderId: string) => {
    const updatedOrders = orders.filter(
      (order, index) => index.toString() !== orderId
    );
    setOrders(updatedOrders);
  };

  const generateOrderNumber = () => {
    const number = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    return `#${number}`;
  };

  return (
    <section>
      <BreadcrumbsComponent links={links} />
      <div className={s.container}>
        {orders.length !== 0 ? (
          orders.map((order, index) => (
            <OrderComponent
              key={index.toString()}
              id={index.toString()}
              orderNumber={`${generateOrderNumber()}`}
              idCount={Object.keys(order).length}
              onCancelOrder={handleCancelOrder}
              cardItems={[order]}
            />
          ))
        ) : (
          <h2 className={s.order_none}>There are no orders.</h2>
        )}
      </div>
    </section>
  );
};

export default OrderSection;
