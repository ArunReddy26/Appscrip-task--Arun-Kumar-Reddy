import React, { useEffect, useState } from "react";
import "./Productlist.css";
import ProductCard from "../Productcard/Productcard";
import Filtersection from "../LeftFilter/Filtersection";

function Productlist() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("recommended");
  const [showFilter, setShowFilter] = useState(true);

  async function productlist() {
    const productapi = await fetch(
      "https://fakestoreapi.com/products?limit=20"
    );
    const productdata = await productapi.json();
    setProducts(productdata);
    setFilteredProducts(productdata);
  }

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    let sortedProducts = [...products];

    if (selectedFilter === "men") {
      sortedProducts = products.filter(
        (product) => product.category === "men's clothing"
      );
    } else if (selectedFilter === "jewelery") {
      sortedProducts = products.filter(
        (product) => product.category === "jewelery"
      );
    } else if (selectedFilter === "electronics") {
      sortedProducts = products.filter(
        (product) => product.category === "electronics"
      );
    } else if (selectedFilter === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedFilter === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts = [...products];
    }

    setFilteredProducts(sortedProducts);
  };

  const toggleFilterVisibility = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    productlist();
  }, []);

  return (
    <div className="product-list-container">
      <div className="filtersectioncontiner">
        <Filtersection
          showFilter={showFilter}
          toggleFilterVisibility={toggleFilterVisibility}
        />
      </div>

      <div
        className={`product-section ${
          showFilter ? "with-filter" : "no-filter"
        }`}
      >
        <div className="filter-bar">
          <label htmlFor="filter">Filter By: </label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="recommended">Recommended</option>
            <option value="men">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
        </div>

        {!showFilter && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleFilterVisibility();
            }}
            className="toggle-filter"
          >
            Show Filter
          </a>
        )}
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productlist;
