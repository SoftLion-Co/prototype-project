import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";

const Catalog = () => {
  const links = [{ title: "Catalog", href: "" }];
  return (
    <div>
      <BreadcrumbsComponent links={links} />
      <h1>Catalog</h1>
    </div>
  );
};

export default Catalog;
