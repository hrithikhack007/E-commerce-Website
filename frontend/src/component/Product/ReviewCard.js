import React from "react";
import ProfilePng from "../../images/Profile.png";

import { Rating } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/Delete";

const ReviewCard = ({
  review,
  user,
  isAuthenticated,
  productId,
  deleteReviewHandler,
}) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <div className="reviewCard">
        {isAuthenticated && review.user === user._id && (
          <DeleteIcon
            className="deleteUserReview"
            onClick={() => deleteReviewHandler(review._id, productId)}
          />
        )}
        <img src={review.userAvatar || "any"} alt="User" />
        <p>{review.name}</p>
        <Rating {...options} />
        <span className="reviewCardComment">{review.comment}</span>
      </div>
    </>
  );
};

export default ReviewCard;
