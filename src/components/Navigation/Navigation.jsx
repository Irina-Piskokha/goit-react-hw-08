import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.list}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <div className={s.wrapperLogin}>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Log in
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
