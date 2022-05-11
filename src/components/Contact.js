import { React } from "react";
import style from "./Contact.module.css";
import Thought from "./Thought";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <>
      <div className={style["contact-container"]}>
        <form className={style["contact-form"]}>
          <div className={style["contact-flex-part"]}>
            <div className={style["contactme-width"]}>
              <h1>Contact Me</h1>
              <div className={style["chat-icon"]}>
                <WhatsAppIcon sx={{ color: "green", fontSize: "34px" }} />
                <a
                  href="https://wa.me/9920228616"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </div>
              <div className={style["chat-icon"]}>
                <EmailIcon sx={{ fontSize: "34px", color: "#ea4335" }} />

                <a
                  href="mailto:taufiqansari248@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </div>
            </div>
            <div className={style["contact_thought-part"]}>
              <p>
                <em>
                  <Thought />
                </em>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
