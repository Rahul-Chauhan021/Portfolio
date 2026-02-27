import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
       //{ label: 'Experience', id: 'experience'},
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div
                        className="text-2xl font-bold cursor-pointer transition-colors duration-300"
                        style={{ color: '#FF6B35' }}
                        onClick={() => scrollToSection('hero')}
                    >
                        RC.
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button
                            onClick={() => scrollToSection('contact')}
                            className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300"
                        >
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-in slide-in-from-top">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium text-left px-4"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="px-4 pt-2">
                                <Button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                                >
                                    Get In Touch
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;