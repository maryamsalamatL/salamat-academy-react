import { Link } from "react-router-dom";

const Courses = () => {
  const items = [
    { name: "course 1", to: "/courses/1" },
    { name: "course 2", to: "/courses/2" },
    { name: "course 3", to: "/courses/3" },
    { name: "course 4", to: "/courses/4" },
  ];
  return (
    <div>
      <h1>courses</h1>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Courses;
