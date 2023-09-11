import { useState, useEffect } from "react";

function useOrderlist() {
  const [orders, setorders] = useState<string[]>(
    JSON.parse(localStorage.getItem("orders") || "[]")
  );

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setorders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return { orders, setorders };
}

export default useOrderlist;
