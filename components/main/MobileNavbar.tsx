"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative sm:block lg:hidden">
            {/* Navbar */}
            <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 flex items-center justify-between">
                <Link href="#about-me" className="flex items-center">
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={60}
                        height={60}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <span className="font-bold ml-[10px] text-gray-300">Nceedee Tech</span>
                </Link>

                {/* Hamburger Menu Icon */}
                <div className="p-4" onClick={toggleNavbar}>
                    {isOpen ? (
                        <FaTimes className="text-gray-300 w-8 h-8 cursor-pointer" />
                    ) : (
                        <FaBars className="text-gray-300 w-8 h-8 cursor-pointer" />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-[#03001417] backdrop-blur-md z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="w-full h-full flex flex-col items-center justify-center space-y-6 px-4">
                    <Link href="#about-me" onClick={toggleNavbar} className="text-2xl text-gray-300">
                        About Me
                    </Link>
                    <Link href="#skills" onClick={toggleNavbar} className="text-2xl text-gray-300">
                        Skills
                    </Link>
                    <Link href="#projects" onClick={toggleNavbar} className="text-2xl text-gray-300">
                        Projects
                    </Link>
                    <Link href="#contact" onClick={toggleNavbar} className="text-2xl text-gray-300">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
