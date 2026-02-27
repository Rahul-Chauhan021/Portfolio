import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { skillsData } from '../mock';

const SkillBar = ({ skill }) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-orange-500 font-semibold">{skill.level}%</span>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out skill-bar-animate"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-orange-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            My <span className="text-orange-500">Skills</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A comprehensive overview of my technical expertise and proficiency levels
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Backend Skills */}
                        <Card className="border-orange-200 hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl text-orange-500 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Backend Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {skillsData.backend.map((skill, index) => (
                                    <SkillBar key={index} skill={skill} />
                                ))}
                            </CardContent>
                        </Card>

                        {/* Frontend Skills */}
                        <Card className="border-orange-200 hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl text-orange-500 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Frontend Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {skillsData.frontend.map((skill, index) => (
                                    <SkillBar key={index} skill={skill} />
                                ))}
                            </CardContent>
                        </Card>

                        {/* Database Skills */}
                        <Card className="border-orange-200 hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl text-orange-500 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Database & Storage
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {skillsData.database.map((skill, index) => (
                                    <SkillBar key={index} skill={skill} />
                                ))}
                            </CardContent>
                        </Card>

                        {/* Tools & Technologies */}
                        <Card className="border-orange-200 hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl text-orange-500 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Tools & DevOps
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {skillsData.tools.map((skill, index) => (
                                    <SkillBar key={index} skill={skill} />
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Additional Skills Tags */}
                    <div className="mt-12 text-center">
                        <h3 className="text-xl font-semibold text-gray-700 mb-6">Other Technologies</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                'REST APIs',
                                'GraphQL',
                                'JWT',
                                'OAuth',
                                'Swagger',
                                'JUnit',
                                'Mockito',
                                'Jest',
                                'Postman',
                                'Agile/Scrum',
                                'CI/CD',
                                'Linux',
                                'Nginx'
                            ].map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-4 py-2 text-sm border-orange-300 text-orange-600 hover:bg-orange-50 transition-colors duration-300"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;