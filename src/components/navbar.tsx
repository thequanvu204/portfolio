import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import {
  FaHome,
  FaUser,
  FaUniversity,
  FaBriefcase,
  FaFolderOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../styles/navbar.css";

const NavBar = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Desktop navbar */}
      <nav className="navigator">
        <NavLink to="/" className="nav-link">
          <FaHome className="nav-icon" />
          <span className="nav-text">{t("navbar.home")}</span>
        </NavLink>
        <NavLink to="/about-me" className="nav-link">
          <FaUser className="nav-icon" />
          <span className="nav-text">{t("navbar.about")}</span>
        </NavLink>
        <NavLink to="/education" className="nav-link">
          <FaUniversity className="nav-icon" />
          <span className="nav-text">{t("navbar.education")}</span>
        </NavLink>
        <NavLink to="/experience" className="nav-link">
          <FaBriefcase className="nav-icon" />
          <span className="nav-text">{t("navbar.experience")}</span>
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          <FaFolderOpen className="nav-icon" />
          <span className="nav-text">{t("navbar.projects")}</span>
        </NavLink>
      </nav>

      {/* Hamburger cho mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        ref={hamburgerRef}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Dropdown menu mobile */}
      <div
        className={`mobile-dropdown ${menuOpen ? "open" : "closed"}`}
        ref={menuRef}
      >
        <NavLink
          to="/"
          className="mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          <FaHome />
        </NavLink>
        <NavLink
          to="/about-me"
          className="mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          <FaUser />
        </NavLink>
        <NavLink
          to="/education"
          className="mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          <FaUniversity />
        </NavLink>
        <NavLink
          to="/experience"
          className="mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          <FaBriefcase />
        </NavLink>
        <NavLink
          to="/projects"
          className="mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          <FaFolderOpen />
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
