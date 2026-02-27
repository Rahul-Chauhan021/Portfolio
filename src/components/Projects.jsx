import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { projectsData } from '../mock';
import { Button } from './ui/button'; // Only for the "View More on GitHub" button

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Featured <span className="text-orange-500">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and experience
                        </p>
                    </div>

                    {/* Project Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {projectsData.map((project) => (
                            <Card
                                key={project.id}
                                className="border-orange-200 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-48 bg-gray-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Project Title */}
                                <CardHeader>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </CardHeader>

                                {/* Project Description & Technologies */}
                                <CardContent className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <Badge
                                                key={index}
                                                variant="outline"
                                                className="border-orange-300 text-orange-600 hover:bg-orange-50 transition-colors duration-300"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* View More Projects */}
                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg transition-all duration-300"
                            onClick={() => window.open('https://github.com/rahulchauhan', '_blank')}
                        >
                            View More on GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;