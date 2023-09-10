import Breadcrumbs from "@/components/BreadcrumbsComponent";
import CartMain from "@/components/cartpage/CartMainComponent";
import DeliverySection from "@/sections/delivery_page/DeliverySection";

const Cart = () => {
  const links = [{ title: "Cart", href: "" }];

  return (
    <div>
      <Breadcrumbs links={links} />
      <CartMain />
      <DeliverySection />
    </div>
  );
};

export default Cart;
