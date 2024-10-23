import { getInventario } from "../../firebase";
import { useEffect, useState } from "react";
import "./ProductsContainer.css";

const ProductsContainer = () => {
  const [inventario, setInventario] = useState([]);

  useEffect(() => {
    getInventario().then((data) => setInventario(data));
  }, []);

  return (
    <div className="products-wrapper">
      <div className="products-grid">
        {inventario.map((prod) => (
          <div key={prod.id} className="product-card">
            <div className="product-image-container">
              <img
                src={prod.imagen || "/api/placeholder/400/320"}
                alt={prod.nombre}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{prod.nombre}</h3>
              <p className="product-price">${prod.precio}</p>
              <p className="product-color">
                Color: <span>{prod.color}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
