import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main/Main";
import Services from "../Services/Services";
import Login from "../Login/Login";
import Checkout from "../Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Register from "../Register/Register";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
]);