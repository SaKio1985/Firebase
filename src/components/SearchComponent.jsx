import React, { useState } from "react";
import { getSingleProduct } from "../../firebase";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState(null);

  const handleInputChange = (event) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getSingleProduct(searchTerm).then((product) => setProduct(product));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Buscar juegos..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
      {product && (
        <article>
          Detalles
          <p className="product-name">{product.nombre}</p>
        </article>
      )}
    </div>
  );
}

export default SearchComponent;
