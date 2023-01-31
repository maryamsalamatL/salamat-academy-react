import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Course = (props) => {
  const params = useParams();
  return (
    <div>
      <h4>course : {params.id}</h4>
      <Link to="/courses">go back to courses</Link>
    </div>
  );
};

export default Course;
