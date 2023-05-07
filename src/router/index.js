import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

export const routes = [
    {id: 1, path: "/", element: <Home />},
    {id: 2, path: "/registration", element: <Registration />},
    {id: 3, path: "/login", element: <Login />},
    {id: 4, path: "/movie/:id", element: <Movie />},
    {id: 5, path: "/profile", element: <Profile />},
    {id: 6, path: "/profile/edit", element: <EditProfile />},
]