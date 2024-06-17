import React from "react";
import {
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaWhatsapp, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[30] relative">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Connect with nceedeetech on:</div>

                        <a
                            href="https://www.instagram.com/nceedeetech"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </a>
                        <a
                            href="https://www.x.com/amghost001"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nceedeetech"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>
                        </a>
                        <a
                            href="https://www.github.com/nceedee"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a
                            href="https://www.facebook.com/nceedeetech"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook />
                            <span className="text-[15px] ml-[6px]">Facebook</span>
                        </a>
                        <a
                            href="https://wa.me/+2347077235848"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp />
                            <span className="text-[15px] ml-[6px]">Whatsapp</span>
                        </a>
                        <a
                            href="tel:+2347077235848"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <FaPhoneAlt />
                            <span className="text-[15px] ml-[6px]">Call Me</span>
                        </a>
                        <a
                            href="mailto:nceedee.org@gmail.com"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <MdEmail />
                            <span className="text-[15px] ml-[6px]">Email</span>
                        </a>

                    </div>

                </div>

                <div className="mb-[20px] text-[15px] text-center relative z-[40]">
                    &copy; nceedeetech 2024. All rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
