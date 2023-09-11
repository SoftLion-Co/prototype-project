"use client";
import React, { useState } from "react";
import s from "./OrderSection.module.scss";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import OrderComponent from "@/components/OrderComponent";

interface OrderItem {
  id: string;
}

interface Order {
  id: string;
  totalPrice: number;
  item: OrderItem[];
}

const OrderSection: React.FC = () => {
  const [orders, setOrders] = useState([
    {
      id: "1",
      totalPrice: 4000,
      item: [{ id: "1" }, { id: "1" }, { id: "2" }, { id: "5" }, { id: "6" }],
    },
    {
      id: "2",
      totalPrice: 3500,
      item: [{ id: "5" }, { id: "6" }],
    },
  ]);

  const links = [{ title: "Order", href: "/order" }];

  const handleCancelOrder = (orderId: string) => {
    const updateOrder = orders.filter((order) => order.id !== orderId);
    setOrders(updateOrder);
  };

  return (
    <section>
      <BreadcrumbsComponent links={links} />
      <div className={s.container}>
        {orders.length !== 0 ? (
          orders.map((item) => (
            <OrderComponent
              key={item.id}
              id={`${item.id}`}
              totalPrice={item.totalPrice}
              cardItems={item.item}
              onCancelOrder={handleCancelOrder}
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
