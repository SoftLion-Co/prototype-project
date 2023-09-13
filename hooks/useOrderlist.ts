import { useState, useEffect } from "react";

function useOrderlist() {
  const [orders, setOrders] = useState<{ [key: string]: number }[]>(
    JSON.parse(localStorage.getItem("orders") || "[]")
  );

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return { orders, setOrders };
}

export default useOrderlist;
