import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const items = ["about", "contract", "donations"];

  return (
    <nav className="grid grid-cols-1 lg:grid-cols-3 font-light bg-gray-900 text-white">
      <ul className="flex justify-center lg:justify-start items-center space-x-4 px-12 h-[5vh] col-span-2">
        <li className="text-zred text-3xl font-bold">
          <NavLink to="/">
            ZAIHELP-
            <span className="text-zblue">U</span>
          </NavLink>
        </li>
        <>
          {items.map((item, i) => (
            <li
              key={i}
              className="capitalize hidden sm:list-item whitespace-nowrap link-underline"
            >
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-400 focus-underline" : "hover-underline"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </>
      </ul>

      <ul className="flex flex-wrap justify-center lg:justify-end items-center space-x-4 bg-gray-800 lg:bg-gray-900 px-12 py-2">
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400 transition-all"
            }
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
