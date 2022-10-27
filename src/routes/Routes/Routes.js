import { createBrowserRouter } from "react-router-dom";
import Checkout from "../../components/Checkout/Checkout";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Blog from "../../Pages/Others/Blog/Blog";
import Error from "../../Pages/Others/Error/Error";
import FAQ from "../../Pages/Others/FAQ/FAQ";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('https://b610-lerning-platform-server-side-yusuf-khan-swd.vercel.app/courses')
      },
      {
        path: '/courses/:courseId',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-yusuf-khan-swd.vercel.app/courses/${params.courseId}`)
      },
      {
        path: '/checkout/:courseId',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-yusuf-khan-swd.vercel.app/checkout/${params.courseId}`)
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
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