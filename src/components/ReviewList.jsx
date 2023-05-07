import React from 'react';
import ReviewItem from "./ReviewItem";

const ReviewList = ({reviews, onDeleteReview}) => {
    return (
        <div className="mt-10">
            {
                reviews.length !== 0
                    ? reviews.map(review =>
                        <ReviewItem key={review.id} review={review} onDeleteReview={onDeleteReview}/>
                    )
                    : <p className="text-center text-xl">No reviews yet.</p>
            }
        </div>

    );
};

export default ReviewList;