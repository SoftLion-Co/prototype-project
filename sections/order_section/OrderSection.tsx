"use client";
import React, { useEffect, useState } from "react";
import s from "./OrderSection.module.scss";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import OrderComponent from "@/components/OrderComponent";
import useOrderList from "@/hooks/useOrderlist";

const OrderSection: React.FC = () => {
  const { orders, setOrders } = useOrderList();

  localStorage.removeItem("orders");

  useEffect(
    () =>
      setOrders([
        { id: 1, num: 5, id2: 3, num2: 8, id3: 3, num3: 8 },
        { id: 5, num: 1 },
      ]),
    []
  );

  const links = [{ title: "Order", href: "/order" }];

  const handleCancelOrder = (orderId: string) => {
    const updateOrder = orders.filter((order, index) => `${index}` !== orderId);
    setOrders(updateOrder);
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
              idCount={
                Object.keys(order).filter((key: any) => key.startsWith("id"))
                  .length
              }
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
