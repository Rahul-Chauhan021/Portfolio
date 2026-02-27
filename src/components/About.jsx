import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { aboutData } from '../mock';
import aboutImg from '../assets/about.jpeg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            About <span className="text-orange-500">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src={aboutImg}
                                    alt="Developer workspace"
                                    className="rounded-2xl shadow-2xl w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-100 rounded-2xl -z-10"></div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">
                                Crafting Digital Solutions with Passion
                            </h3>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                {aboutData.description}
                            </p>

                            <div className="space-y-4">
                                {aboutData.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                                        <span className="text-gray-700 text-lg">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                <Card className="p-4 text-center border-orange-200 hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-3xl font-bold text-orange-500">2+</div>
                                    <div className="text-sm text-gray-600 mt-1">Years Exp.</div>
                                </Card>
                                <Card className="p-4 text-center border-orange-200 hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-3xl font-bold text-orange-500">10+</div>
                                    <div className="text-sm text-gray-600 mt-1">Projects</div>
                                </Card>
                                <Card className="p-4 text-center border-orange-200 hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-3xl font-bold text-orange-500">7+</div>
                                    <div className="text-sm text-gray-600 mt-1">Clients</div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;