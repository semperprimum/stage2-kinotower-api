import React, {useEffect, useState} from 'react';
import Header from "../components/UI/Header";
import {AiFillStar} from "react-icons/ai"
import {BsFillPlayCircleFill} from "react-icons/bs"
import CommentList from "../components/CommentList";
import {useParams} from "react-router-dom";
import MovieService from "../API/MovieService";
import UserService from "../API/UserService";

const Movie = () => {
    const [movie, setMovie] = useState({country: [], categories: [], createdAt: ""});
    const params = useParams();
    const fetchMovie = async () => {
        const response = await MovieService.getMovieById(params.id);
        setMovie(response.data);
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    const setRating = async (score) => {
        if (!localStorage.getItem('user')) {
            alert('Please log in to rate the movie.');
            return;
        }
        if (window.confirm(`Are you sure you want to rate the movie ${movie.name} ${score} stars?`)) {
            try {
                await UserService.setUserRating(params.id, score);
                await fetchMovie();
            } catch (error) {
                const errorMessage = error.response?.data?.message;
                if (errorMessage && errorMessage.toLowerCase().includes('score exists')) {
                    alert('You have already rated this movie.');
                } else {
                    console.error(error);
                }
            }
        }

    };


    return (
        <div>
            <Header/>

            <div className="mt-10 max-w-4xl mx-auto overflow-y-auto">
                <div className="flex justify-between space-x-8 mb-8">
                    <h1 className="text-xl">{movie.ratingAvg}</h1>
                    <div className="flex justify-center items-center bg-slate-100 border border-black w-full h-[20rem]">
                        <BsFillPlayCircleFill className="text-3xl"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <AiFillStar onClick={() => setRating(5)} className="text-yellow-500 text-5xl cursor-pointer"/>
                        <AiFillStar onClick={() => setRating(4)} className="text-yellow-500 text-4xl cursor-pointer"/>
                        <AiFillStar onClick={() => setRating(3)} className="text-yellow-500 text-3xl cursor-pointer"/>
                        <AiFillStar onClick={() => setRating(2)} className="text-yellow-500 text-2xl cursor-pointer"/>
                        <AiFillStar onClick={() => setRating(1)} className="text-yellow-500 text-xl cursor-pointer"/>
                    </div>
                </div>

                <h1 className="text-2xl mb-4">{movie.name}</h1>
                <div className="flex justify-between mb-10">
                    <div>
                        <ul className="flex space-x-4">
                            <li>{movie.duration} min.</li>
                            <li>{movie.country.name}</li>
                            <li>{movie.year}</li>
                            <li>{movie.age}+</li>
                            <li>{movie.createdAt.slice(0, 10)}</li>
                            <li>
                                {movie.categories.map(category =>
                                    <p key={category.id}>{category.name}</p>
                                )}
                            </li>
                        </ul>
                    </div>
                    <a href={movie.linkKinopoisk}
                       className={movie.linkKinopoisk !== null ? "text-blue-400 font-semibold hover:underline cursor-pointer" : ""}>Link
                        Kinopoisk</a>
                </div>


                <CommentList id={params.id}/>
            </div>
        </div>
    );
};

export default Movie;