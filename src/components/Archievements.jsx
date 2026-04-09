import React from "react";
import { Zap, Sparkles, Award, Github, ExternalLink } from "lucide-react";

const Achievements = () => {
  const codingProfiles = [
    {
      name: "GitHub",
      username: "TechForce-Lyron0785",
      link: "https://github.com/TeckForce-Lyron0785",
      icon: <Github size={26} />,
      color: "from-[#24292e] to-[#404448]",
      darkColor: "shadow-black/20",
      stats: [
        { label: "Repos", value: "50+" },
        { label: "Contributions", value: "800+" },
        { label: "Stack", value: "Full" },
      ],
      description:
        "Building production-ready full-stack applications and open-source contributions.",
    },
  ];

  const achievementList = [
    {
      title: "Solved 400+ DSA Problems",
      subtitle: "Across Multiple Platforms",
      description:
        "Demonstrated strong consistent effort and algorithmic proficiency by tackling a vast collection of problems on LeetCode, GFG, and CodeChef.",
      icon: <Zap size={24} className="text-[#e2a93a]" />,
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
    },
    {
      title: "Full Stack Specialization",
      subtitle: "MERN Stack Development",
      description:
        "Successfully built and deployed end-to-end web applications with modern practices, state-management, and responsive designs.",
      icon: <Sparkles size={24} className="text-[#3197be]" />,
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
  ];

  return (
    <section className="pt-32 pb-20 px-6 relative w-full min-h-screen flex flex-col items-center z-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#20A274]/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#e8b23a]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="text-center mb-16 relative w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20A274]/10 border border-[#20A274]/20 text-[#20A274] font-bold text-xs uppercase tracking-widest mb-4">
          <Award size={14} /> Milestones & Profiles
        </div>
        <h2 className="text-[44px] md:text-[54px] font-[900] text-[#2A3B4C] dark:text-gray-100 tracking-[-0.02em] leading-tight drop-shadow-sm">
          My{" "}
          <span className="bg-gradient-to-r from-[#20A274] to-[#1C8F65] text-transparent bg-clip-text">
            Archivements
          </span>
        </h2>
        <p className="mt-4 text-[#556987] dark:text-gray-300 text-[17px] font-[500] leading-[1.6] text-center max-w-[700px]">
          My journey as a software developer has been marked by a series of
          milestones and accomplishments that have shaped my skills and
          expertise. From conquering coding challenges to building impactful
          projects, each achievement reflects my dedication to growth and
          excellence in the tech world.
        </p>
      </div>

      {/* Profile Cards Grid */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 px-4">
        {codingProfiles.map((profile, index) => (
          <div
            key={index}
            className={`bg-white/80 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[28px] p-1 border border-white/50 dark:border-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden ${profile.darkColor}`}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-[10deg]`}
                >
                  {profile.icon}
                </div>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-[#556987] dark:text-gray-400 hover:text-[#20A274] dark:hover:text-[#20A274] transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h3 className="text-[20px] font-black text-[#2A3B4C] dark:text-white leading-tight">
                {profile.name}
              </h3>
              <p className="text-[#556987] dark:text-[#20A274]/80 font-bold text-[13px] tracking-wide mb-4">
                @{profile.username}
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                {profile.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-2 rounded-xl bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/30"
                  >
                    <span className="text-[14px] font-black text-[#2A3B4C] dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-bold text-[#556987] dark:text-gray-400 uppercase tracking-tighter">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[#556987] dark:text-gray-400 text-[13px] leading-[1.6] font-medium mb-4 flex-grow">
                {profile.description}
              </p>

              <div className="pt-4 border-t border-gray-50 dark:border-gray-800/50">
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${profile.color}`}
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1200px] flex flex-col items-center">
        <div className="w-full flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
          <p className="text-[13px] font-black text-[#556987] dark:text-gray-500 uppercase tracking-[0.2em]">
            Other Achievements
          </p>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {achievementList.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-8 border border-white/50 dark:border-white/5 shadow-lg flex flex-col items-center text-center group hover:border-[#1C8F65]/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0faf7] to-[#e6f4f1] dark:from-[#0d221a] dark:to-[#07130e] flex items-center justify-center text-[#20A274] mb-6 shadow-md shadow-[#20A274]/10 border border-[#20A274]/20 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <h3 className="text-[20px] font-extrabold text-[#2A3B4C] dark:text-white leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-[#20A274] font-bold text-[13px] uppercase tracking-wider mb-6">
                {item.subtitle}
              </p>

              <p className="text-[#556987] dark:text-gray-400 text-[15px] leading-[1.8] font-medium mb-8">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-gray-100 dark:border-gray-800/60 w-full">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 text-[#556987] dark:text-gray-300 text-[12px] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
