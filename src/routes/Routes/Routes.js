import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Others/Blog/Blog";
import FAQ from "../../Pages/Others/FAQ/FAQ";

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
        element: <Courses></Courses>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ],
  },
]);