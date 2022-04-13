import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import Log from "../../Log";
import { useAlert } from "react-alert";
import ReactStarts from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader.js";
import MetaData from "../layout/MetaData.js";
import { addItemsToCart } from "../../actions/cartAction";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert.success("Items Added To cart");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(match.params.id));
  }, [dispatch, error, alert, match.params.id]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} --ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images && product.images[0] ? (
                  product.images.map((image, i) => (
                    <img
                      className="CarouselImage"
                      src={image.url}
                      key={image.url}
                      alt={`${i} Slide`}
                    />
                  ))
                ) : (
                  <div className="noImage">No Image Available</div>
                )}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>

              <div className="detailsBlock-2">
                <ReactStarts {...options} />
                <span>({product.numOfReviews} Reviews)</span>
              </div>

              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly value={quantity} inputmode="numeric" />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>

                <p>
                  Status:{" "}
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description:<p>{product.description}</p>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </>
  );
};

export default ProductDetails;
