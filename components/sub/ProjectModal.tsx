import Image from "next/image";
import React from "react";

interface Project {
    src: string;
    title: string;
    description: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 top-16 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative bg-[#030014] p-8 rounded-lg shadow-lg w-11/12 max-w-2xl overflow-y-auto animate-modalFadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-2xl"
                >
                    &times;
                </button>
                <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
                <Image
                    src={project.src}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full object-contain"
                />
                <p className="mt-4 text-gray-300">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectModal;
