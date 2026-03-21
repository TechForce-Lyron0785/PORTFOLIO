import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, ExternalLink, Heart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Mail size={20} />, label: "Email", href: "mailto:himanshushekharon@gmail.com", color: "hover:text-[#20A274]" },
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/himanshushekharon", color: "hover:text-white" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/himanshu-shekhar-38342029a", color: "hover:text-[#0077b5]" },
  ];

  return (
    <footer className="w-full bg-white/40 dark:bg-[#070e17]/80 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800/60 relative z-20 pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* LEFT: Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C8F65] to-[#20A274] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#20A274]/20 group-hover:scale-110 transition-transform duration-300">
                H
              </div>
              <span className="text-2xl font-black text-[#2A3B4C] dark:text-white tracking-tight">
                Himanshu <span className="bg-gradient-to-r from-[#20A274] to-[#1C8F65] text-transparent bg-clip-text">Shekhar</span>
              </span>
            </div>
            <p className="text-[#556987] dark:text-gray-400 font-bold text-[15px] leading-relaxed max-w-[280px]">
              Full Stack Developer | Problem Solver
              <br />
              Building scalable, high-performance web applications with clean code.
            </p>
          </div>

          {/* MIDDLE: Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-black text-[#2A3B4C] dark:text-white uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#20A274]"></span> Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path}
                    className="text-[#556987] dark:text-gray-400 font-bold text-[15px] hover:text-[#20A274] dark:hover:text-[#20A274] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1.5px] bg-[#20A274] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE: Extra Section (Services/Focus) */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-black text-[#2A3B4C] dark:text-white uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#3197be]"></span> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Python'].map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-gray-50/50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 text-[12px] font-black text-[#556987] dark:text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-black text-[#2A3B4C] dark:text-white uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#20A274]"></span> Connect
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-[#556987] dark:text-gray-400 font-bold text-[15px] ${social.color} transition-all duration-300 group`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(32,162,116,0.1)] transition-all duration-300">
                    {social.icon}
                  </div>
                  <span>{social.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-[700] text-[#819ab7] dark:text-gray-500 tracking-wide text-center md:text-left">
            © {currentYear} Himanshu Shekhar Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] font-[800] text-[#556987] dark:text-gray-400">
            <span>Built with</span>
            <span className="text-[#20A274] animate-pulse"><Heart size={16} fill="currentColor" /></span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
