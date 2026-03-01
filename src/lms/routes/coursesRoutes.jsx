// Courses
import Layout from "../components/courses/details/Layout";
import Prelims from "../components/courses/details/prelims/Prelims";
import Courses from "../pages/courses/Courses";
import Details from "../pages/courses/details/Details";

const coursesRoutes = [
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "courses/:id",
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Details />,
      },
      {
        path: "prelims", 
        element: <Prelims />,
      },
    ],
  },
];

export default coursesRoutes;
