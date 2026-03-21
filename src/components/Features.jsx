import React from 'react';
import { Settings, MonitorPlay, GraduationCap, FolderGit2, Award, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'SKILLS',
    path: '/skills',
    icon: <Settings className="text-[#15796b]" size={36} />,
    items: ['Programming', 'Web Development', 'Tools & Technologies'],
  },
  {
    title: 'TRAINING',
    path: '/training',
    icon: <MonitorPlay className="text-[#51b36d]" size={36} />,
    items: ['Online Courses', 'Workshops & Internships', 'Training Programs'],
  },
  {
    title: 'EDUCATION',
    path: '/education',
    icon: <GraduationCap className="text-[#3197be]" size={36} />,
    items: ['Academic Background', 'Degrees & Institutions', 'Achievements'],
  },
  {
    title: 'PROJECTS',
    path: '/projects',
    icon: <FolderGit2 className="text-[#15796b]" size={36} />,
    items: ['Live Projects', 'Case Studies', 'Source Code'],
  },
  {
    title: 'CERTIFICATES',
    path: '/certificates',
    icon: <Award className="text-[#e28b48]" size={36} />,
    items: ['Professional Certifications', 'Courses & Exams', 'Achievements'],
  },
  {
    title: 'ACHIEVEMENTS',
    path: '/achievements',
    icon: <Trophy className="text-[#e8b23a]" size={36} />,
    items: ['Awards & Honors', 'Competitions', 'Milestones'],
  },
];

const FeatureCards = () => {
  return (
    <section id="features" className="py-10 px-6 max-w-[1300px] mx-auto z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[24px] p-8 flex flex-col items-center relative pt-10 pb-16 bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl border border-white/50 dark:border-white/5 hover:border-[#68c6b7]/50 dark:hover:border-[#20A274]/40 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(36,157,139,0.15)] dark:hover:shadow-[0_0_30px_rgba(32,162,116,0.15)] group"
          >
            {/* Top decorative elements per card */}
            <div className="absolute top-6 border border-b-0 right-8 w-2 h-2 bg-[#3197be] rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -left-3 w-4 h-4 bg-[#e2f2f3] rotate-45"></div>

            <div className="mb-6 p-4 rounded-[16px] flex items-center justify-center">
              {card.icon}
            </div>

            <h3 className="text-[17px] font-[900] text-[#2A3B4C] dark:text-gray-100 tracking-[0.1em] mb-6">
              {card.title}
            </h3>

            <ul className="space-y-4 w-full px-4 mb-8">
              {card.items.map((item, i) => (
                <li key={i} className="text-[#556987] dark:text-gray-300 font-[600] text-[15px] flex items-center bullet-dot pl-5 leading-tight tracking-[0.01em]">
                  {item}
                </li>
              ))}
            </ul>

            <Link 
              to={card.path}
              className="absolute -bottom-6 bg-gradient-to-r from-[#68c6b7] to-[#51b36d] dark:from-[#1C8F65] dark:to-[#20A274] text-white px-8 py-3.5 rounded-full font-[800] flex items-center justify-center gap-2 shadow-[0_8px_20px_-6px_rgba(36,157,139,0.5)] dark:shadow-[0_0_15px_rgba(32,162,116,0.3)] opacity-90 hover:opacity-100 hover:scale-105 transition-all w-[65%] max-w-[200px] text-[13px] tracking-wider z-10 border border-white/20"
            >
              LEARN MORE <ChevronRight size={16} strokeWidth={3} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
