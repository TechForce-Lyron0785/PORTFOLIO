import React from "react";
import {
  Settings,
  MonitorPlay,
  GraduationCap,
  FolderGit2,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "SKILLS",
    path: "/skills",
    icon: <Settings className="text-[#15796b]" size={36} />,
    items: ["Programming", "Web Development", "Tools & Technologies"],
  },
  {
    title: "EXPERIENCE",
    path: "/training",
    icon: <MonitorPlay className="text-[#51b36d]" size={36} />,
    items: ["Current Role", "Previous Companies", "Key Achievements"],
  },
  {
    title: "EDUCATION",
    path: "/education",
    icon: <GraduationCap className="text-[#3197be]" size={36} />,
    items: ["Academic Background", "Degrees & Institutions", "Achievements"],
  },
  {
    title: "PROJECTS",
    path: "/projects",
    icon: <FolderGit2 className="text-[#15796b]" size={36} />,
    items: ["Live Projects", "Case Studies", "Source Code"],
  },
  {
    title: "ACHIEVEMENTS",
    path: "/achievements",
    icon: <Trophy className="text-[#e8b23a]" size={36} />,
    items: ["Awards & Honors", "Competitions", "Milestones"],
  },
];

const FeatureCards = () => {
  return (
    <section
      id="features"
      className="py-10 px-5 max-w-[1320px] mx-auto z-10 relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mt-10 px-2 sm:px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative flex min-h-[365px] flex-col items-center rounded-[24px] border border-[#0f2631] bg-[#071018] px-8 pb-20 pt-14 shadow-[0_22px_32px_-24px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1f5d58] hover:shadow-[0_26px_46px_-24px_rgba(32,162,116,0.35)] sm:px-10"
          >
            <div className="absolute right-8 top-6 h-2 w-2 rounded-full border border-[#68b7d2] bg-[#21435a] opacity-70"></div>
            <div className="absolute -left-[13px] top-[49%] h-[18px] w-[18px] rotate-45 bg-[#e8f8ff] shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"></div>

            <div className="mb-8 flex h-16 w-16 items-center justify-center text-[#39a895]">
              {card.icon}
            </div>

            <h3 className="mb-6 text-[18px] font-[900] tracking-[0.14em] text-gray-100">
              {card.title}
            </h3>

            <ul className="mb-8 w-full max-w-[250px] space-y-4">
              {card.items.map((item, i) => (
                <li
                  key={i}
                  className="bullet-dot flex items-center pl-6 text-[15px] font-[700] leading-tight tracking-[0.01em] text-[#c4cbd1]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to={card.path}
              className="absolute -bottom-6 z-10 flex h-[50px] w-[68%] max-w-[198px] items-center justify-center gap-3 rounded-full border border-[#66d0a2]/30 bg-gradient-to-r from-[#2f9676] to-[#42a36f] text-[13px] font-[900] tracking-[0.03em] text-white shadow-[0_10px_26px_-10px_rgba(66,163,111,0.9)] transition-all hover:scale-105 hover:from-[#36a986] hover:to-[#4bbd80]"
            >
              LEARN MORE <ChevronRight size={17} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
