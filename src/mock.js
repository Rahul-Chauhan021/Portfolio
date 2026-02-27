// Mock data for Rahul Chauhan's Portfolio
import profileImg from "./assets/profile.jpg";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.png";



export const profileData = {
    name: "Rahul Chauhan",
    title: "Java Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    email: "rc579377@gmail.com",
    phone: "+91 8221869074",
    location: "Gurugram, India",
    profileImage: profileImg,
    social: {
        github: "https://github.com/Rahul-Chauhan021",
        linkedin: "https://linkedin.com/in/rahulchauhan021",
        twitter: "https://x.com/ChauhanRah41209"
    }
};

export const aboutData = {
    description: "Passionate Java Full Stack Developer with 2+ years of experience in designing and developing enterprise-level web applications. Specialized in Spring Boot, React, and microservices architecture. I love solving complex problems and building efficient, scalable solutions that make a difference.",
    highlights: [
        "2+ years of professional experience",
        "Expert in Java & Spring Framework",
        "Full stack development specialist",
        "Agile methodology practitioner"
    ]
};

export const skillsData = {
    backend: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Hibernate/JPA", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "RESTful APIs", level: 90 }
    ],
    frontend: [
        { name: "React.js", level: 85 },
        { name: "JavaScript/ES6+", level: 88 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Redux", level: 75 },
        { name: "Tailwind CSS", level: 80 }
    ],
    database: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 }
    ],
    tools: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Maven/Gradle", level: 85 }
    ]
};

export const projectsData = [
    {
        id: 1,
        title: "Esports_Website",
        description: "A full-featured esports website platform with tournaments management, payment integration, and admin dashboard. Built with microservices architecture for scalability.",
        image: project1,
        technologies: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker"],
        github: "https://github.com/rahulchauhan/ecommerce-platform",
        live: "https://demo-ecommerce.example.com"
    },
    {
        id: 2,
        title: "Hospital Management System",
        description: "A scalable real-time chat application with Patient management, medicine prescription, and handle appointment. Help patients to fix appointments.",
        image: project2,
        technologies: ["Java", "Spring REST APIs", "React", "MongoDB", "JWT"],
        github: "https://github.com/rahulchauhan/realtime-chat",
        live: "https://demo-chat.example.com"
    },
    {
        id: 3,
        title: "Task Management System",
        description: "A comprehensive task management system with team collaboration features, real-time updates, and analytics dashboard. Perfect for agile teams.",
        image: project3,
        technologies: ["Spring Boot", "React", "MySQL", "AWS S3", "REST API"],
        github: "https://github.com/rahulchauhan/task-manager",
        live: "https://demo-taskmanager.example.com"
    },
    {
        id: 4,
        title: "Travel & Tourism Management",
        description: "Comprehensive travel and tourism management system that handles itinerary planning, hotel and flight bookings, tour package management, and customer support. Integrates payment gateways, real-time availability updates, and personalized recommendations.",
        image: project4,
        technologies: ["Java", "Spring Security", "React", "PostgreSQL", "Microservices"],
        github: "https://github.com/rahulchauhan/banking-system",
        live: null
    }
];

export const experienceData = [
    {
        id: 1,
        company: "Tech Solutions Pvt Ltd",
        position: "Senior Full Stack Developer",
        location: "Bangalore, India",
        period: "Jan 2023 - Present",
        description: "Leading a team of 5 developers in building enterprise applications. Architecting microservices-based solutions and mentoring junior developers.",
        achievements: [
            "Reduced application load time by 40% through optimization",
            "Implemented CI/CD pipeline reducing deployment time by 60%",
            "Mentored 3 junior developers to mid-level positions"
        ]
    },
    {
        id: 2,
        company: "Digital Innovations Inc",
        position: "Full Stack Developer",
        location: "Pune, India",
        period: "Jun 2021 - Dec 2022",
        description: "Developed and maintained multiple client-facing web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        achievements: [
            "Built 5+ full-stack applications from scratch",
            "Improved code quality through implementation of unit testing",
            "Reduced bug reports by 35% through better testing practices"
        ]
    },
    {
        id: 3,
        company: "StartUp Hub",
        position: "Junior Java Developer",
        location: "Mumbai, India",
        period: "Jul 2020 - May 2021",
        description: "Started my career developing RESTful APIs and learning full-stack development. Worked on various modules of the company's main product.",
        achievements: [
            "Developed 20+ RESTful API endpoints",
            "Contributed to core product features",
            "Learned and implemented best coding practices"
        ]
    }
];

export const testimonialsData = [
    {
        id: 1,
        name: "Priya Sharma",
        position: "Project Manager, Tech Solutions",
        content: "Rahul is an exceptional developer with strong technical skills and great team spirit. His ability to solve complex problems is remarkable.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
        id: 2,
        name: "Amit Kumar",
        position: "Lead Developer, Digital Innovations",
        content: "Working with Rahul was a pleasure. His code quality and attention to detail are top-notch. He consistently delivers beyond expectations.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
    }
];