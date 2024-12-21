import { useEffect } from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home page";
  });
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        Your <span>contacts</span> in one application
      </h1>
      <p className={s.text}>
        We are happy to welcome you to the most convenient application
      </p>
    </div>
  );
};

export default HomePage;
