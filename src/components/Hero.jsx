import React from "react";
import { Github, Linkedin, Mail, Code2, Coffee } from "lucide-react";
import { Button } from "./ui/button";
import { profileData } from "../mock";

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-[100svh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-shape absolute top-16 left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-200 opacity-40"></div>
                <div className="floating-shape-delayed absolute top-32 right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-300 opacity-30"></div>
                <div className="floating-shape absolute bottom-24 left-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-100 opacity-50"></div>
                <div className="floating-shape-delayed absolute bottom-16 right-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-orange-200 opacity-40 rotate-45"></div>

                <div className="floating-icon absolute top-1/4 left-10 text-orange-400 opacity-20">
                    <Code2 size={28} />
                </div>
                <div className="floating-icon-delayed absolute bottom-1/4 right-16 text-orange-500 opacity-20">
                    <Coffee size={26} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                {/* LEFT CONTENT */}
                <div className="flex-1 text-center lg:text-left space-y-5 pt-16 lg:pt-0">
                    <span className="text-orange-500 font-semibold text-base sm:text-lg animate-fade-in">
                        Hello, I'm
                    </span>

                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 animate-fade-in-up">
                        {profileData.name}
                    </h1>

                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-orange-500 animate-fade-in-up">
                        {profileData.title}
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 animate-fade-in-up">
                        {profileData.tagline}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                        {/* Download Resume Button */}
                        <a
                            href="/Rahul_Chauhan (1).pdf"
                            download
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-5 text-base sm:text-lg transition-all duration-300 hover:shadow-lg rounded-lg text-center"
                        >
                            Download Resume
                        </a>

                        {/* Contact Me Button */}
                        <Button
                            onClick={() => scrollToSection("contact")}
                            variant="outline"
                            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 sm:px-8 sm:py-5 text-base sm:text-lg transition-all duration-300 rounded-lg"
                        >
                            Contact Me
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up">
                        <a
                            href={profileData.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href={profileData.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href={`https://mail.google.com/mail/?view=cm&to=${profileData.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center items-center animate-fade-in mt-8 lg:mt-0">
                    <div className="relative">
                        <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-morph"></div>
                            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                                <img
                                    src={profileData.profileImage}
                                    alt={profileData.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-14 h-14 sm:w-20 sm:h-20 bg-orange-400 rounded-full opacity-50 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-orange-300 opacity-40 animate-bounce"></div>
                    </div>
                </div>
            </div>

            {/* -------------------- */}
            {/* SMALL ANIMATED PHONE SCROLL INDICATOR */}
            <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20">
                <button
                    onClick={() => scrollToSection("about")}
                    className="flex flex-col items-center group"
                >
                    <span className="text-[8px] sm:text-[9px] tracking-[3px] text-gray-500 mb-2 sm:mb-3 group-hover:text-orange-400 transition">
                        SCROLL
                    </span>

                    <div className="relative">
                        {/* Phone Body */}
                        <div className="w-10 h-16 sm:w-12 sm:h-20 bg-white rounded-xl border border-gray-300 shadow-md relative overflow-hidden flex justify-center">
                            {/* Speaker */}
                            <div className="absolute top-1 w-4 h-[1.5px] bg-gray-400 rounded-full"></div>

                            {/* Animated Arrow */}
                            <div className="absolute top-5 sm:top-6 text-orange-500 text-lg sm:text-xl animate-phoneArrow">
                                ↓
                            </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gray-400 rounded-full"></div>
                    </div>
                </button>

                {/* Animation CSS */}
                <style>
                    {`
                        @keyframes phoneArrow {
                        0% { transform: translateY(-6px); opacity: 0; }
                        30% { opacity: 1; }
                        70% { opacity: 1; }
                        100% { transform: translateY(14px); opacity: 0; }
                        }
                        .animate-phoneArrow {
                        animation: phoneArrow 1.6s ease-in-out infinite;
                        }
                    `}
                </style>
            </div>
        </section>
    );
};

export default Hero;