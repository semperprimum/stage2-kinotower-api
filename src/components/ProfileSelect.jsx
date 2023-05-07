import React from 'react';

const ProfileSelect = ({active, setActiveProfile}) => {
    return (
        <div className="flex">
            <div onClick={() => setActiveProfile("profile")} className={active === "profile" ? "cursor-pointer uppercase bg-slate-300 w-full py-2 text-center border-b-2 border-black" : "cursor-pointer uppercase bg-slate-300 w-full py-2 text-center"}>profile</div>
            <div onClick={() => setActiveProfile("reviews")} className={active === "reviews" ? "cursor-pointer uppercase bg-slate-300 w-full py-2 text-center border-b-2 border-black" : "cursor-pointer uppercase bg-slate-300 w-full py-2 text-center"}>reviews</div>
            <div onClick={() => setActiveProfile("scores")} className={active === "scores" ? "cursor-pointer uppercase bg-slate-300 w-full py-2 text-center border-b-2 border-black" : "cursor-pointer uppercase bg-slate-300 w-full py-2 text-center"}>scores</div>
        </div>
    );
};

export default ProfileSelect;