import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { profileData } from '../mock';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use mailto: for all email sending
        const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

        window.location.href = mailtoLink; // opens default mail client

        toast({
            title: "Message Ready to Send!",
            description: "Your default email client will open with the message pre-filled.",
        });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: profileData.email,
            link: `mailto:${profileData.email}` // fixed here
        },
        {
            icon: Phone,
            title: 'Phone',
            value: profileData.phone,
            link: `tel:${profileData.phone}`
        },
        {
            icon: MapPin,
            title: 'Location',
            value: profileData.location,
            link: null
        }
    ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Get In <span className="text-orange-500">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? Feel free to reach out!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info & Socials */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow duration-300">
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                                                        <info.icon size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                                                        {info.link ? (
                                                            <a
                                                                href={info.link} // mailto or tel
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-orange-500 hover:text-orange-600 transition-colors duration-300 break-all"
                                                            >
                                                                {info.value}
                                                            </a>
                                                        ) : (
                                                            <p className="text-gray-600">{info.value}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
                                <div className="flex gap-4">
                                    <a
                                        href={profileData.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <Github size={24} />
                                    </a>
                                    <a
                                        href={profileData.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <Linkedin size={24} />
                                    </a>
                                    <a
                                        href={`mailto:${profileData.email}`} // fixed here
                                        className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card className="border-orange-200 shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                            required
                                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Project Discussion"
                                            required
                                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            required
                                            className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <Send size={20} className="mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;