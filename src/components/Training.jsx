import React from 'react';
import { Calendar, MapPin, CheckCircle2, Award, Terminal, LayoutPanelLeft, Code2, Link as LinkIcon } from 'lucide-react';

const Training = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative w-full min-h-screen flex flex-col items-center z-10">

      {/* Header */}
      <div className="text-center mb-16 relative w-full flex flex-col items-center">
        <h2 className="text-[44px] md:text-[54px] font-[900] text-[#2A3B4C] dark:text-gray-100 tracking-[-0.02em] leading-tight drop-shadow-sm">
          Professional <span className="bg-gradient-to-r from-[#1C8F65] via-[#20A274] to-[#3197be] text-transparent bg-clip-text">Experience</span>
        </h2>
        <p className="mt-4 text-[#556987] dark:text-gray-300 text-[17px] font-[500] leading-[1.6] text-center max-w-[600px]">
          A decade of building scalable full-stack applications across agencies and product companies.
        </p>
      </div>

      <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

        {/* Left Column: Current Role */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          {/* Current Role Card */}
          <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-8 border-[1.5px] border-white/50 dark:border-white/5 shadow-lg dark:shadow-[0_0_20px_rgba(32,162,116,0.03)] hover:border-[#68c6b7]/50 dark:hover:border-[#20A274]/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#20A274]/20 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1C8F65] to-[#3197be] flex items-center justify-center shadow-md">
                <Terminal className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[22px] font-[800] text-[#2A3B4C] dark:text-white leading-tight">
                  Senior Full Stack Developer
                </h3>
                <p className="text-[#15796b] dark:text-[#5FB3A7] font-bold text-[14px]">Transform Agency</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-[#556987] dark:text-gray-300 text-[15px] font-medium">
                <MapPin className="w-5 h-5 text-[#819ab7] dark:text-gray-500" />
                <span>Warsaw, Poland (Remote)</span>
              </div>
              <div className="flex items-center gap-3 text-[#556987] dark:text-gray-300 text-[15px] font-medium">
                <Calendar className="w-5 h-5 text-[#819ab7] dark:text-gray-500" />
                <span>January 2023 – Present</span>
              </div>
            </div>

            <p className="text-[#556987] dark:text-gray-300 text-[15px] leading-[1.8] font-medium border-t border-gray-100 dark:border-gray-800/60 pt-6">
              Architecting scalable React and Node.js full-stack applications supporting 120,000+ monthly active users. Leading modernization of backend services, building GraphQL APIs, and automating CI/CD pipelines with GitHub Actions and Docker.
            </p>
          </div>

          {/* Key Highlights - 2 Col Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[20px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(32,162,116,0.05)] transition-all duration-300">
              <h4 className="text-[18px] font-[800] text-[#2A3B4C] dark:text-white mb-5 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#3197be]" /> Key Achievements
              </h4>
              <ul className="space-y-3">
                {[
                  '40% reduction in page load time',
                  '2M+ API requests/day processed',
                  '45% less UI code duplication',
                  'Deployment time cut from 40min → 10min',
                  '85%+ test coverage with Jest & Cypress'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#556987] dark:text-gray-300 text-[14px] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#20A274] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[20px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(32,162,116,0.05)] transition-all duration-300">
              <h4 className="text-[18px] font-[800] text-[#2A3B4C] dark:text-white mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#20A274]" /> Core Skills Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'GitHub Actions', 'JWT/OAuth2'].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-[#F2F9F9] dark:bg-[#0f172a] text-[#15796b] dark:text-[#5FB3A7] border border-[#d6ebe9] dark:border-[#20A274]/20 text-[13px] font-[700] shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Previous Roles */}
        <div className="lg:col-span-5 flex flex-col gap-8">

          {/* Netguru */}
          <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-7 border-[1.5px] border-[#20A274]/20 shadow-[0_10px_30px_rgba(32,162,116,0.1)] hover:shadow-[0_15px_40px_rgba(32,162,116,0.2)] dark:hover:shadow-[0_0_40px_rgba(32,162,116,0.15)] transition-all duration-500 group flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C8F65] to-[#3197be] flex items-center justify-center shadow-md">
                <LayoutPanelLeft className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[18px] font-[800] text-[#2A3B4C] dark:text-white leading-tight">Full Stack Developer</h3>
                <p className="text-[#15796b] dark:text-[#5FB3A7] font-bold text-[13px]">Netguru — Poznan, Poland</p>
              </div>
            </div>
            <p className="text-[12px] text-[#819ab7] dark:text-gray-500 font-bold mb-4 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Feb 2019 – Dec 2022
            </p>
            <p className="text-[#556987] dark:text-gray-300 text-[14px] leading-[1.7] font-medium mb-4">
              Built full-stack platforms for international clients using React, Node.js, and TypeScript. Implemented SSR with Next.js, containerized deployments with Docker, and contributed to CI/CD pipelines.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white dark:bg-[#0f172a] rounded shadow-sm border border-gray-100 dark:border-gray-800 text-[12px] font-bold text-[#556987] dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* SoftwareMill */}
          <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-lg group hover:border-[#3197be]/40 transition-colors duration-300 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3197be] to-[#1C8F65] flex items-center justify-center shadow-md">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[18px] font-[800] text-[#2A3B4C] dark:text-white leading-tight">Software Engineer</h3>
                <p className="text-[#15796b] dark:text-[#5FB3A7] font-bold text-[13px]">SoftwareMill — Wroclaw, Poland</p>
              </div>
            </div>
            <p className="text-[12px] text-[#819ab7] dark:text-gray-500 font-bold mb-4 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Sep 2015 – Jan 2019
            </p>
            <p className="text-[#556987] dark:text-gray-300 text-[14px] leading-[1.7] font-medium mb-4">
              Developed web applications with JavaScript, React, and Node.js. Built REST APIs, designed responsive interfaces, and contributed to legacy system modernization and automated testing pipelines.
            </p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'REST APIs'].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white dark:bg-[#0f172a] rounded shadow-sm border border-gray-100 dark:border-gray-800 text-[12px] font-bold text-[#556987] dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;

<div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

  {/* Left Column: Details & Learnings */}
  <div className="lg:col-span-7 flex flex-col gap-8">

    {/* Training Overview Card */}
    <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-8 border-[1.5px] border-white/50 dark:border-white/5 shadow-lg dark:shadow-[0_0_20px_rgba(32,162,116,0.03)] hover:border-[#68c6b7]/50 dark:hover:border-[#20A274]/30 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#20A274]/20 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1C8F65] to-[#3197be] flex items-center justify-center shadow-md">
          <Terminal className="text-white w-6 h-6" />
        </div>
        <div>
          <h3 className="text-[22px] font-[800] text-[#2A3B4C] dark:text-white leading-tight">
            Summer Training
          </h3>
          <p className="text-[#15796b] dark:text-[#5FB3A7] font-bold text-[14px]">Data Structures & Algorithms</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-[#556987] dark:text-gray-300 text-[15px] font-medium">
          <MapPin className="w-5 h-5 text-[#819ab7] dark:text-gray-500" />
          <span>Lovely Professional University (LPU)</span>
        </div>
        <div className="flex items-center gap-3 text-[#556987] dark:text-gray-300 text-[15px] font-medium">
          <Calendar className="w-5 h-5 text-[#819ab7] dark:text-gray-500" />
          <span>June 10, 2025 – July 20, 2025</span>
        </div>
      </div>

      <p className="text-[#556987] dark:text-gray-300 text-[15px] leading-[1.8] font-medium border-t border-gray-100 dark:border-gray-800/60 pt-6">
        This training program focused on Data Structures and Algorithms (DSA), improving problem-solving skills, algorithmic thinking, and coding efficiency through practical implementation and real-world problems.
      </p>
    </div>

    {/* Key Learnings & Skills - 2 Col Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Key Learning */}
      <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[20px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(32,162,116,0.05)] transition-all duration-300">
        <h4 className="text-[18px] font-[800] text-[#2A3B4C] dark:text-white mb-5 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-[#3197be]" /> Key Learning
        </h4>
        <ul className="space-y-3">
          {[
            'Arrays, Linked Lists, Stacks, Queues',
            'Trees, Graphs, Hash Tables',
            'Sorting and Searching Algorithms',
            'Recursion and Dynamic Programming',
            'Time and Space Complexity'
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-[#556987] dark:text-gray-300 text-[14px] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#20A274] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Gained */}
      <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[20px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(32,162,116,0.05)] transition-all duration-300">
        <h4 className="text-[18px] font-[800] text-[#2A3B4C] dark:text-white mb-5 flex items-center gap-2">
          <Award className="w-5 h-5 text-[#20A274]" /> Skills Gained
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            'Problem Solving',
            'Algorithmic Thinking',
            'Code Optimization',
            'Logical Reasoning'
          ].map((skill, index) => (
            <span key={index} className="px-4 py-2 rounded-full bg-[#F2F9F9] dark:bg-[#0f172a] text-[#15796b] dark:text-[#5FB3A7] border border-[#d6ebe9] dark:border-[#20A274]/20 text-[13px] font-[700] shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

  </div>

  {/* Right Column: Project & Certificate */}
  <div className="lg:col-span-5 flex flex-col gap-8">

    {/* Certificate Card */}
    <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-7 border-[1.5px] border-[#20A274]/20 shadow-[0_10px_30px_rgba(32,162,116,0.1)] hover:shadow-[0_15px_40px_rgba(32,162,116,0.2)] dark:hover:shadow-[0_0_40px_rgba(32,162,116,0.15)] transition-all duration-500 group flex flex-col items-center">

      <div className="w-full relative rounded-xl overflow-hidden mb-6 border border-gray-100 dark:border-gray-800 shadow-inner group-hover:border-[#20A274]/40 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-4">
          <p className="text-white font-bold text-sm tracking-wide">LPU Merit Certificate</p>
        </div>
        <img
          src={certificateImg}
          alt="Certificate of Merit - LPU"
          className="w-full h-auto object-cover transform group-hover:scale-[1.05] transition-transform duration-700 block"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/600x400?text=Certificate+Missing+in+Assets';
          }}
        />
      </div>

      <h3 className="text-[20px] font-[800] text-[#2A3B4C] dark:text-white mb-2 text-center w-full">
        Certificate of Merit – LPU
      </h3>
      <p className="text-[13px] text-[#556987] dark:text-gray-400 font-medium mb-6 text-center">
        Successfully completed the comprehensive DSA Training Program.
      </p>

      <a
        href={certificateImg}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[#1C8F65] to-[#20A274] text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(21,121,107,0.5)] dark:shadow-[0_0_20px_rgba(32,162,116,0.3)] text-[14px] w-full"
      >
        View Certificate <LinkIcon size={16} strokeWidth={2.5} />
      </a>
    </div>

    {/* Project Details */}
    <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-lg group hover:border-[#3197be]/40 transition-colors duration-300 relative overflow-hidden">
      <h4 className="text-[20px] font-[800] text-[#2A3B4C] dark:text-white mb-1 flex items-center gap-2">
        <LayoutPanelLeft className="w-5 h-5 text-[#3197be]" /> Project
      </h4>
      <h5 className="text-[#15796b] dark:text-[#5FB3A7] font-bold text-[15px] mb-4">FastShow – Online Movie Ticket Booking</h5>

      <p className="text-[#556987] dark:text-gray-300 text-[14px] leading-[1.7] font-medium mb-5">
        Developed a front-end web application allowing users to book movie tickets online with an interactive UI.
      </p>

      <div className="space-y-4">
        <div>
          <strong className="text-[13px] text-[#2A3B4C] dark:text-white uppercase tracking-wider mb-2 block">Features</strong>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Auth UI (Login/Signup)',
              'City & Movie Selection',
              'Seat Booking System',
              'Dynamic UI interactions'
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[#556987] dark:text-gray-300 text-[13px] font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3197be]"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong className="text-[13px] text-[#2A3B4C] dark:text-white uppercase tracking-wider mb-2 block">Tech Stack</strong>
          <div className="flex flex-wrap gap-2">
            {['HTML5', 'CSS3', 'JavaScript'].map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-white dark:bg-[#0f172a] rounded shadow-sm border border-gray-100 dark:border-gray-800 text-[12px] font-bold text-[#556987] dark:text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
    </section >
  );
};

export default Training;
