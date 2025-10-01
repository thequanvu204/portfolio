import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/experience.css";
import NavBar from "../components/navbar.tsx";
import Conscia from "../assets/logo/conscia.png";
import { useLanguage } from "../i18n/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();   // 👈 lấy hàm dịch
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  
  const toggleCard = (cardId: string) => {
    setExpandedCard(prev => (prev === cardId ? null : cardId));
  };

  return (
    <>
      <NavBar />

      <div className="experience">
        <div className="exp-title">
          <h3>{t("experience.title")}</h3>
          <span className="exp-title-bg">{t("experience.title")}</span>
        </div>

        <div className="exp-timeline">
          <div className="exp-timeline-item">
            <div className={`exp-timeline-card ${expandedCard === "conscia" ? "expanded" : ""}`}>
              {/* Header */}
              <div className="exp-card-header clickable" onClick={() => toggleCard("conscia")}>
                <img src={Conscia} className="exp-logo" />
                <div className="exp-content">
                  <h3 className="exp-name">{t("experience.conscia.name")}</h3>
                  <p className="exp-position">{t("experience.conscia.position")}</p>
                </div>
                <div className="exp-time">
                  {t("experience.conscia.time")}
                  <FaChevronDown
                    className={`exp-arrow ${expandedCard === "conscia" ? "rotated" : ""}`}
                  />
                </div>
              </div>

              <div
                  className={`collapsible ${expandedCard === "conscia" ? "open" : ""}`}
                >
                  <div className="exp-details">
                    <div className="exp-section">
                      <p>{t("experience.conscia.companyDesc")}</p>
                    </div>
                    <div className="exp-section">
                      <h4>{t("experience.conscia.mainTasks")}</h4>
                      <ul>
                        {(t("experience.conscia.taskContent") as unknown as string[]).map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul> 
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience;