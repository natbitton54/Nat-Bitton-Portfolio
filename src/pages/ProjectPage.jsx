import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../Assets/MyProjects.json";
import ProjectDetails from "../components/ProjectDetails";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BackButton from "../components/BackButton";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) return <NotFound />;

  return (
    <div className="p-8 pt-0">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">{project.title}</h1>
      <ProjectDetails project={project} />
    </div>
  );
}
