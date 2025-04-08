import React, { useState } from "react";
import "./Productcard.css";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function ProductCard({ product }) {

  const [isClicked, setIsClicked] = useState(false);
  function delefromwhislist() {
    setIsClicked(false);

  }

  function addtowhislist() {

    setIsClicked(true);

  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>

      <p>${product.price}</p>
      <div className="productcardsecond-div">
        {
          isClicked ? <FaHeart onClick={() => delefromwhislist()} className="favourite-wishlist-heart" /> : <CiHeart className="heart" onClick={() => addtowhislist()} />
        }
      </div>
    </div>
  );
}

export default ProductCard;
