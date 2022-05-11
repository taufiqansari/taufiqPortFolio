import React from "react";
import style from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className={style["footer_container"]}>
        <div className={style["footer-img"]}>
          <img
            height="300px"
            style={{ padding: "10px" }}
            className={style["footer-img"]}
            alt="kid"
            src="https://www.transparentpng.com/thumb/boy/aPjtmy-png-boy-transparent-boy-png-images.png"
          />
        </div>

        <div className={style["footer-credit"]}>
          <p>Made by Taufiq.</p>
        </div>

        <div className={style["footer-icon"]}>
          <div>
            <GitHubIcon
              className={style["icon-one icons"]}
              sx={{ color: "white", fontSize: "54px" }}
            />
            <br></br>
            <a
              className={style["footer-name"]}
              href="https://github.com/taufiqansari?tab=repositories"
            >
              GitHub
            </a>
          </div>
          <div>
            <LinkedInIcon
              className={style["icon-two icons"]}
              sx={{ color: "white", fontSize: "54px" }}
            />
            <br></br>
            <a
              className={style["footer-name"]}
              href="https://www.linkedin.com/in/taufiq-ansari-254b891b0/"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <InstagramIcon
              className={style["icon-three icons"]}
              sx={{ color: "white", fontSize: "54px" }}
            />
            <br></br>
            <a
              className={style["footer-name"]}
              href="https://www.instagram.com/mr.lazy16/"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
