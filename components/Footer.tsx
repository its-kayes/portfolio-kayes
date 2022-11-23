import { BsLinkedin } from "react-icons/Bs";
import { FaGithub } from "react-icons/Fa";
import { SiGmail } from "react-icons/Si";
import { BsFacebook } from "react-icons/Bs";
import style from "../styles/V2/Footer/Footer.module.css";

export default function Footer() {
  return (
    <section className="h-[260px] gird bg-gradient-to-r from-[#0A182E] via-[#0A182E] to-[#0A182E] text-white">
      <section className="h-1/2 flex justify-center items-end">
        <div className={style.footerIconFirst}>
          <a
            href="https://www.linkedin.com/in/its-kayes/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className={style.footerIcon}>
          <a
            href="https://github.com/its-kayes"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className={style.footerIcon}>
          <a href="mailto:kayes.ek8@gmail.com" target="_blank" rel="noreferrer">
            <SiGmail />
          </a>
        </div>
        <div className={style.footerIcon}>
          <a
            href="https://www.facebook.com/kayes0000000/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </section>

      <h1 className={style.footerTitle}> Design & Develop by Emrul Kayes </h1>
    </section>
  );
}
