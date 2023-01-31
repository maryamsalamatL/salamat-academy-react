import Home from "./pages/Home";
import Courses from "./pages/Courses";
import BookOrder from "./pages/BookOrder";
import NotFound from "./pages/NotFound";
import Course from "./components/Course";

const routes = [
  { path: "/courses/:id", element: <Course /> },
  { path: "/courses", element: <Courses /> },
  { path: "/order", element: <BookOrder /> },
  { path: "/", element: <Home />, exact: true },
  { path: "*", element: <NotFound /> },
];
export default routes;
