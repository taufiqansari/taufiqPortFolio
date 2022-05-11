import { React } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className={style["navbar-container"]}>
        <div className={style["navbar_leftside-content"]}>
          <h1>
            <Link to="/" className={style.link}>
              PortFolio
            </Link>
          </h1>
        </div>
        <div className={style["navbar_rightside-content"]}>
          <ul className={style["navbar_right-list"]}>
            <li className={style["rightside_text-content"]}>
              <Link to="/Home" className={style.link}>
                Home
              </Link>
            </li>
            <li className={style["rightside_text-content"]}>
              <Link to="/skills" className={style.link}>
                Skills
              </Link>
            </li>
            <li className={style["rightside_text-content"]}>
              <Link to="/aboutme" className={style.link}>
                About
              </Link>
            </li>
            <li className={style["rightside_text-content"]}>
              <Link to="/contactme" className={style.link}>
                Contact
              </Link>
            </li>
            <li className={style["rightside_text-content"]}>
              <Link to="/myprojects" className={style.link}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
