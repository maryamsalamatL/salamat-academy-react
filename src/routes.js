import Home from "./pages/homePage/Home";
import Courses from "./pages/coursesPage/Courses";
import BookOrder from "./pages/BookOrder";
import NotFound from "./pages/notFound/NotFound";
import Course from "./components/coursesPageCom/Course";
import Signup from "./pages/signup/SignupPage";
import Login from "./pages/login/LoginPage";
import Panel from "./pages/panel/Panel";

const routes = [
  { path: "/courses/:id", element: <Course /> },
  { path: "/courses", element: <Courses /> },
  { path: "/order", element: <BookOrder /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Panel /> },
  { path: "/", element: <Home />, exact: true },
  { path: "*", element: <NotFound /> },
];
export default routes;
