import React from 'react';
import FilmItem from "./FilmItem";

const FilmList = ({movies}) => {
    return (
        <div className="grid grid-cols-3 gap-10 mt-14 max-w-4xl mx-auto">

            {movies.map(movie => {
                    return <FilmItem key={movie.id} movie={movie}/>
                }
            )}

        </div>
    );
};

export default FilmList;