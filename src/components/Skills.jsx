import React, { useState } from 'react';

const getIcon = (url, fallback) => {
  return <img src={url} alt={fallback} className="w-10 h-10 object-contain drop-shadow-sm" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />;
};

const skillsData = [
  // Languages
  { category: 'Languages', name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { category: 'Languages', name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { category: 'Languages', name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { category: 'Languages', name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { category: 'Languages', name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },

  // Frontend
  { category: 'Frontend', name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { category: 'Frontend', name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { category: 'Frontend', name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { category: 'Frontend', name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { category: 'Frontend', name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { category: 'Frontend', name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },

  // Backend
  { category: 'Backend', name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { category: 'Backend', name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { category: 'Backend', name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  { category: 'Backend', name: 'REST APIs', icon: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png' },

  // Databases
  { category: 'Databases', name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { category: 'Databases', name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { category: 'Databases', name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { category: 'Databases', name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { category: 'Databases', name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },

  // Cloud & DevOps
  { category: 'Cloud & DevOps', name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { category: 'Cloud & DevOps', name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
  { category: 'Cloud & DevOps', name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { category: 'Cloud & DevOps', name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { category: 'Cloud & DevOps', name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { category: 'Cloud & DevOps', name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },

  // Testing & Architecture
  { category: 'Tools & Core', name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
  { category: 'Tools & Core', name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg' },
  { category: 'Tools & Core', name: 'Microservices', icon: 'https://cdn-icons-png.flaticon.com/512/7991/7991055.png' },
  { category: 'Tools & Core', name: 'JWT / OAuth2', icon: 'https://cdn-icons-png.flaticon.com/512/6911/6911701.png' },
  { category: 'Tools & Core', name: 'OWASP Security', icon: 'https://cdn-icons-png.flaticon.com/512/2092/2092757.png' },
];

const categories = ['All', 'Frontend', 'Backend', 'Languages', 'Databases', 'Cloud & DevOps', 'Tools & Core'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = skillsData.filter(skill =>
    activeCategory === 'All' ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="pt-24 pb-16 px-6 relative w-full flex flex-col items-center z-10">
      <div className="text-center mb-12 relative w-full flex flex-col items-center">
        <h2 className="text-[44px] md:text-[54px] font-[900] text-[#2A3B4C] dark:text-gray-100 tracking-[-0.02em]">
          Technical <span className="gradient-text-teal">Arsenal</span>
        </h2>
        <p className="mt-4 text-[#556987] dark:text-gray-300 text-[17px] font-[500] leading-[1.6] text-center max-w-[500px]">
          Showcasing my skills, tools, and technologies that drive impactful development.
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-3 h-3 bg-[#15796b] rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-[#3197be] rounded-full opacity-60"></div>
      <div className="absolute top-1/3 left-4 w-12 h-12 decorative-dots opacity-40"></div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-[900px]">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full font-[700] text-[14px] tracking-wide transition-all duration-300 border shadow-sm ${activeCategory === cat
              ? 'bg-gradient-to-r from-[#1C8F65] to-[#20A274] text-white border-transparent shadow-[0_0_15px_rgba(32,162,116,0.4)]'
              : 'bg-white/70 dark:bg-[#0f172a]/70 text-[#556987] dark:text-gray-300 border-gray-200 dark:border-gray-700/50 hover:border-[#20A274]/50 hover:text-[#15796b] dark:hover:text-[#5FB3A7] backdrop-blur-md'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1100px] w-full px-2">
        {filteredSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="group bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[20px] p-6 flex flex-col items-center text-center shadow-lg dark:shadow-[0_0_20px_rgba(32,162,116,0.03)] border-[1.5px] border-white/50 dark:border-white/5 hover:border-[#68c6b7]/60 dark:hover:border-[#20A274]/50 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(36,157,139,0.2)] dark:hover:shadow-[0_0_25px_rgba(32,162,116,0.15)] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#F2F9F9] dark:bg-[#0f172a] border border-[#edf4f4] dark:border-gray-800 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm text-[#2A3B4C] dark:text-gray-100 font-extrabold flex-shrink-0">
              {getIcon(skill.icon, skill.name)}
              <span className="hidden drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">{skill.name[0]}</span>
            </div>
            <h4 className="font-[800] text-[#2A3B4C] dark:text-gray-200 text-[15px] tracking-[0.02em] group-hover:text-[#15796b] dark:group-hover:text-[#5FB3A7] transition-colors leading-tight">
              {skill.name}
            </h4>
            <p className="text-[12px] font-[600] text-[#819ab7] dark:text-gray-500 mt-2 uppercase tracking-wider">
              {skill.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
