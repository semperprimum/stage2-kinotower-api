import React from 'react';
import {Link} from "react-router-dom";
import Button from "./UI/buttons/Button";

const ProfileEdit = ({userData}) => {
    return (
        <div className="p-5 leading-loose">
            <h1>Email: {userData.email}</h1>
            <h1>Birthday: {userData.birthday}</h1>
            <h1>Gender: {userData.gender.name}</h1>
            <div className="space-x-4 mt-5">
                <Link to="/profile/edit"><Button>EDIT</Button></Link>
                <Button>DELETE ACCOUNT</Button>
            </div>
        </div>
    );
};

export default ProfileEdit;