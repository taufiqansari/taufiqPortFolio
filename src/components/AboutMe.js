import { React } from "react";
import style from "./AboutMe.module.css";
import Resume from "../assest/Resume.pdf";
const AboutMe = () => {
  return (
    <>
      <div className={style["aboutme_main-container"]}>
        <div className={style["aboutme-leftside-content"]}>
          <img
            className={style["bgcolor-img"]}
            height="500rem"
            alt="abt"
            src="https://www.transparentpng.com/thumb/boy/MQZkNR-cartoon-charactersthe-boss-baby-pngu.png "
          />
        </div>

        <div className={style["aboutme-rightside-content"]}>
          <div className={style["aboutme-margintop"]}>
            <h1>About me</h1>
            <p>I'm Commerce Student.</p>
            <p>I have Graduate my B.Com through Mumbai Unversity.</p>
            <p>
              Then I started learning Coding through online platform.And then I
              decided to make my Career in Web Development.
            </p>
          </div>
          <div className={style["resume-btn"]}>
            <a
              className={style["resume-file"]}
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              View my Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
