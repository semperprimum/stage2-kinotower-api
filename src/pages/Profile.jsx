import React, {useEffect, useState} from 'react';
import Header from "../components/UI/Header";
import ProfileSelect from "../components/ProfileSelect";
import UserService from "../API/UserService";
import ProfileEdit from "../components/ProfileEdit";
import ReviewList from "../components/ReviewList";
import ScoreList from "../components/ScoreList";

const Profile = () => {
    const [userData, setUserData] = useState({gender: []});
    const [activeProfilePage, setActiveProfilePage] = useState("profile")
    const [userReviews, setUserReviews] = useState([]);
    const [userRatings, setUserRatings] = useState([]);

    const fetchUser = async () => {
        const response = await UserService.getUserData();
        setUserData(response);
    }

    const fetchUserReviews = async () => {
        const response = await UserService.getUserReviews();
        setUserReviews(response.reviews);
    }

    const fetchUserRatings = async () => {
        const response = await UserService.getUserScores();
        setUserRatings(response.ratings);
    }

    useEffect(() => {
        fetchUser()
        fetchUserReviews();
        fetchUserRatings();
    }, [])

    const deleteReview = async (id) => {
        const response = await UserService.removeUserReviewById(id);
        if (response.status === "success") {
            setUserReviews(userReviews.filter(r => r.id !== id));
        }
    }

    const deleteScore = async (id) => {
        const response = await UserService.removeUserScoreById(id);
        if (response.status === "success") {
            setUserRatings(userRatings.filter(r => r.id !== id));
        }
    }

    return (
        <div>
            <Header/>
            <div className="overflow-y-auto max-w-4xl mx-auto mt-10">
                <div className="text-xl mb-10">
                    <h1>{userData.fio}</h1>
                    <h1>Scores: {userData.ratingCount}</h1>
                    <h1>Reviews: {userData.reviewCount}</h1>
                </div>
                <ProfileSelect active={activeProfilePage} setActiveProfile={setActiveProfilePage}/>
                {activeProfilePage === "profile" ?
                    <ProfileEdit userData={userData}/>
                    : activeProfilePage === "reviews"
                        ? <ReviewList reviews={userReviews} onDeleteReview={deleteReview}/>
                        : <ScoreList ratings={userRatings} onDeleteScore={deleteScore}/>
                }
            </div>
        </div>
    );
};

export default Profile;