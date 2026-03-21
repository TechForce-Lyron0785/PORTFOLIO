import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, School } from 'lucide-react';

const Education = () => {
  const mainEducation = {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Lovely Professional University (LPU)",
    duration: "2023 – 2027",
    description: "Focusing on core computer science principles, data structures and algorithms, operating systems, database management systems and full-stack web development.",
    achievements: [
      "Maintained a strong CGPA (7.5)",
      "Active member of coding clubs",
      "Participated in hackathons"
    ]
  };

  const schoolEducation = [
    {
      level: "12th Grade (Intermediate)",
      institution: "DNY College, Bihar",
      year: "2022",
      subjects: "Physics, Chemistry, Mathematics, Computer Science",
      icon: <School className="w-5 h-5" />
    },
    {
      level: "10th Grade (Matriculation)",
      institution: "Regional Secondary School, Bihar",
      year: "2020",
      icon: <School className="w-5 h-5" />
    }
  ];

  return (
    <section className="pt-32 pb-20 px-6 relative w-full min-h-screen flex flex-col items-center z-10">

      {/* Page Title Section */}
      <div className="text-center mb-16 relative w-full flex flex-col items-center">
        <h2 className="text-[44px] md:text-[54px] font-[900] text-[#2A3B4C] dark:text-gray-100 tracking-[-0.02em] leading-tight drop-shadow-sm">
          Academic <span className="bg-gradient-to-r from-[#1C8F65] via-[#20A274] to-[#3197be] text-transparent bg-clip-text">Background</span>
        </h2>
        <p className="mt-4 text-[#556987] dark:text-gray-300 text-[17px] font-[500] leading-[1.6] text-center max-w-[600px]">
          My educational journey and academic achievements in the field of Computer Science
        </p>
      </div>

      <div className="max-w-[1000px] w-full flex flex-col gap-10">

        {/* Main Education Card */}
        <div className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[28px] p-8 md:p-10 border-[1.5px] border-white/50 dark:border-white/5 shadow-2xl dark:shadow-[0_0_40px_rgba(32,162,116,0.05)] group hover:border-[#20A274]/40 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#20A274]/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1C8F65] to-[#3197be] flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <GraduationCap size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[28px] font-[900] text-[#2A3B4C] dark:text-white leading-tight mb-2">
                  {mainEducation.degree}
                </h3>
                <p className="text-[#15796b] dark:text-[#5FB3A7] font-bold text-[18px] flex items-center gap-2">
                  <MapPin size={18} /> {mainEducation.institution}
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f2f9f9] dark:bg-gray-800/60 text-[#15796b] dark:text-[#20A274] text-[15px] font-extrabold border border-[#d6ebe9] dark:border-[#20A274]/20 self-start shadow-sm">
              <Calendar size={18} /> {mainEducation.duration}
            </div>
          </div>

          <p className="text-[#556987] dark:text-gray-300 text-[17px] leading-[1.8] font-medium mb-10 relative z-10">
            {mainEducation.description}
          </p>

          <div className="border-t border-gray-100 dark:border-gray-800/60 pt-8 relative z-10">
            <h4 className="text-[16px] font-[900] text-[#2A3B4C] dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <Award size={20} className="text-[#20A274]" /> Key Achievements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainEducation.achievements.map((ach, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/50 dark:bg-gray-900/40 border border-[#e2edf2] dark:border-gray-700/30 text-[#556987] dark:text-gray-300 text-[14px] font-[700] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <CheckCircle2 size={18} className="text-[#20A274] flex-shrink-0" />
                  {ach}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Education (Smaller Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {schoolEducation.map((edu, index) => (
            <div key={index} className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-md hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(32,162,116,0.1)] group hover:border-[#20A274]/30 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f2f9f9] dark:bg-gray-800/60 flex items-center justify-center text-[#15796b] dark:text-[#20A274] border border-[#d6ebe9] dark:border-[#20A274]/20 group-hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>
                  <h4 className="text-[18px] font-extrabold text-[#2A3B4C] dark:text-white leading-tight">
                    {edu.level}
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-lg bg-gray-50 dark:bg-gray-800/40 text-[#819ab7] dark:text-gray-500 text-[12px] font-bold border border-gray-100 dark:border-gray-700/50">
                  {edu.year}
                </div>
              </div>
              <p className="text-[#556987] dark:text-gray-400 font-bold text-[15px] flex items-center gap-2 mt-2">
                <MapPin size={14} /> {edu.institution}
              </p>
              {edu.subjects && (
                <p className="text-[#819ab7] dark:text-gray-500 text-[13px] mt-4 font-medium italic border-t border-gray-100 dark:border-gray-800/60 pt-3">
                  <span className="font-bold uppercase text-[11px] tracking-wider text-[#15796b] dark:text-[#20A274] not-italic block mb-1">Key Subjects:</span>
                  {edu.subjects}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Decorative background dots */}
      <div className="absolute top-1/4 left-10 w-16 h-16 decorative-dots opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 decorative-dots opacity-20"></div>
    </section>
  );
};

export default Education;
