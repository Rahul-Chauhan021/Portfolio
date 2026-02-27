import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../mock';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gradient-to-br from-orange-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Work <span className="text-orange-500">Experience</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            My professional journey and key achievements
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange-200"></div>

                        {experienceData.map((exp, index) => (
                            <div key={exp.id} className="relative mb-12 last:mb-0">
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                        }`}
                                >
                                    <Card className="border-orange-200 hover:shadow-xl transition-all duration-300 group">
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-2">
                                                <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                                                    <Briefcase size={14} className="mr-1" />
                                                    {exp.position}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-2xl text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                                                {exp.company}
                                            </CardTitle>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={16} className="text-orange-500" />
                                                    {exp.period}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin size={16} className="text-orange-500" />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-gray-600 leading-relaxed">{exp.description}</p>

                                            {/* Achievements */}
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                                                {exp.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-600 text-sm">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;