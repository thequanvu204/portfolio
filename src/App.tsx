import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/about";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Background from "./components/Background";

const App = () => {
  return (
    <Router>
      <LanguageSwitcher />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;