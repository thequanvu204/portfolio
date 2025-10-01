import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaGithub} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "../styles/home.css";
import { useLanguage } from "../i18n/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  const nameText = t("home.intro2");
  const [displayedText, setDisplayedText] = useState("");
  const [copyMsg, setCopyMsg] = useState("");

  /* 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== ""; 
  */

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(nameText.slice(0, i + 1));
      i++;
      if (i === nameText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [nameText]); 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thequanvu204@gmail.com").then(() => {
      setCopyMsg("Email copied!");
      setTimeout(() => setCopyMsg(""), 2000); // 2s sau ẩn thông báo
    });
  };

  return (
    <div className="home">
      {/* Hero background cố định cho mobile */}
      <div className="hero"></div>

      <div className="introduction">
        <div className="text">
          {/* Intro1 - câu chào */}
          <p className="intro-greeting">{t("home.intro1")}</p>

          {/* Intro2 - tên */}
          <h1 className="typing intro-name">
            {displayedText}
            <span className="cursor"></span>
          </h1>

          {/* Intro3 - vị trí hiện tại */}
          <p className="intro-position">{t("home.intro3")}</p>

          {/* Intro4 - đoạn giới thiệu */}
          <p className="intro-summary">{t("home.intro4")}</p>

          {/* Social buttons */}
          <div className="social-btns">
            <button className="social-btn" onClick={handleCopyEmail}>
              <FaEnvelope size={19} />
            </button>
            <a href="https://www.linkedin.com/in/the-quan-vu-7277a92b9/" className="social-btn">
              <FaLinkedin size={19} />
            </a>
            <a href="https://github.com/thequanvu204" className="social-btn">
              <FaGithub size={19} />
            </a>
          </div>

          {/* Copy email toast */}
          {copyMsg && <div className="copy-toast">{copyMsg}</div>}

          {/* CV button */}
          <a href="/Lebenslauf_TheQuanVu.pdf" download className="cv-btn">
            <FiDownload className="cv-icon" />
            <span>{t("home.downloadCV")}</span>
          </a>
        </div>

        {/* NAV BTN */}
        <div className="nav-btn">
          <Link to="/about-me"><button>{t("home.aboutBtn")}</button></Link>
          <Link to="/education"><button>{t("home.educationBtn")}</button></Link>
          <Link to="/experience"><button>{t("home.experienceBtn")}</button></Link>
          <Link to="/projects"><button>{t("home.projectsBtn")}</button></Link>
        </div>

        {/* CONTACT (hiện đang tắt) */}
        {/*
        <div className="contact">
          <div className="message">
            <h2>{t("home.sendMessage")}</h2>
            <label htmlFor="name">{t("home.name")}</label>
            <input 
              id="name" 
              type="text" 
              placeholder={t("home.name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">{t("home.email")}</label>
            <input 
              id="email" 
              type="email" 
              placeholder={t("home.email")} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">{t("home.message")}</label>
            <textarea 
              id="message" 
              placeholder={t("home.message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button 
              type="button" 
              disabled={!isFormValid}
            >
              {t("home.sendBtn")}
            </button>
          </div> 
        </div>
        */}
      </div>
    </div>
  )
}

export default Home;
