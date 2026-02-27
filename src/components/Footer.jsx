import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profileData } from '../mock';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const footerLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        //{ label: 'Experience', id: 'experience' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Brand Section */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FF6B35' }}>
                                {profileData.name}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Java Full Stack Developer passionate about creating efficient and scalable web solutions.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href={profileData.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href={profileData.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a
                                    href={`mailto:${profileData.email}?subject=Hello&body=Hi there`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                                >
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4" style={{ color: '#FF6B35' }}>
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {footerLinks.map((link) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4" style={{ color: '#FF6B35' }}>
                                Contact Info
                            </h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a
                                        href={`mailto:${profileData.email}`}
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {profileData.email}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${profileData.phone}`}
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {profileData.phone}
                                    </a>
                                </li>
                                <li>{profileData.location}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                            <span>© {currentYear} {profileData.name}. All rights reserved.</span>
                            <span className="hidden sm:inline">|</span>
                            <span className="flex items-center gap-1">
                                Made with <Heart size={16} className="text-orange-500 fill-current" /> by {profileData.name}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;