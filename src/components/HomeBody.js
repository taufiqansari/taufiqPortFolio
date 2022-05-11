import { React } from "react";
import style from "./HomeBody.module.css";
import { Typewriter } from "react-simple-typewriter";
const HomeBody = () => {
  return (
    <>
      <div className={style["main-body_content"]}>
        <div className={style["main-body-content_leftSide"]}>
          <p className={style["para-color-white"]}>Welcome to my World</p>
          <h1 className={style["leftSide-body_text"]}>
            Hi, I'm Taufiq Ansari a<br></br>
            <span style={{ fontWeight: " bold" }}>
              <Typewriter
                words={["Web Developer ."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50000000}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div className={style["main-body-content_rightSide"]}>
          <img
            alt="kid"
            height="500rem"
            className={style["img"]}
            src="https://wallpapercave.com/wp/wp7565081.png"
          />
        </div>
      </div>
    </>
  );
};

export default HomeBody;
