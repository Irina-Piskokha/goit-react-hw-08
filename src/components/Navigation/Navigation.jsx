import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <nav className={s.list}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        {isLoggedIn ? (
          <div className={s.wrapperUser}>
            <div className={s.user}>{user.email}</div>
            <button
              className={s.btn}
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={s.wrapperLogin}>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Log in
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
