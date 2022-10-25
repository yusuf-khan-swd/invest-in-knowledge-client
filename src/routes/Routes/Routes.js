import { createBrowserRouter } from "react-router-dom";
import Checkout from "../../components/Checkout/Checkout";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Blog from "../../Pages/Others/Blog/Blog";
import FAQ from "../../Pages/Others/FAQ/FAQ";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <div>This is Error Page its have to make</div>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/courses/:courseId',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.courseId}`)
      },
      {
        path: '/checkout/:courseId',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.courseId}`)
      },
      {
        path: '/faq',
        element: <PrivateRoutes><FAQ></FAQ></PrivateRoutes>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ],
  },
]);