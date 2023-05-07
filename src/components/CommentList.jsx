import React, {useEffect, useState} from "react";
import CommentItem from "./CommentItem";
import MovieService from "../API/MovieService";
import UserService from "../API/UserService";

const CommentList = ({id}) => {
    const [reviews, setReviews] = useState(null);
    const [message, setMessage] = useState("");

    const fetchReviews = async () => {
        const response = await MovieService.getReviewsByMovieId(id);
        setReviews(response || []);
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const addReview = async () => {
        await UserService.postUserReview(id, message);
        setMessage("");
        await fetchReviews();
    };

    const handleKeyDown = async (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            await addReview();
        }
    };

    return (
        <div>
            <div>
                <h1>Add review</h1>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="focus:ring-3 appearance-none border border-slate-300 w-full p-3 rounded-sm mb-4"
                    rows="3"
                    placeholder="Your message"
                ></textarea>
            </div>

            <h1 className="mb-2 text-xl">Reviews</h1>
            {reviews !== null ? (
                reviews.length > 0 ? (
                    reviews.map((review) => <CommentItem key={review.id} review={review}/>)
                ) : (
                    <p>No reviews found.</p>
                )
            ) : (
                <p>Loading reviews...</p>
            )}
        </div>
    );
};

export default CommentList;
