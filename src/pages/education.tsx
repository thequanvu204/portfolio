import React, { useState } from "react";
import { FaBookOpen, FaGraduationCap, FaChevronDown } from "react-icons/fa";
import "../styles/education.css";
import NavBar from "../components/navbar.tsx";
import { useLanguage } from "../i18n/LanguageContext";

// logo
import JGU from "../assets/logo/uni-mainz.png";
import STK from "../assets/logo/uni-marburg.jpg";
import THPT from "../assets/logo/thpt-cnn.png";

const Education = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(prev => (prev === cardId ? null : cardId));
  };

  const [isPdfOpen, setIsPdfOpen] = useState<string | null>(null);

  return (
    <>
      <NavBar />

      <div className="education">
        <div className="edu-title">
          <h3>{t("education.title")}</h3>
          <span className="edu-title-bg">{t("education.title")}</span>
        </div>

        <div className="edu-timeline">
          {/* University - Bachelor */}
          <div className="edu-timeline-item">
            <div className="edu-timeline-icon">
              <FaBookOpen className="studying-icon" />
            </div>
            <div className={`edu-timeline-card ${expandedCard === "jgu" ? "expanded" : ""}`}>
              {/* Header */}
              <div className="edu-card-header clickable" onClick={() => toggleCard("jgu")}>
                <img src={JGU} className="edu-logo" />
                <div className="edu-content">
                  <h3 className="edu-name">{t("education.jgu.name")}</h3>
                  <p className="edu-degree">{t("education.jgu.degree")}</p>
                </div>
                <div className="edu-time">
                  {t("education.jgu.time")}
                  <FaChevronDown
                    className={`edu-arrow ${expandedCard === "jgu" ? "rotated" : ""}`}
                  />
                </div>
              </div>

              {/* Expanded details */}
              <div
                className={`collapsible ${expandedCard === "jgu" ? "open" : ""}`}
              >
                <div className="uni-details">
                  <div className="uni-details-top">
                    <div className="uni-details-left">
                      <h4>{t("education.jgu.focus")}</h4>
                      <ul>
                        <li>{t("education.jgu.major")}: {t("education.jgu.majorName")}</li>
                        <li>{t("education.jgu.minor")}: {t("education.jgu.minorName")}</li>
                      </ul>
                    </div>
                    <div className="uni-details-right">
                      <h4>{t("education.jgu.projects")}</h4>
                      <ul>
                        <li>{t("education.jgu.project1")}</li>
                        <li>{t("education.jgu.project2")}</li>
                        <li>{t("education.jgu.project3")}</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="uni-modules-title">{t("education.jgu.modules")}</h4>
                  {/* Horizontal scrollable modules */}
                  <div className="uni-modules">
                    <div className="uni-modules-wrapper">
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.introProg")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.wise2223")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.digitalCircuits")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose23")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.formalLang")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose23")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.database")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose23")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.absatz")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.wise2324")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.introDesign")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose24")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.progLang")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose24")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.irw")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose24")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.dsea")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.wise2425")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.complexity")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.wise2425")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.se")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.wise2425")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.gameTheory")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.wise2425")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.itSec")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose25")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.commNet")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose25")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.erw")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose25")}</span>
                        </div>
                      </div>
                      <div className="uni-module">
                        <div className="uni-module-header">
                          <span className="uni-module-title">{t("education.jgu.moduleNames.finanz")}</span>
                          <span className="uni-module-time">{t("education.jgu.times.sose25")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STK */}
          <div className="edu-timeline-item">
            <div className="edu-timeline-icon">
              <FaGraduationCap className="studying-icon" />
            </div>
            <div className={`edu-timeline-card ${expandedCard === "stk" ? "expanded" : ""}`}>
              {/* Header */}
              <div className="edu-card-header clickable" onClick={() => toggleCard("stk")}>
                <img src={STK} className="edu-logo" />
                <div className="edu-content">
                  <h3 className="edu-name">{t("education.stk.name")}</h3>
                  <p className="edu-degree">{t("education.stk.degree")}</p>
                </div>
                <div className="edu-time">
                  {t("education.stk.time")}
                  <FaChevronDown
                    className={`edu-arrow ${expandedCard === "stk" ? "rotated" : ""}`}
                  />
                </div>
              </div>

              <div
                className={`collapsible ${expandedCard === "stk" ? "open" : ""}`}
              >
                <div className="stk-details">
                  <div className="stk-section">
                    <h4>{t("education.stk.focus")}</h4>
                    <p>{t("education.stk.focusContent")}</p>
                  </div>

                  <div className="stk-section">
                    <h4>{t("education.stk.subjects")}</h4>
                    <p>
                      {t("education.stk.sbj1")},{" "}
                      {t("education.stk.sbj2")},{" "}
                      {t("education.stk.sbj3")},{" "} 
                      {t("education.stk.sbj4")},{" "}
                      {t("education.stk.sbj5")}
                    </p>
                  </div>

                  <div className="stk-footer">
                    <button className="pdf-btn" onClick={() => setIsPdfOpen("fsp.pdf")}>
                      {t("education.stk.fsp")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THPT */}
          <div className="edu-timeline-item">
            <div className="edu-timeline-icon">
              <FaGraduationCap className="studying-icon" />
            </div>
            <div className={`edu-timeline-card ${expandedCard === "thpt" ? "expanded" : ""}`}>
              {/* Header */}
              <div className="edu-card-header clickable" onClick={() => toggleCard("thpt")}>
                <img src={THPT} className="edu-logo" />
                <div className="edu-content">
                  <h3 className="edu-name">{t("education.thpt.name")}</h3>
                  <p className="edu-degree">{t("education.thpt.degree")}</p>
                </div>
                <div className="edu-time">
                  {t("education.thpt.time")}
                  <FaChevronDown
                    className={`edu-arrow ${expandedCard === "thpt" ? "rotated" : ""}`}
                  />
                </div>
              </div>

              <div
                className={`collapsible ${expandedCard === "thpt" ? "open" : ""}`}
              >
                <div className="thpt-details">
                  <div className="thpt-footer">
                    <button className="pdf-btn" onClick={() => setIsPdfOpen("dsd.pdf")}>
                      {t("education.thpt.dsd")}
                    </button>
                    <button className="pdf-btn" onClick={() => setIsPdfOpen("tnthpt.pdf")}>
                      {t("education.thpt.exam")}
                    </button>
                    <button className="pdf-btn" onClick={() => setIsPdfOpen("highschool-transcript.pdf")}>
                      {t("education.thpt.transcript")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isPdfOpen && (
          <div className="pdf-modal" onClick={() => setIsPdfOpen(null)}>
            <div className="pdf-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setIsPdfOpen(null)}>✖</button>
              <iframe
                src={`/${isPdfOpen}`}
                width="100%"
                height="600px"
                style={{ border: "none" }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
