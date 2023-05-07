import axios from "axios";

export default class AuthService {
    static async register(name, email, password, birthday, genderId) {
        const response = await axios.post("http://localhost:8000/api/auth/signup", {
            fio: name,
            email: email,
            password: password,
            birthday: birthday,
            genderId: genderId
        });
        if (response.data.status === "success") {
            localStorage.user = JSON.stringify({
                fio: response.data.fio,
                id: response.data.id,
                token: response.data.token
            });
        }
        return response;
    }

    static async login(email, password) {
        const response = await axios.post("http://localhost:8000/api/auth/signin", {
            email: email,
            password: password
        });
        if (response.data.status === "success") {
            localStorage.user = JSON.stringify({
                fio: response.data.fio,
                id: response.data.id,
                token: response.data.token
            });
        }
        return response;
    }

    static async logout() {
        if (localStorage.getItem("user") !== null) {
            const user = JSON.parse(localStorage.user);
            const response = await axios.post("http://localhost:8000/api/auth/signout", null, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            if (response.data.status === "success") {
                localStorage.removeItem("user");
            }
            return response;
        }
    }
}