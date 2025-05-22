import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Download, 
  Code, 
  ArrowRight, 
  Sparkles
} from "lucide-react";

export default function ModernPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "achievements", "projects", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Skills data
  const skills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Java", level: 75 },
    { name: "C", level: 75 },
    { name: "DSA", level: 80 },
  ];

  // Projects data
  const projects = [
    {
      title: "Crime Analysis and Reporting System",
      description: "A comprehensive crime analysis and reporting platform for citizens and administrators. Enables secure crime reporting, real-time data visualization, and ML-based severity assessment to help prioritize incident response and policy analysis.",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      tags: ["React", "Flask", "PostgreSQL", "JWT", "ML/AI", "Google Maps API"],
      liveLink: "#",
      demoLink: "#",
      githubLink: "https://github.com/YOUR_USERNAME/Crime-Analysis-System",
      icon: "🛡️",
      features: [
        "Crime reporting with geolocation",
        "ML-based severity assessment",
        "Real-time visualizations",
        "Admin dashboard & analytics",
        "Role-based access control"
      ]
    },
    {
      title: "Quiz Master – Full-Stack Quiz Platform",
      description: "A comprehensive full-stack quiz platform designed for educational institutions. It enables admin to manage subjects, chapters, quizzes, and users. Students can take quizzes, track their results, and download performance reports.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      tags: ["Vue.js", "Flask", "SQLAlchemy", "JWT", "SQLite"],
      liveLink: "https://quiz-master-app-v2-cmtq.vercel.app/",
      demoLink: "https://drive.google.com/file/d/1hDnLcnxtpeggRY0LZjpI2RjDGLNrCXa5/view?usp=sharing",
      githubLink: "https://github.com/23F3001886/Quiz-Master-App-V2",
      icon: "🧠"
    },
    {
      title: "EcoFinds – Sustainable Second-Hand Marketplace",
      description: "A sustainable second-hand marketplace built during Odoo Hackathon 2025. It allows users to buy and sell pre-owned items to promote circular consumption and reduce waste with features like authentication, listings, search & filter.",
      image: "https://images.unsplash.com/photo-1581229876135-99dbf7b53572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      tags: ["React.js", "Tailwind CSS", "Flask", "SQLAlchemy", "JWT"],
      liveLink: "https://odoo-hackathon-2025-eco-finds.vercel.app/",
      demoLink: "https://drive.google.com/drive/folders/11MDgqPUCBOPMf827NDmQ22Oy1wyy4OWG?usp=sharing",
      githubLink: "https://github.com/NITESHBHARDWAJ001/Odoo-Hackathon-2025-EcoFinds",
      icon: "🛍️"
    },
    {
      title: "CleanEarth – Environmental Campaign Portal",
      description: "A digital portal for managing environmental campaigns, volunteer registration, and waste pickup requests. It supports role-based access, interactive dashboards, and campaign lifecycle management designed to increase civic engagement.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React.js", "Tailwind CSS", "Flask", "SQLAlchemy", "JWT"],
      liveLink: "#",
      demoLink: "#",
      githubLink: "https://github.com/YourGitHubUsername/CleanEarth",
      icon: "🌍"
    },
    {
      title: "A-Z Household Service Platform",
      description: "A robust full-stack web application connecting users with household service providers and equipment rental offerings with advanced filtering, booking systems, real-time tracking, admin dashboard, and performance analytics.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Flask", "SQLAlchemy", "SQLite"],
      liveLink: "https://a-z-household-service-81wk.vercel.app/",
      demoLink: "https://drive.google.com/file/d/1cac6VBTJ5gSdRAxygdlgBI88N5af_104/view?usp=sharing",
      githubLink: "https://github.com/yourusername/A-Z-Household-Service",
      icon: "🧰"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 20 ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "py-5 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            <span className="hidden sm:inline">{'<'}</span>
            <span className="font-mono">Nitesh</span>
            <span className="hidden sm:inline">{'/>'}</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {["home", "about", "achievements", "projects", "skills", "contact"].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item 
                    ? "bg-indigo-100 text-indigo-700" 
                    : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-full bg-indigo-50 text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block">
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium py-1 px-3 rounded-full">
                    Available for Hire
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
                  Hi, I'm <br/>
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Nitesh Sharma
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Computer Science student passionate about Data Science and full-stack development. Building innovative solutions with Python, JavaScript, and modern web technologies.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="#contact" 
                    className="btn-primary"
                  >
                    <span>Get in touch</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a 
                    href="#projects" 
                    className="btn-secondary"
                  >
                    View my work
                  </a>
                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://www.linkedin.com/in/nitesh-sharma-5b4115306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/NITESHBHARDWAJ001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:niteshsharmans775@gmail.com"
                    className="social-icon-btn"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/nitesh_bhardwaj0001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-96"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Replace with an actual image or illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-3xl p-1">
                  <div className="bg-gradient-to-br from-white to-indigo-50 h-full w-full rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {/* Profile image container with decorative elements */}
                      <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-[3px]">
                        <div className="bg-white w-full h-full rounded-full overflow-hidden">
                          <img 
                            src="https://res.cloudinary.com/dkhhwbixm/image/upload/v1747916901/WhatsApp_Image_2025-05-22_at_17.09.25_a9fa148f_dptvoj.jpg" 
                            alt="Nitesh Sharma" 
                            className="w-full h-full object-cover object-[40%_20%]"
                          />
                        </div>
                      </div>
                      
                      {/* Decorative floating elements */}
                      <motion.div 
                        className="absolute -top-6 right-10 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shadow-md"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      >
                        <Code className="w-4 h-4 text-purple-600" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -left-4 top-20 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shadow-md"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                      >
                        <Sparkles className="w-5 h-5 text-indigo-600" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute bottom-5 -right-6 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                      >
                        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Tech stack bubbles */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {["Python", "C++", "Java", "Flask"].map((tech, i) => (
                    <motion.div 
                      key={tech}
                      className="bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-indigo-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">About Me</h2>
              <p className="text-lg text-gray-600 mt-4">
                I am a Computer Science student with a strong interest in Data Science and web development. 
                Currently pursuing a B.Tech in CS and a BS in Data Science from IITM, I'm passionate about creating elegant solutions to complex problems.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Education */}
              <motion.div 
                className="border border-indigo-100 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-3 bg-indigo-100 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3" />
                    <rect x="4" y="15" width="16" height="4" rx="2" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-indigo-200 pl-4">
                    <h4 className="font-medium text-gray-800">B.Tech in Computer Science</h4>
                    <p className="text-sm text-gray-500">SIET Nilokheri, 2023-2027</p>
                    <p className="text-sm text-gray-600 mt-1">Currently pursuing</p>
                  </div>
                  <div className="border-l-2 border-indigo-200 pl-4">
                    <h4 className="font-medium text-gray-800">BS in Data Science</h4>
                    <p className="text-sm text-gray-500">IITM</p>
                    <p className="text-sm text-gray-600 mt-1">Completed foundation level, almost completed diploma in programming</p>
                  </div>
                  <div className="border-l-2 border-indigo-200 pl-4">
                    <h4 className="font-medium text-gray-800">12th Standard</h4>
                    <p className="text-sm text-gray-500">Government Model Sanskriti Senior Secondary School, Bilaspur</p>
                    <p className="text-sm text-gray-600 mt-1">Physics, Chemistry, Math, Biology, Hindi, English - Score: 89%</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div 
                className="border border-indigo-100 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-3 bg-purple-100 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 2v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18" />
                    <circle cx="18" cy="18" r="3" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 15v3l2 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h4 className="font-medium text-gray-800">Concepts</h4>
                    <p className="text-sm text-gray-600 mt-1">DBMS, Operating Systems, Data Structures & Algorithms, Design & Analysis of Algorithms, Object-Oriented Programming</p>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h4 className="font-medium text-gray-800">Frameworks</h4>
                    <p className="text-sm text-gray-600 mt-1">Flask, React, Vue, Express</p>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h4 className="font-medium text-gray-800">Databases</h4>
                    <p className="text-sm text-gray-600 mt-1">MongoDB, SQLite3</p>
                  </div>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div 
                className="border border-indigo-100 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-3 bg-blue-100 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0l-4-4m4 4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Achievements</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>BS in Data Science from IITM (in progress)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Active on LeetCode and HackerRank</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>89% score in 12th standard with PCM, Biology, English, Hindi</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/src/assets/Nitesh_Sharma_Resume (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Nitesh_Sharma_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-white border border-indigo-300 rounded-full text-indigo-700 hover:bg-indigo-50 transition-colors duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Download Full Resume</span>
              </a>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 bg-gradient-to-br from-indigo-50/80 to-purple-50/80">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Achievements</h2>
              <p className="text-lg text-gray-600 mt-4">
                Highlights of my academic excellence and innovation in hackathons and competitions.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* NDA Exam Card */}
              <motion.div
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="achievement-icon bg-blue-100 text-blue-700">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="achievement-content">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    NDA Exam Qualified – 3 Times
                    <motion.span 
                      className="ml-2 text-blue-600 text-sm bg-blue-100 rounded-full px-2 py-0.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      3×
                    </motion.span>
                  </h3>
                  <p className="text-gray-600">
                    Consistently cleared the <strong>National Defence Academy (NDA)</strong> written exam three times, demonstrating strong aptitude and academic excellence.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="md:col-span-2"
              >
                <div className="border-b border-gray-200 mb-6 pb-2">
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                    <span className="mr-2 text-xl">💻</span>
                    Hackathon Participation & Recognitions
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div 
                    className="achievement-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="achievement-icon bg-green-100 text-green-700">
                      <span className="text-2xl">🥇</span>
                    </div>
                    <div className="achievement-content">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Hackelipse Hackathon – Top 20 Finalist</h3>
                      <p className="text-gray-600">
                        Selected in the <strong>Top 20 teams out of 100+ entries</strong> in this national-level offline hackathon. Successfully pitched and built a project under time-bound innovation challenges.
                      </p>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Top 20 of 100+
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="achievement-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="achievement-icon bg-purple-100 text-purple-700">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="achievement-content">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Odoo Hackathon 2025 – Top 50</h3>
                      <p className="text-gray-600">
                        Our team was shortlisted in the <strong>Top 50</strong> during Round One from over <strong>850+ entries</strong>. Developed a full-fledged marketplace app (<em>EcoFinds</em>) to promote sustainable e-commerce.
                      </p>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Top 50 of 850+
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="achievement-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="achievement-icon bg-amber-100 text-amber-700">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <div className="achievement-content">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Another Online Hackathon</h3>
                      <p className="text-gray-600">
                        Took part in a virtual hackathon to collaborate and innovate on real-world problems using full-stack development tools.
                      </p>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Participant
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-lg text-gray-600 mt-4">
                Here are some of the projects I've developed. Each one represents a unique problem-solving approach using different technology stacks and demonstrates my versatility as a developer.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className={`project-card bg-white rounded-2xl overflow-hidden border ${index === 0 ? 'border-indigo-200' : 'border-gray-100'} shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] ${index === 0 ? 'md:col-span-2' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`project-icon ${index === 0 ? 'bg-indigo-100 text-indigo-700' : 'bg-white/80'}`}>
                      {project.icon}
                    </div>
                    {index === 0 && (
                      <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Featured Project
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className={`text-xs font-medium ${index === 0 ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-50 text-indigo-700'} py-1 px-2 rounded-md`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.icon} {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>

                    {index === 0 && (
                      <div className="grid md:grid-cols-2 gap-4 my-4">
                        <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                          <h4 className="text-sm font-semibold text-indigo-700 mb-2">For Citizens</h4>
                          <ul className="text-xs space-y-1">
                            <li className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              Submit reports with geolocation
                            </li>
                            <li className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              View local crime maps & hotspots
                            </li>
                            <li className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              Track report status & notifications
                            </li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                          <h4 className="text-sm font-semibold text-blue-700 mb-2">For Admins</h4>
                          <ul className="text-xs space-y-1">
                            <li className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              Manage & prioritize reports
                            </li>
                            <li className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              Analyze trends using ML
                            </li>
                            <li className="flex items-start">
                              <svg className="w-3 h-3 text-green-500 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              Full user & role management
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Features list for crime analysis project */}
                    {project.features && index === 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Future Enhancements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full">Real-time alerts</span>
                          <span className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full">Law enforcement integration</span>
                          <span className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full">Mobile app development</span>
                          <span className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full">Predictive analytics</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> 
                        Live Site
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-green-600 hover:text-green-800 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo Video
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center"
                      >
                        <Github className="w-4 h-4 mr-1" /> 
                        Repository
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://github.com/NITESHBHARDWAJ001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View All Projects on GitHub
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">My Skills</h2>
              <p className="text-lg text-gray-600 mt-4">
                I've worked with a variety of technologies and frameworks. Here's a glimpse of my technical expertise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Proficiency</h3>
                
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tools & Technologies</h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Python", icon: "devicon-python-plain colored" },
                    { name: "C++", icon: "devicon-cplusplus-plain colored" },
                    { name: "React", icon: "devicon-react-original colored" },
                    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
                    { name: "Flask", icon: "devicon-flask-original colored" },
                    { name: "Vue", icon: "devicon-vuejs-plain colored" },
                    { name: "Express", icon: "devicon-express-original colored" },
                    { name: "SQLite", icon: "devicon-sqlite-plain colored" },
                  ].map((tool) => (
                    <motion.div 
                      key={tool.name}
                      className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        {/* This uses devicon - add a link to the CSS in your index.html */}
                        <i className={`${tool.icon} text-3xl`}></i>
                        
                        {/* Fallback icon if devicons aren't loaded */}
                        <div className="hidden">
                          <Code className="w-8 h-8 text-indigo-600" />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Coding Profiles */}
            <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Coding Profiles</h3>
              <p className="text-center text-gray-600 mb-8 text-sm">Check out my badges and achievements across various coding platforms</p>
              <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <img 
                      src="https://hrcdn.net/fcore/assets/work/header/hackerrank_logo-21e2867566.svg" 
                      alt="HackerRank" 
                      className="h-16 mb-4 bg-white p-2 rounded" 
                    />
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-0.5">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4★</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-600 text-white text-sm font-medium py-1 px-3 rounded-md mb-4 flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    Problem Solving
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-green-100 rounded-md p-2 text-center">
                      <div className="text-lg font-bold text-green-800">90%</div>
                      <div className="text-xs text-green-700">DSA</div>
                    </div>
                    <div className="bg-green-100 rounded-md p-2 text-center">
                      <div className="text-lg font-bold text-green-800">85%</div>
                      <div className="text-xs text-green-700">Algorithms</div>
                    </div>
                  </div>
                  
                  <a href="https://www.hackerrank.com/profile/23f3001886" target="_blank" rel="noopener noreferrer" className="text-indigo-600 mt-4 text-sm hover:text-indigo-800">
                    View Profile →
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="relative">
                    <img 
                      src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg" 
                      alt="LeetCode" 
                      className="h-16 mb-4 bg-white p-2 rounded" 
                    />
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-yellow-500 text-white text-xs font-bold py-0.5 px-2 rounded-md">
                        Active
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-100 rounded-md py-1 px-4 text-sm font-medium text-yellow-800 mb-4">
                    NITESH_SHARMA001
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">65+</div>
                      <div className="text-xs text-gray-600">Problems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">80%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                  </div>
                  
                  <a href="https://leetcode.com/u/NITESH_SHARMA001/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 mt-4 text-sm hover:text-indigo-800">
                    View Profile →
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative">
                    <img 
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                      alt="GitHub" 
                      className="h-16 mb-4" 
                    />
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-gray-800 text-white text-xs font-bold py-0.5 px-2 rounded-md">
                        Active
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 text-white py-1 px-3 text-sm font-mono rounded-md mb-4">
                    @NITESHBHARDWAJ001
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800">15+</div>
                      <div className="text-xs text-gray-600">Repos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">100+</div>
                      <div className="text-xs text-gray-600">Commits</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">5+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  
                  <a href="https://github.com/NITESHBHARDWAJ001" target="_blank" rel="noopener noreferrer" className="text-indigo-600 mt-4 text-sm hover:text-indigo-800">
                    View Profile →
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50/80 to-purple-50/80">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-lg text-gray-600 mt-4">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-5 gap-10">
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
                <p className="text-gray-600">
                  Feel free to reach out through any of the following channels. I'm always open to discussing new projects, opportunities, or collaborations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700 mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <a href="mailto:niteshsharmans775@gmail.com" className="text-indigo-600 hover:text-indigo-800">niteshsharmans775@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700 mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">9671881556</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700 mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Location</h4>
                      <p className="text-gray-600">Yamunanagar, Haryana, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium text-gray-800 mb-3">Connect on social media</h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.linkedin.com/in/nitesh-sharma-5b4115306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-600 hover:text-indigo-700 hover:border-indigo-300 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/NITESHBHARDWAJ001" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-600 hover:text-indigo-700 hover:border-indigo-300 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://instagram.com/nitesh_bhardwaj0001" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-600 hover:text-indigo-700 hover:border-indigo-300 transition-colors duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interested in Collaboration?</h3>
                <div className="bg-indigo-50 p-6 rounded-xl mb-6 border border-indigo-100">
                  <p className="text-gray-700 mb-4">
                    If you're interested in collaboration or want me to build a project for you, please fill out the Google Form below. I'll reach out to you as soon as possible to discuss how we can work together to make your ideas a reality.
                  </p>
                  
                  <div className="bg-white p-5 rounded-lg border border-indigo-200 mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      What I can help you with:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Full-stack web application development</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Data science projects and machine learning models</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Technical consultation and problem-solving</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a 
                    href="https://forms.gle/ew34HM4nH6JdGeHv6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                    Fill Out Project Request Form
                  </a>
                  
                  <p className="text-sm text-gray-500 text-center mt-3">
                    I'll reach out to you as soon as possible after receiving your submission.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <span className="font-mono">{'<'}</span>
                Nitesh
                <span className="font-mono">{'/>'}</span>
              </div>
              <p className="text-gray-400">Building exceptional digital experiences</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/nitesh-sharma-5b4115306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/NITESHBHARDWAJ001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/nitesh_bhardwaj0001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:niteshsharmans775@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <hr className="border-gray-800 my-8" />
          
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nitesh Sharma. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        .section-title {
          @apply text-3xl font-bold text-gray-800;
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          width: 50px;
          height: 4px;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          border-radius: 2px;
        }
        
        .btn-primary {
          @apply inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg;
        }
        
        .btn-secondary {
          @apply inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-full border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-colors duration-300 shadow-sm hover:shadow-md;
        }
        
        .project-icon {
          @apply absolute top-3 right-3 text-3xl w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-md transition-transform duration-300;
          transform: rotate(0deg);
        }
        
        .project-card:hover .project-icon {
          transform: rotate(10deg) scale(1.1);
        }
        
        .social-icon-btn {
          @apply p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-700 hover:text-indigo-600;
        }
        
        .achievement-card {
          @apply relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200 flex;
        }
        
        .achievement-icon {
          @apply flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4;
        }
        
        .achievement-content {
          @apply flex-grow;
        }
      `}</style>
    </div>
  );
}
