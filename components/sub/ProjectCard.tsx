import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    onClick: () => void;  // Add onClick prop
}

const ProjectCard = ({ src, title, description, onClick }: Props) => {
    return (
        <div className="relative z-50 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer" onClick={onClick}>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />
            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
