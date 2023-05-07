import React from 'react';
import Button from "./UI/buttons/Button";

const ScoreItem = ({rating, onDeleteScore}) => {
    const deleteScore = (id) => {
        if (window.confirm("Are you sure you want to delete this score?")) {
            onDeleteScore(id);
        }
    }

    return (
        <div className="mx-4 pb-3 text-lg border-b border-slate-300">
            <div className="flex justify-between mt-2">
                <h1>{rating.film.name}</h1>
                <div className="flex space-x-4">
                    <h1>{rating.created_at.slice(0,10)}</h1>
                </div>
            </div>
            <div className="flex justify-between mt-2">
                <h1>{rating.score}</h1>
                <Button onClick={() => deleteScore(rating.id)}>REMOVE</Button>
            </div>
        </div>
    );
};

export default ScoreItem;