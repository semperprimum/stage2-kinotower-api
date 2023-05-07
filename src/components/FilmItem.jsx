import React from 'react';
import { ImCross } from 'react-icons/im'
import Button from "./UI/buttons/Button";
import {Link} from "react-router-dom";

const FilmItem = ({movie}) => {
    return (
        <div className="border border-slate-700 rounded">
            <div className="flex justify-center items-center h-36 cover bg-slate-200 rounded-t">
                <ImCross className="text-5xl text-slate-300"/>
            </div>
            <main className="p-3">
                <h1 className="text-xl font-semibold">{movie.name}</h1>
                <h4 className="text-slate-500">{movie.ratingAvg}</h4>
                <h4 className="text-slate-500 mb-4">{movie.duration} min.</h4>
                <ul className="text-slate-500 mb-2 flex space-x-3">
                    {movie.categories.map(category =>
                        <li key={category.id}>{category.name}</li>
                    )}
                </ul>
                <Link to={`/movie/${movie.id}`}><Button>VIEW</Button></Link>
            </main>
        </div>
    );
};

export default FilmItem;