import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NoMatch = () => {

  const data = useSelector(state => state.data)

  return (
    <>
      <h1 className="fs-1 fw-bold">Page not found</h1>
      <p className="mt-3 fs-6 lh-lg">
        We only provide access to the url with the path{" "}
        <code className="fw-bold">/page/task_name</code> . Try accessing the
        task below
      </p>
      <ul className="mt-4">
        {data.map((item) => (
          <li key={item.id} className="mt-3">
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoMatch;
