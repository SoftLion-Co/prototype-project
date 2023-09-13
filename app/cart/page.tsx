import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import CartMain from "@/components/cartpage/CartMainComponent";

const Cart = () => {
  const links = [{ title: "Cart", href: "" }];

  return (
    <div>
      <BreadcrumbsComponent links={links} />
      <CartMain />
    </div>
  );
};

export default Cart;
