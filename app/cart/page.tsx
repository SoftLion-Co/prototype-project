import Breadcrumbs from "@/components/BreadcrumbsComponent";
import CartMain from "@/components/cartpage/CartMainComponent";

const Cart = () => {
  const links = [{ title: "Basket", href: "" }];

  return (
    <div>
      <Breadcrumbs links={links} />
      <CartMain />
    </div>
  );
};

export default Cart;
