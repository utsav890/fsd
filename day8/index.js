const root = ReactDOM.createRoot(document.getElementById("root"));

const getProductsData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

const HeaderComponent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ecommerce website</h1>
    </div>
  );
};

const ProductComponent = ({ products }) => {
  return (
    <div className="prod-container">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
        </div>
      ))}
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div>
      <h1>Copyright all rights reserved.</h1>
    </div>
  );
};

const renderedFun = async () => {
  let products = await getProductsData();

  const reactElement = (
    <>
      <HeaderComponent />
      <ProductComponent products={products} />
      <FooterComponent />
    </>
  );

  root.render(reactElement);
};

renderedFun();
