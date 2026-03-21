import React, { useState } from 'react';
import { Github, ExternalLink, Play, Layers, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import fastshowImg from '../assets/fastshow_ui.jpg';
import disksimImg from '../assets/disksim.png';
import translateImg from '../assets/translate.png';
import quizzardImg from '../assets/quizzard.png';
import zentasksImg from '../assets/zentasks.png';
import portfolioImg from '../assets/portfolio_v1.png';
import artFindingImg from '../assets/art_finding.png';
import sprintPlansImg from '../assets/sprint_plans.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const projectList = [
    {
      title: "CineBook / FastShow",
      subtitle: "ONLINE MOVIE TICKET BOOKING SYSTEM",
      description: "Modern web app for booking movie tickets with seat selection and smooth UI. Allows users to choose cities, movies, and book their favorite seats instantly.",
      tech: ["HTML5", "CSS3", "JAVASCRIPT"],
      status: "IN PROGRESS",
      github: "https://github.com/himanshushekharon/Quizzard",
      live: "#",
      image: fastshowImg,
      category: "Frontend"
    },
    {
      title: "Disk Scheduling Simulator",
      subtitle: "INTERACTIVE ALGORITHMS VISUALIZER",
      description: "Interactive web-based simulator to visualize disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN) with real-time seek time calculation and graphical representation for better understanding.",
      tech: ["HTML5", "CSS3", "JAVASCRIPT", "CHART.JS"],
      status: "COMPLETED",
      github: "https://github.com/himanshushekharon/project_CSE316",
      live: "https://himanshushekharon.github.io/Project_CSE316/",
      image: disksimImg,
      category: "Frontend"
    },
    {
      title: "Quick Translate",
      subtitle: "MERN STACK TRANSLATION APP",
      description: "Full-stack MERN application for real-time language translation with searchable language selection and temporary history system.",
      tech: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "THREE.JS", "VITE"],
      status: "COMPLETED",
      github: "https://github.com/himanshushekharon/Quick-Translate",
      live: "https://quick-translate-teal.vercel.app/",
      image: translateImg,
      category: "Full Stack"
    },
    {
      title: "Quizzard – Management System",
      subtitle: "PHP QUIZ MANAGEMENT DASHBOARD",
      description: "PHP-based web application for creating, managing, and taking quizzes with an organized dashboard for test evaluation and user management.",
      tech: ["PHP", "SCSS", "CSS", "JAVASCRIPT"],
      status: "COMPLETED",
      github: "https://github.com/himanshushekharon/Quizzard",
      live: "#",
      image: quizzardImg,
      category: "Backend"
    },
    {
      title: "Zen Tasks – Productivity Hub",
      subtitle: "SAAS PRODUCTIVITY DASHBOARD",
      description: "SaaS-inspired productivity dashboard with real-time task analytics, priority management, and smooth UI animations, designed for efficient daily workflow management.",
      tech: ["REACT.JS", "VITE", "FRAMER MOTION", "CSS", "LOCALSTORAGE"],
      status: "COMPLETED",
      github: "https://github.com/himanshushekharon/TodoList",
      live: "https://himanshushekharon.github.io/TodoList/",
      image: zentasksImg,
      category: "Frontend"
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "MODERN REACT & TAILWIND SHOWCASE",
      description: "Modern responsive portfolio built with React and Tailwind CSS to showcase projects, skills, and achievements with clean UI and smooth animations.",
      tech: ["REACT.JS", "TYPESCRIPT", "VITE", "TAILWIND CSS", "LUCIDE ICONS"],
      status: "COMPLETED",
      github: "https://github.com/himanshushekharon/portfolio",
      live: "https://portfolio-ten-teal-ccubya4uce.vercel.app",
      image: portfolioImg,
      category: "Frontend"
    },
    {
      title: "The Art of Finding",
      subtitle: "ART DISCOVERY & MAPPING APP",
      description: "Interactive web app to discover artworks by famous artists and visualize their real-world locations using maps and APIs.",
      tech: ["JAVASCRIPT", "JQUERY", "MATERIALIZE CSS", "GOOGLE MAPS API", "ARTSY API"],
      status: "COMPLETED",
      github: "https://github.com/himanshushekharon/The-Art-of-Finding",
      live: "https://himanshushekharon.github.io/The-Art-of-Finding/",
      image: artFindingImg,
      category: "Frontend"
    },
    {
      title: "Sprint Plans – Collaboration",
      subtitle: "FULL-STACK PROJECT MANAGEMENT",
      description: "Full-stack project management and collaboration platform with real-time dashboards, secure authentication, and modern SaaS UI.",
      tech: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "JWT", "BCRYPT", "FRAMER MOTION"],
      status: "IN PROGRESS",
      github: "https://github.com/himanshushekharon/Sprint-Plans",
      live: "#",
      image: sprintPlansImg,
      category: "Full Stack"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projectList 
    : projectList.filter(proj => proj.category === selectedCategory);

  return (
    <section className="pt-32 pb-20 px-6 relative w-full min-h-screen flex flex-col items-center z-10 overflow-hidden">
      
      {/* Background Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20A274]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3197be]/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 opacity-20"></div>

      {/* Page Header */}
      <div className="text-center mb-12 relative w-full flex flex-col items-center px-4">
        <h2 className="text-[48px] md:text-[60px] font-[950] text-[#2A3B4C] dark:text-gray-100 tracking-[-0.03em] leading-[1.1] drop-shadow-md mb-6">
          My <span className="bg-gradient-to-r from-[#1C8F65] via-[#20A274] to-[#3197be] text-transparent bg-clip-text">Projects</span>
        </h2>
        <p className="text-[#556987] dark:text-gray-400 text-[18px] font-medium leading-[1.6] max-w-[650px]">
          Explore my work and real-world applications I’ve built that tackle complex problems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-8 py-3 rounded-full text-[14px] font-[800] tracking-tight transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#1C8F65] via-[#20A274] to-[#3197be] text-white shadow-[0_10px_20px_-5px_rgba(32,162,116,0.35)]'
                : 'bg-black/5 dark:bg-white/5 text-[#556987] dark:text-gray-400 border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-lg'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-4 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title + index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col rounded-[32px] overflow-hidden shadow-2xl bg-[#EBEBEB] dark:bg-[#EBEBEB] transform hover:-translate-y-2 transition-all duration-500 group"
            >
              
              {/* Top Image Section */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                
                {/* Status Badge */}
                <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    (project.live !== '#' && project.status === 'COMPLETED') || project.status === 'LIVE' 
                      ? 'bg-[#20A274] shadow-[0_0_8px_#20A274]' 
                      : project.status === 'IN PROGRESS' 
                        ? 'bg-orange-500 shadow-[0_0_8px_#f97316]'
                        : 'bg-blue-400'
                  }`}></div>
                  {project.live !== '#' && (project.status === 'COMPLETED' || project.status === 'LIVE') ? 'LIVE' : project.status}
                </div>

                {/* Category Badge */}
                <div className="absolute top-5 right-5 z-20 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-black tracking-widest uppercase flex items-center gap-1.5 ring-1 ring-white/5">
                  <Layers size={10} className="text-[#20A274]" />
                  {project.category}
                </div>

                {/* Action Icons Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[4px]">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:text-[#20A274] hover:bg-white/20 transition-all shadow-2xl hover:scale-110 transform"
                    title="View GitHub Repository"
                  >
                    <Github size={24} strokeWidth={2.5} />
                  </a>
                  
                  {(project.status === 'COMPLETED' || project.status === 'LIVE') && project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:text-[#20A274] hover:bg-white/20 transition-all shadow-2xl hover:scale-110 transform"
                      title="View Live Demo"
                    >
                      <ExternalLink size={24} strokeWidth={2.5} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section (White Background like Reference) */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[26px] font-[900] text-[#1a1a1a] mb-1">
                  {project.title}
                </h3>
                <p className="text-[#15796b] dark:text-[#5FB3A7] font-[800] text-[12px] tracking-widest uppercase mb-4">
                  {project.subtitle}
                </p>
                
                <p className="text-[#4a4a4a] text-[15px] font-medium leading-[1.6] mb-8 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-black/5">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-black/5 text-[#4a4a4a] text-[11px] font-black tracking-tight border border-black/5 hover:bg-black/10 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

    </section>
  );
};

export default Projects;
