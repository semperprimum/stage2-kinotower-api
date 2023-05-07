import React from 'react';

const CommentItem = ({review}) => {
    return (
        <div className="mx-4 pb-3 text-lg border-b border-slate-300">
            <div className="flex justify-between ">
                <h1>{review.user.fio}</h1>
                <h1>{review.created_at.slice(0, 10)}</h1>
            </div>
            <h1>{review.message}</h1>
        </div>
    );
};

export default CommentItem;