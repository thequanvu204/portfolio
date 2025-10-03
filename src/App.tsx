import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/about";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Background from "./components/Background";
import "./App.css";

const Footer = () => (
  <footer className="footer">
    <p className="footer-main">
        © {new Date().getFullYear()} The Quan Vu. All rights reserved.
    </p>
    <p className="footer-sub">
      All product names, logos, and brands are property of their respective owners.  
      This website is for personal portfolio purposes only.
    </p>
  </footer>
);

const Layout = () => {
  const location = useLocation();
  const showFooter = ["/about-me", "/education", "/experience"].includes(location.pathname);

  return (
    <div className="app-container">
      <LanguageSwitcher />
      <Background />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
