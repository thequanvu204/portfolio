import React from "react";
import "../styles/about.css";
import NavBar from "../components/navbar.tsx";
import { useLanguage } from "../i18n/LanguageContext";

// logos
import Python from "../assets/logo/python.svg";
import Scala from "../assets/logo/scala.svg";
import TypeScript from "../assets/logo/typescript.svg";
import ReactJS from "../assets/logo/react.svg";
import CSS from "../assets/logo/css.svg";
import HTML from "../assets/logo/html.svg";
import Github from "../assets/logo/github.svg";
import Gitlab from "../assets/logo/gitlab.svg";
import Latex from "../assets/logo/latex.svg";
import Wireshark from "../assets/logo/wireshark.png";
import Word from "../assets/logo/word.png";
import Excel from "../assets/logo/excel.png";
import PowerPoint from "../assets/logo/powerpoint.png";

const AboutMe = () => {
  const { t } = useLanguage();   // 👈 lấy hàm dịch

  return (
    <>
      <NavBar />
      
      <div className="about-me">
        <div className="abt-title">
          <h3>{t("about.title")}</h3>
          <span className="abt-title-bg">{t("about.title")}</span>
        </div>

        <div className="content">
          <div className="abt-left">
            <div className="personal-info">
              <h2>{t("about.personalInfo")}</h2>
              <p>{t("about.name")}</p>
              <p>{t("about.dob")}</p>
              <p>{t("about.sex")}</p>
              <p>{t("about.nationality")}</p>
            </div>

            <div className="languages">
              <h2>{t("about.languages")}</h2>
              
              <div className="language">
                <span className="lang-name">{t("about.german")}</span>
                <span className="lang-level">{t("about.businessFluent")}</span>
                <div className="lang-bar">
                  <div className="lang-fill" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="language">
                <span className="lang-name">{t("about.english")}</span>
                <span className="lang-level">{t("about.businessFluent")}</span>
                <div className="lang-bar">
                  <div className="lang-fill" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="language">
                <span className="lang-name">{t("about.vietnamese")}</span>
                <span className="lang-level">{t("about.native")}</span>
                <div className="lang-bar">
                  <div className="lang-fill" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="abt-right">
            <div className="tech-skill">
              <h2>{t("about.technicalSkills")}</h2>
              <div className="skills">
                <img src={Python} />
                <img src={Scala} />
                <img src={TypeScript} />
                <img src={ReactJS} />
                <img src={CSS} />
                <img src={HTML} /> 
                <img src={Github} />
                <img src={Gitlab} />
                <img src={Latex} />
                <img src={Wireshark} />
                <img src={Word} />
                <img src={Excel} />
                <img src={PowerPoint} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
