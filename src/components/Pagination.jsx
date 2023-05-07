import React from 'react';
import Button from "./UI/buttons/Button";

const Pagination = ({pagesArray, changePage, currentPage}) => {
    return (
        <div className="flex items-center justify-center mt-14 mb-10 space-x-4">
            {pagesArray.map(p =>
                <Button className={p === currentPage ? "border-2 border-slate-500" : ""} key={p} onClick={() => changePage(p)} disabled={p === currentPage}>{p}</Button>
            )}
        </div>
    );
};

export default Pagination;