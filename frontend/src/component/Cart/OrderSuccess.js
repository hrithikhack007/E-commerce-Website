import React, { useEffect } from "react";
import "./OrderSuccess.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_ORDER_RESET } from "../../constants/orderConstant";
import { CLEAR_CART_INFO } from "../../constants/cartConstant";
import { useAlert } from "react-alert";

// localStorage.removeItem(keyname)

const OrderSuccess = () => {
  const alert = useAlert();
  const { cartItems } = useSelector((state) => state.cart);
  const { success } = useSelector((state) => state.newOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    // alert.success(success);
    if (success) {
      dispatch({ type: CREATE_ORDER_RESET });
      dispatch({ type: CLEAR_CART_INFO });
      localStorage.removeItem("cartItems");
    }
  }, [success, cartItems, dispatch, alert]);
  return (
    <>
      <div className="orderSuccess">
        <CheckCircleIcon />
        <Typography>Your Order has been placed</Typography>
        <Link to="/orders">View Orders</Link>
      </div>
    </>
  );
};

export default OrderSuccess;
