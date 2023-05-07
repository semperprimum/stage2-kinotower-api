import React, {useState} from 'react';
import Input from "./UI/inputs/Input";
import Button from "./UI/buttons/Button";
import RegistrationSelect from "./UI/selects/RegistrationSelect";
import AuthService from "../API/AuthService";
import {useNavigate} from "react-router-dom";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fio: "",
        email: "",
        password: "",
        birthday: "",
        genderId: null
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await AuthService.register(formData.fio, formData.email, formData.password, formData.birthday, formData.genderId);
        if (response.data.status === "success") {
            return navigate("/");
        }
    }

    return (
        <div className="bg-slate-300 max-w-xl mx-auto flex justify-center mt-40 p-6">
            <div>
                <h1 className="text-xl text-center uppercase mb-5">Registration</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="space-y-3">
                        <Input
                            name="fio"
                            type="text"
                            placeholder="fio"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="email"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="birthday"
                            type="text"
                            placeholder="birthday"
                            onChange={handleInputChange}
                        />
                        <RegistrationSelect
                            name="genderId"
                            onChange={handleInputChange}
                        >
                            <option value="" selected disabled>
                                gender
                            </option>
                            <option value="1">Мужской</option>
                            <option value="2">Женский</option>
                        </RegistrationSelect>
                    </div>
                    <div className="flex mt-5 justify-center">
                        <Button type="submit">SIGNUP</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default RegistrationForm;