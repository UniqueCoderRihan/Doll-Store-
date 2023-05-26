import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Register from "../Componets/Register/Register";
import Login from "../Componets/Login/Login";
import Blog from "../Componets/Blog/Blog";
import ErrorPage from '../Componets/Error/ErrorPage';
import AddToy from "../Pages/AddToy/AddToy";
import Toys from "../Pages/All Toy/Toys";
import MyToys from "../Pages/My toys/MyToys";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/blogs',
                element: <Blog></Blog>
            },
            {
                path:'/toys',
                element: <Toys></Toys>
            },
            {
                path:'/addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/toy/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute> ,
                loader:({params})=> fetch(`https://doll-server.vercel.app/toy/${params.id}`)
            },
            {
                path:'/toyupdate/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader:({params})=> fetch(`https://doll-server.vercel.app/toy/${params.id}`)
            }
            
        ]
    }
])
export default router;