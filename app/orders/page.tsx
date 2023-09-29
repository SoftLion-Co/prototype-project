import OrderSection from "@/sections/order_section/OrderSection";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";

const Orders = () => {
  const links = [{ title: "Orders", href: "/order" }];

  return (
    <section>
      <BreadcrumbsComponent links={links} />
      <OrderSection />
    </section>
  );
};

export default Orders;
