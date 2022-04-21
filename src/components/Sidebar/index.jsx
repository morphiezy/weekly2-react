import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const { container_list, nav_link, mobile_dropdown, custom_btn_dropdown } =
  style;

const Sidebar = () => {
  const data = useSelector((state) => state.data);

  const [isMobile, setMobile] = useState(false);

  const detectViewportSize = () =>
    window.innerWidth <= 992 ? setMobile(true) : setMobile(false);

  useEffect(() => {
    detectViewportSize();

    window.addEventListener("resize", detectViewportSize);
    return () => window.removeEventListener("resize", detectViewportSize);
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <div className={`btn-group dropstart ${mobile_dropdown}`}>
          <button
            type="button"
            className={`btn dropdown-toggle ${custom_btn_dropdown}`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bx bx-list-ul" style={{ color: "#7251ce" }}></i>
          </button>
          <ul className="dropdown-menu">
            {data.map((item) => (
              <li key={item.id}>
                <NavLink to={item.path} className="dropdown-item">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className={`px-5 py-3 p-lg-5 ${container_list} sticky-aside`}>
          {data.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `mb-4 fs-6 ${nav_link} ${isActive ? "active-link" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;

/*
  <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
*/
