import React from 'react';
import ScoreItem from "./ScoreItem";

const ScoreList = ({ratings, onDeleteScore}) => {
    return (
        <div className="mt-10">
            {
                ratings.length !== 0
                    ? ratings.map(rating =>
                        <ScoreItem key={rating.id} rating={rating} onDeleteScore={onDeleteScore}/>
                    )
                    : <p className="text-center text-xl">No scores yet.</p>
            }
        </div>
    );
};

export default ScoreList;