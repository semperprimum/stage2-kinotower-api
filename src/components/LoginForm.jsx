import React, {useState} from 'react';
import Input from "./UI/inputs/Input";
import Button from "./UI/buttons/Button";
import {useNavigate} from "react-router-dom";
import AuthService from "../API/AuthService";

const LoginForm = () => {
    const [formData, setFormData] = useState({email: "", password: ""});
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setFormData({...formData, [name]: value});
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await AuthService.login(formData.email, formData.password);
        if (response.data.status === "success") {
            return navigate("/");
        }
    }

    return (
        <div className="bg-slate-300 max-w-xl mx-auto flex justify-center mt-40 p-6">
            <div>
                <h1 className="text-xl text-center uppercase mb-5">authentification</h1>
                <form  onSubmit={handleFormSubmit}>
                    <div className="space-y-3">
                        <Input onChange={handleInputChange} name="email" type="email" placeholder="email"/>
                        <Input onChange={handleInputChange} name="password" type="password" placeholder="password"/>
                    </div>
                    <div className="flex mt-5 justify-center">
                        <Button>SIGNIN</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;