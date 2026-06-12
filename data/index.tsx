import React from "react";
import { Trophy, Medal, Award, CheckCircle, Rocket, FileBadge } from "lucide-react";

// 1. HERO ROLES
export const HERO_ROLES = [
  "Aspiring Full-Stack Developer",
  "UI/UX Designer",
  "Front-end Developer",
  "Python Developer",
  "Editor"
];

// 2. MARQUEE TECH STACK
export const MARQUEE_TECH = [
  "Vanilla JS", "React", "Next.js", "Firebase", "Python", 
  "Flask", "AI", "Tailwind", "MongoDB", "OpenCV"
];

// 3. SKILLS FALLBACKS
export const SKILLS_DBMS = ["PostgreSQL", "MongoDB", "MySQL"];
export const SKILLS_TOOLS = ["Git", "GitHub", "VS Code", "Docker", "Render"];

// 4. EDUCATION DATA
export const EDUCATION_DATA = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Coimbatore Institute of Engineering and Technology",
    date: "2024 – Present",
    points: [
      "Pursuing a Bachelor's degree in Computer Science and Engineering.",
      "Building expertise in Full Stack Development, Artificial Intelligence, Machine Learning, and Software Engineering.",
      "Actively participating in hackathons, technical events, workshops, and project-based learning."
    ],
    dotColor: "bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.8)]",
    subColor: "text-sky-500 dark:text-sky-400",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Vidya Vikasini Matric Higher Secondary School",
    date: "Completed",
    points: [
      "Completed Higher Secondary Education (12th Standard).",
      "Developed a strong foundation in Mathematics and Computer Science."
    ],
    dotColor: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    subColor: "text-purple-500 dark:text-purple-400",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Vidya Vikasini Matric Higher Secondary School",
    date: "Completed",
    points: [
      "Completed Secondary School Education (10th Standard).",
      "Established core academic and analytical skills."
    ],
    dotColor: "bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]",
    subColor: "text-teal-500 dark:text-teal-400",
  }
];

// 5. EXPERIENCE DATA
export const EXPERIENCE_DATA = [
  {
    role: "AI/ML Intern",
    company: "Nxtlogic Software Solutions",
    date: "June 2025 – July 2025",
    points: [
      "Successfully completed an AI/ML internship focused on practical machine learning concepts and applications.",
      "Strengthened programming, analytical thinking, and problem-solving abilities through hands-on tasks.",
      "Worked alongside industry professionals and gained exposure to real-world software development practices.",
      "Developed a deeper understanding of Artificial Intelligence and Machine Learning workflows."
    ],
    dotColor: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    subColor: "text-purple-500 dark:text-purple-400",
  },
  {
    role: "Student Developer",
    company: "Independent Projects",
    date: "2024 – Present",
    points: [
      "Developing academic and personal projects using modern web technologies.",
      "Building full-stack applications using React, Firebase, JavaScript, and Python.",
      "Exploring AI integration in web applications and real-world software solutions.",
      "Continuously improving software design, debugging, and development skills."
    ],
    dotColor: "bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.8)]",
    subColor: "text-sky-500 dark:text-sky-400",
  },
  {
    role: "Technical Learning & Industry Exposure",
    company: "Workshops & Events",
    date: "Ongoing",
    points: [
      "Attended technical workshops, seminars, and industry events to stay updated with emerging technologies.",
      "Participated in AI, Web Development, and Software Engineering learning programs.",
      "Attended NVIDIA RTX AI PC Day and explored Generative AI workflows, RTX acceleration, and modern GPU technologies.",
      "Engaged in hands-on learning experiences involving AI tools, creative workflows, and real-time rendering technologies."
    ],
    dotColor: "bg-emerald-500 shadow-[0_0_15px_rgba(244,63,94,0.8)]",
    subColor: "text-emerald-500 dark:text-emerald-400",
  }
];

// 6. ACHIEVEMENTS DATA
export const ACHIEVEMENTS_DATA = [
  {
    title: "1st Place – TECHNOVIBES",
    subtitle: "FoodLink – Surplus Food Platform",
    icon: <Trophy size={22} className="text-sky-500" />,
    badge: "1st Prize",
    points: [
      "Secured 1st Prize at TECHNOVIBES Hackathon.",
      "Developed FoodLink to connect surplus food with those in need.",
      "Collaborated to build a tech-driven social impact solution."
    ],
    tags: ["Social Impact", "Web Dev"]
  },
  {
    title: "Runner-Up – National Hackathon",
    subtitle: "PRISM – Intelligent Code Evaluation",
    icon: <Medal size={22} className="text-sky-500" />,
    badge: "Runner-Up",
    points: [
      "Runner-Up in a 24-Hour National-Level Hackathon.",
      "Built PRISM, an automated HTML/CSS/JS code evaluation tool.",
      "Delivered a working solution under strict 24-hour constraints."
    ],
    tags: ["24-Hour", "AI/ML"]
  },
  {
    title: "Technical Champion",
    subtitle: "Multiple Competitions",
    icon: <CheckCircle size={22} className="text-sky-500" />,
    badge: "Champion",
    points: [
      "Won multiple CS and technology-based competitions.",
      "Consistent top performer in technical innovation challenges."
    ],
    tags: ["0xDebug", "VibeCoding", "UI Glow-Up"]
  },
  {
    title: "Hackathons & Innovation",
    subtitle: "Continuous Participation",
    icon: <Rocket size={22} className="text-sky-500" />,
    badge: "5+ Events",
    points: [
      "Participated in 5+ multi-domain Hackathons.",
      "Built solutions spanning AI, Web Dev, and UI/UX."
    ],
    tags: ["Web Dev", "AI", "UI/UX"]
  },
  {
    title: "Certifications",
    subtitle: "NPTEL & Industry Courses",
    icon: <FileBadge size={22} className="text-sky-500" />,
    badge: "Certified",
    points: [
      "Completed NPTEL technology certifications.",
      "Pursuing industry-recognized courses for continuous learning."
    ],
    tags: ["NPTEL", "Learning"]
  }
];

// 7. GLOBAL PORTFOLIO DATA
export const PORTFOLIO_DATA = {
  hero: {
    name: "Sri Ram M",
    role: "Aspiring Full-Stack Developer",
    intro: "Computer Science student driven by curiosity, innovation, and continuous growth. Developing impactful software solutions with modern web technologies and AI.",
    status: "Building innovative software solutions inspired by real-world business challenges."
  },
  about: {
    heading: "About Me",
    content: [
      "I am currently pursuing my undergraduate degree in Computer Science Engineering at Coimbatore Institute of Engineering and Technology.",
      "My goal is to become a proficient full-stack developer and contribute to innovative projects in a highly reputed organization.",
      "I am passionate about learning new technologies and continuously improving my skills to excel in the dynamic field of software development.",
      "Beyond technical development, I bring an eye for UI/UX design, photography, and editing to create seamless, interactive digital experiences."
    ]
  },
  skills: {
    frontend: ["ReactJS", "UI/UX Designer", "Front-end Web Developer", "HTML/CSS/JS", "Tailwind css"],
    backend: ["Node.js", "Express.js", "Puppeteer"],
    ai: ["Gemini API", "Ollama", "AI Agents"],
    dbms: SKILLS_DBMS,
    tools: SKILLS_TOOLS
  },
  projects: [
    {
      title: "Stocx",
      description: "An intelligent, modern Inventory Management and POS Billing System designed to streamline business operations, automate data entry, and provide centralized tracking.",
      features: ["AI-Powered Inventory", "High-Speed POS", "CRM & Ledger", "Secure Analytics"],
      stack: ["Flask", "MongoDB", "Tailwind CSS", "Authentication", "Gemini API"],
      github: "https://github.com/Ram-1922/Stocx_AI-Powered-Retail-Business-Management-System", // UPDATE THESE LINKS
      live: "https://stocx-ai-powered-retail-business-t5p2.onrender.com"
    },
    {
      title: "Agent Forge",
      description: "A comprehensive platform for building custom AI agents featuring persistent memory and an integrated knowledge base system.",
      features: ["Custom AI Agents", "Persistent Memory", "Interactive UI/UX Workflow"],
      stack: ["Ollama", "ReactJS"],
      github: "https://github.com/Ram-1922/Agent_Forge", // UPDATE THESE LINKS
      live: "https://agent-forge-becc.onrender.com/"
    },
    {
      title: "PRISM",
      description: "An automated frontend evaluation system leveraging pixel-based rendering and the Gemini API for intelligent scoring.",
      features: ["Pixel-Based Rendering", "Automated UI Comparison", "Intelligent Scoring"],
      stack: ["Node.js", "Puppeteer", "Gemini API"],
      github: "https://github.com/Ram-1922/Amypo_PRISM", // UPDATE THESE LINKS
      live: "#"
    }
  ],
  contact: {
    phone: "+91 7558105166",
    email: "srir42194@gmail.com"
  }
};