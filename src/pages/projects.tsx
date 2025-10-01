import React, { useState } from "react";
import "../styles/projects.css";
import NavBar from "../components/navbar.tsx";
import { useLanguage } from "../i18n/LanguageContext";

import Portfolio from "../assets/portfolio.png";
import ChessGame from "../assets/chess.png";
import AIWeb from "../assets/aiweb.jpeg";
import Webserver from "../assets/webserver.png";

const placeholder = "https://via.placeholder.com/600x400.png?text=Project+Image";

type Project = {
  name: string;
  time: string;
  desc: string;
  memNum?: string;
  role?: string;
  tech?: string;
  img: string;
  tags: string[];
  category: string[]; // lưu key (cat1, cat2, ...) thay vì text dịch
  view?: { label: string; url: string }[];
  link?: { label: string; url: string }[];
};

const Projects = () => {
  const { t } = useLanguage();

  const [selectedProject, setSelectedProject] = useState<null | Project>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // default = all

  const handleOpen = (project: Project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  // ✅ categories có key + label (label dịch theo ngôn ngữ)
  const categories = [
    { key: "all", label: t("projects.all") },
    { key: "cat1", label: t("projects.cat1") },
    { key: "cat2", label: t("projects.cat2") },
    { key: "cat3", label: t("projects.cat3") },
    { key: "cat4", label: t("projects.cat4") },
  ];

  // ✅ lọc theo key
  const matchCategory = (project: Project) => {
    if (selectedCategory === "all") return true;
    return project.category.includes(selectedCategory);
  };

  return (
    <>
      <NavBar />

      <div className="projects">
        <div className="prj-title">
          <h3>{t("projects.title")}</h3>
          <span className="prj-title-bg">{t("projects.title")}</span>
        </div>

        {/* ===== CATEGORY BUTTONS ===== */}
        <div className="prj-categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`cat-btn ${selectedCategory === cat.key ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ===== GRID ===== */}
        <div className="prj-grid">
          {/* Portfolio Project */}
          {matchCategory({
            name: t("projects.portfolio.name"),
            time: t("projects.portfolio.time"),
            desc: t("projects.portfolio.desc"),
            img: Portfolio,
            tags: ["TypeScript", "React", "CSS"],
            category: ["cat1"],
          }) && (
            <div
              className="prj-card"
              onClick={() =>
                handleOpen({
                  name: t("projects.portfolio.name"),
                  time: t("projects.portfolio.time"),
                  desc: t("projects.portfolio.desc"),
                  role: t("projects.portfolio.role"),
                  tech: t("projects.portfolio.tech"),
                  img: Portfolio,
                  tags: ["TypeScript", "React", "CSS"],
                  category: ["cat1"],
                  view: [{ label: t("projects.portfolio.view"), url: "http://localhost:5173" }],
                })
              }
            >
              <div className="prj-img">
                <img src={Portfolio} alt="Portfolio" />
              </div>
              <div className="prj-info">
                <h3 className="prj-name">{t("projects.portfolio.name")}</h3>
                <p className="prj-time">{t("projects.portfolio.time")}</p>
                <div className="prj-tags">
                  <span className="tag">TypeScript</span>
                  <span className="tag">React</span>
                  <span className="tag">CSS</span>
                </div>
              </div>
            </div>
          )}

          {/* Chess Game Project */}
          {matchCategory({
            name: t("projects.chess.name"),
            time: t("projects.chess.time"),
            desc: t("projects.chess.desc"),
            img: ChessGame,
            tags: ["Python"],
            category: ["cat2"],
          }) && (
            <div
              className="prj-card"
              onClick={() =>
                handleOpen({
                  name: t("projects.chess.name"),
                  time: t("projects.chess.time"),
                  desc: t("projects.chess.desc"),
                  memNum: t("projects.chess.memNum"),
                  role: t("projects.chess.role"),
                  tech: t("projects.chess.tech"),
                  img: ChessGame,
                  tags: ["Python"],
                  category: ["cat2"],
                  link: [{ label: "GitHub", url: "https://github.com/thequanvu204/chess" }],
                })
              }
            >
              <div className="prj-img">
                <img src={ChessGame} alt="Chess Game" />
              </div>
              <div className="prj-info">
                <h3 className="prj-name">{t("projects.chess.name")}</h3>
                <p className="prj-time">{t("projects.chess.time")}</p>
                <div className="prj-tags">
                  <span className="tag">Python</span>
                </div>
              </div>
            </div>
          )}

          {/* AI Simulation Project */}
          {matchCategory({
            name: t("projects.aiSim.name"),
            time: t("projects.aiSim.time"),
            desc: t("projects.aiSim.desc"),
            img: AIWeb,
            tags: ["TypeScript", "ReactJS", "ChakraUI", "CSS", "Agile Methods"],
            category: ["cat1", "cat4"],
          }) && (
            <div
              className="prj-card"
              onClick={() =>
                handleOpen({
                  name: t("projects.aiSim.name"),
                  time: t("projects.aiSim.time"),
                  desc: t("projects.aiSim.desc"),
                  memNum: t("projects.aiSim.memNum"),
                  role: t("projects.aiSim.role"),
                  tech: t("projects.aiSim.tech"),
                  img: AIWeb,
                  tags: ["TypeScript", "ReactJS", "ChakraUI", "CSS", "Agile Methods"],
                  category: ["cat1", "cat4"],
                  link: [{ label: "GitHub", url: "https://github.com/thequanvu204/active-learning-frontend" }],
                })
              }
            >
              <div className="prj-img">
                <img src={AIWeb} alt="AI Simulation" />
              </div>
              <div className="prj-info">
                <h3 className="prj-name">{t("projects.aiSim.name")}</h3>
                <p className="prj-time">{t("projects.aiSim.time")}</p>
                <div className="prj-tags">
                  <span className="tag">TypeScript</span>
                  <span className="tag">ReactJS</span>
                  <span className="tag">ChakraUI</span>
                  <span className="tag">CSS</span>
                  <span className="tag">Agile Methods</span>
                </div>
              </div>
            </div>
          )}

          {/* Webserver Project */}
          {matchCategory({
            name: t("projects.webserver.name"),
            time: t("projects.webserver.time"),
            desc: t("projects.webserver.desc"),
            img: Webserver,
            tags: ["Python", "Wireshark", "HTML", "LaTeX"],
            category: ["cat3"],
          }) && (
            <div
              className="prj-card"
              onClick={() =>
                handleOpen({
                  name: t("projects.webserver.name"),
                  time: t("projects.webserver.time"),
                  desc: t("projects.webserver.desc"),
                  memNum: t("projects.webserver.memNum"),
                  role: t("projects.webserver.role"),
                  tech: t("projects.webserver.tech"),
                  img: Webserver,
                  tags: ["Python", "Wireshark", "HTML"],
                  category: ["cat3"],
                  link: [{ label: "Drive", url: "https://drive.google.com/drive/folders/16AxB_nP9AsI2o_XIxyB9CUMC4SXOu7AD?usp=sharing" }],
                })
              }
            >
              <div className="prj-img">
                <img src={Webserver} alt="Webserver" />
              </div>
              <div className="prj-info">
                <h3 className="prj-name">{t("projects.webserver.name")}</h3>
                <p className="prj-time">{t("projects.webserver.time")}</p>
                <div className="prj-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Wireshark</span>
                  <span className="tag">HTML</span>
                  <span className="tag">LaTeX</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ==== POPUP MODAL ==== */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-popup" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>
              ×
            </button>
            <div className="modal-left">
              <img src={selectedProject.img} alt="Project" />
            </div>
            <div className="modal-right">
              <h2>{selectedProject.name}</h2>
              <p className="modal-time">{selectedProject.time}</p>
              <div className="modal-desc">
                <p>{selectedProject.desc}</p>
                <p>{selectedProject.memNum}</p>
                <p>{selectedProject.role}</p>
                <p>{selectedProject.tech}</p>
              </div>
              <div className="modal-buttons">
                {selectedProject.view?.map((view, i) => (
                  <button 
                    key={i}
                    className="modal-btn"
                    onClick={() => window.open(view.url, "_blank")}
                  >
                    {view.label}
                  </button>
                ))}
                {selectedProject.link?.map((link, i) => (
                  <button
                    key={i}
                    className="modal-btn"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
