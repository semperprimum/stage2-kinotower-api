import React from 'react';
import Button from "./UI/buttons/Button";

const ReviewItem = ({review, onDeleteReview}) => {

    const deleteReview = (id) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            onDeleteReview(id);
        }
    }

    return (
        <div className="mx-4 pb-3 text-lg border-b border-slate-300">
            <div className="flex justify-between mt-2">
                <h1>{review.film.name}</h1>
                <div className="flex space-x-4">
                    <h1>
                        {review.is_approved
                            ? "Approved"
                            : "Not Approved"
                        }
                    </h1>
                    <h1>{review.created_at.slice(0, 10)}</h1>
                </div>
            </div>
            <div className="flex justify-between mt-2">
                <h1>{review.message}</h1>
                <Button onClick={() => deleteReview(review.id)}>REMOVE</Button>
            </div>
        </div>
    );
};

export default ReviewItem;