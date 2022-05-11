import React from "react";
import style from "./Projects.module.css";
const Projects = () => {
  const Projects = [
    {
      id: 0,
      title: "Flex Card Js",
      link: "https://expandingcardjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62210a65c2bb4f2698342929/screenshot_2022-03-03-18-35-20-0000.png",
    },
    {
      id: 1,
      title: "ToDo List Js",
      link: "https://whattodolistjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6225c9f957003fb79f0baa61/screenshot_2022-03-07-09-01-49-0000.png",
    },
    {
      id: 2,
      title: "TimeZone Js",
      link: "https://timezonejs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/622108def5539b264d4470ae/screenshot_2022-03-03-18-28-49-0000.png",
    },
    {
      id: 3,
      title: "Wheather App Js",
      link: "https://wheatherappjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b7233c7ee0a4b34ede21c/screenshot_2022-05-11-08-22-16-0000.png",
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      link: "https://xnzerogamejs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b76eb0a83dd4b28f28833/screenshot_2022-05-11-08-42-24-0000.png",
    },
    {
      id: 5,
      title: "Letter Counter Js",
      link: "https://lettercounterjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b7b7987a0b54f162777ce/screenshot_2022-05-11-09-01-50-0000.png",
    },
    {
      id: 6,
      title: "Stop Watch Js",
      link: "https://stoprunwatchjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b7d5d3f081c524a1a9204/screenshot_2022-05-11-09-09-56-0000.png",
    },
    {
      id: 7,
      title: "Food app React Js",
      link: "https://foodappreactjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b88cf8414035b2f2a3f4f/screenshot_2022-05-11-09-59-35-0000.png",
    },
    {
      id: 8,
      title: "Add Goal React Js",
      link: "https://addgoalreactjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b8cc83f081c5eec1a968e/screenshot_2022-05-11-10-16-31-0000.png",
    },
    {
      id: 9,
      title: "Api Call React Js",
      link: "https://apicallreactjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b8f040c5f765e1dcac9b9/screenshot_2022-05-11-10-26-04-0000.png",
    },
    {
      id: 10,
      title: "Serach  React Js",
      link: "https://searchfilterreactjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b92a8f13bac65a9bcd1e5/screenshot_2022-05-11-10-41-38-0000.png",
    },
    {
      id: 11,
      title: "Redux React Js",
      link: "https://reduxappreactjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627b97e0f13bac68fcbcd3fe/screenshot_2022-05-11-11-03-57-0000.png",
    },
    {
      id: 12,
      title: "Form React Js",
      link: "https://formvalidationreactjs.netlify.app/",
      img: "data:image/png;base64,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",
    },
    {
      id: 13,
      title: "Expenses Tracker",
      link: "https://expenseschartreactjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627ba2c687a0b574162774b6/screenshot_2022-05-11-11-50-45-0000.png",
    },
    {
      id: 14,
      title: "React Counter",
      link: "https://reactcounterjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627ba5372ac5dd750288da7a/screenshot_2022-05-11-12-00-50-0000.png",
    },
    {
      id: 15,
      title: "React Router",
      link: "https://reactrouterjs.netlify.app/",
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/627baa918adc377c06370786/screenshot_2022-05-11-12-23-44-0000.png",
    },
  ];
  return (
    <>
      <div className={style["myProject_container"]}>
        <h1 className={style["project-heading"]}>MY PROJECTS</h1>
        <div className={style["projects-list"]}>
          {Projects.map((list) => (
            <div className={style["my-pj"]} key={list.id}>
              <img className={style["pj-img"]} src={list.img} alt="" />
              <div className={style["pj-link"]}>
                <a
                  className={style["pj-title"]}
                  href={list.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {list.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
