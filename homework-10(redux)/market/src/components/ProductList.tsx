import { useSelector } from "react-redux";
import type { RootState } from "../redux/store.ts";
import "./ProductList.css";

const ProductList = () => {
  const { products } = useSelector((state: RootState) => state.list);
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="Превью" width={120} />
          <div className="product-price">{`${product.price} ₽`}</div>
          <div className="product-brand">
            {product.original && "✓ "}
            {product.brand}
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-count">{`В наличии: ${product.count}`}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
