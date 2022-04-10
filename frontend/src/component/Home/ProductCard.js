import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ProductDetails from "../Product/ProductDetails";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 1000 ? 15 : 25,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      {product.images[0] ? (
        <img src={product.images[0].url} alt={product.name} />
      ) : (
        <div className="noImage">No Image Available</div>
      )}
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span>({`${product.numOfReviews} Reviews`})</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
