import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h3>not found</h3>
      <h1>404</h1>
      <Link to="/">go to home page</Link>
    </>
  );
};

export default NotFound;
