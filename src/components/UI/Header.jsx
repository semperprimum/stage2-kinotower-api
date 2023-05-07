import React from 'react';
import {MdMovieFilter} from "react-icons/md"
import {Link, useNavigate} from "react-router-dom";
import AuthService from "../../API/AuthService";

const Header = () => {

    const navigate = useNavigate();
    const handleLogout = async () => {
        if (window.confirm("Are you sure?")) {
        await AuthService.logout();
        return navigate("/")
        }
    }

    return (
        <div className="h-20 bg-slate-300 w-full">
            <div className="flex justify-between p-4 items-center">
                <Link to="/"><MdMovieFilter className="text-5xl"/></Link>
                <div className="flex space-x-3 ">
                    {localStorage.getItem("user") !== null ? (
                        <>
                            <Link to="/profile">user</Link>
                            <button onClick={handleLogout}>logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/registration">signUp</Link>
                            <Link to="/login">signIn</Link>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};


export default Header;