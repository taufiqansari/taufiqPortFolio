import React from "react";
import style from "./Skills.module.css";
const Skills = () => {
  return (
    <>
      <div className={style["main-skill_container"]}>
        <h1 className={style["skill-heading"]}>My Skills</h1>
        <div className={style["skill-container"]}>
          <div className={style["my_skills"]}>
            <img
              height="100rem"
              alt="html"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            />
            <div className={style["bgcolor-text"]}>
              <h4> HTML5</h4>
            </div>
            <div className={style["content"]}>
              <span className={style.span}>90%</span>
            </div>
          </div>
          <div className={style["my_skills"]}>
            <img
              height="100rem"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt="css"
            />
            <div className={style["bgcolor-text"]}>
              <h4>CSS3</h4>
            </div>
            <div className={style["content"]}>
              <span className={style.span}>80%</span>
            </div>
          </div>
          <div className={style["my_skills"]}>
            <img
              height="100rem"
              src="https://www.thecodecrypt.com/images/2020/01/08/js.png"
              alt="js"
            />
            <div className={style["bgcolor-text"]}>
              <h4>JavaScript</h4>
            </div>
            <div className={style["content"]}>
              <span className={style.span}>80%</span>
            </div>
          </div>
          <div className={style["my_skills"]}>
            <img
              height="100rem"
              alt="react"
              src="https://cdn-media-1.freecodecamp.org/images/1*qUlxDdY3T-rDtJ4LhLGkEg.png"
            />
            <div className={style["bgcolor-text"]}>
              <h4>React JS</h4>
            </div>
            <div className={style["content"]}>
              <span className={style.span}>70%</span>
            </div>
          </div>
          <div className={style["my_skills"]}>
            <img
              height="100rem"
              alt="bt"
              src="https://www.drupal.org/files/project-images/bootstrap-stack.png"
            />
            <div className={style["bgcolor-text"]}>
              <h4>BootStrap</h4>
            </div>
            <div className={style["content"]}>
              <span className={style.span}>90%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
