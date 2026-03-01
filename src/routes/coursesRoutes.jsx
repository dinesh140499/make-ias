import Home from "../pages/Home";
import ExploreCourses from "../pages/courses/ExploreCourses";
import CourseDetailsPage from "../pages/courses/DetailsPage";

const coursesRoutes = [
  { path: "courses", element: <ExploreCourses /> },
  { path: "courses/:id", element: <CourseDetailsPage /> },
];

export default coursesRoutes;
