import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import "./index.css";

export default function App() {
  return (
    <Routes>
      {/* Routes that use Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/my-projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Route>

      {/* Routes WITHOUT Layout */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
