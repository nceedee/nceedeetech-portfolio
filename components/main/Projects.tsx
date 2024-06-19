"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectModal from "../sub/ProjectModal";

interface Project {
    src: string;
    title: string;
    description: string;
}

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    const projects: Project[] = [
        {
            src: "/portfolio.png",
            title: "nceedeetech portfolio",
            description: "NceedeeTech portfolio highlights innovative web projects, showcasing expertise in modern design, responsive layouts, and seamless user experiences.",
        },
        {
            src: "/nectto.png",
            title: "Nectto Social Media",
            description: "Nectto is a social media platform by Nceedee, designed for modern interactions, featuring intuitive design, responsive layouts, and engaging user experiences.",
        },
        {
            src: "/healthyharvest.png",
            title: "Healthy Harvest",
            description: "Healthy Harvest is an e-commerce site by NceedeeTech, offering a seamless shopping experience with intuitive design, responsive layouts, and user-friendly navigation.",
        },
        {
            src: "/gobet.png",
            title: "Gobet prediction website",
            description: "GoBet is a demo React app by NceedeeTech, allowing users to predict bets with an intuitive interface, responsive design, and smooth user experience.",
        },
        {
            src: "/bird.png",
            title: "Bird demo website",
            description: "Bird Website is a Tailwind CSS demo by NceedeeTech, showcasing skills in responsive design, modern layouts, and clean, efficient styling.",
        },
        {
            src: "/zigah.png",
            title: "Zigah demo website",
            description: "Zigah is a platform by NceedeeTech, demonstrating Next.js and React.js skills for global money transfers with a sleek, responsive design and user-friendly interface.",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-20" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        onClick={() => openModal(project)}
                    />
                ))}
            </div>
            <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
        </div>
    );
};

export default Projects;
