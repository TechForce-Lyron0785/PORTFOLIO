import React, { useState } from 'react';
import { Award, Briefcase, ExternalLink, ShieldCheck, CheckCircle2, Layers, X, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import certificateImg from '../assets/certificate.png';
import nasscomCertImg from '../assets/nasscom_cert.png';
import graphTheoryCertImg from '../assets/cert_graph_theory.png';
import programmingCertImg from '../assets/cert_programming.png';
import genaiCertImg from '../assets/cert_genai.png';
import oopCertImg from '../assets/cert_oop.png';
import dsaIamneoCertImg from '../assets/cert_dsa_iamneo.png';
import hackathonCertImg from '../assets/cert_hackathon.png';
import hciCertImg from '../assets/cert_hci.png';
import javaCertImg from '../assets/cert_java.png';
import mongodbOptCertImg from '../assets/cert_mongodb_opt.png';
import mongodbPatternsCertImg from '../assets/cert_mongodb_patterns.png';
import responsiveWebCertImg from '../assets/cert_responsive_web.png';
import hardwareOsCertImg from '../assets/cert_hardware_os.png';
import networkingBitsCertImg from '../assets/cert_networking_bits.png';
import cyberSecCertImg from '../assets/cert_cyber_sec.png';
import infosysTheoryCertImg from '../assets/cert_infosys_theory.png';
import infosysPromptCertImg from '../assets/cert_infosys_prompt.png';
import infosysNocodeCertImg from '../assets/cert_infosys_nocode.png';
import infosysGenaiMasterCertImg from '../assets/cert_infosys_genai_master.png';

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ['All', 'Full Stack', 'DSA / Programming', 'Achievements'];

  const certifications = [
    {
      title: "Graph Theory Programming Camp",
      issuer: "AlgoUniversity",
      date: "August 2024",
      image: graphTheoryCertImg,
      description: "Participated in the Graphs Programming Camp under the mentorship of Codeforces Master, Manas Kumar Verma and conquering 9 advanced graph problems.",
      skills: ["Graph Theory", "Algorithms", "Advanced Problem Solving"],
      category: "DSA / Programming"
    },
    {
      title: "Course Completion – Infosys",
      issuer: "Infosys Springboard",
      date: "August 2025",
      image: infosysGenaiMasterCertImg,
      description: "Master Generative AI & Generative AI tools (ChatGPT & more) certification from Infosys Springboard.",
      skills: ["Generative AI", "AI Tools"],
      category: "Full Stack"
    },
    {
      title: "Prompt Engineering – Infosys",
      issuer: "Infosys Springboard",
      date: "August 2025",
      image: infosysPromptCertImg,
      description: "ChatGPT-4 Prompt Engineering course covering Generative AI & Large Language Models (LLMs).",
      skills: ["Prompt Engineering", "LLMs"],
      category: "Full Stack"
    },
    {
      title: "No-Code AI Solutions – Infosys",
      issuer: "Infosys Springboard",
      date: "August 2025",
      image: infosysNocodeCertImg,
      description: "Building Generative AI Apps and Solutions using industry-leading No-Code Tools.",
      skills: ["No-Code AI", "App Development"],
      category: "Full Stack"
    },
    {
      title: "Computational Theory – Infosys",
      issuer: "Infosys Springboard",
      date: "August 2025",
      image: infosysTheoryCertImg,
      description: "Comprehensive course on Language Principle & Finite Automata Theory.",
      skills: ["Theory of Computation", "Automata Theory"],
      category: "DSA / Programming"
    },
    {
      title: "Certificate of Excellence – Nasscom",
      issuer: "Nasscom Foundation (thingQbator)",
      date: "2024",
      image: nasscomCertImg,
      description: "Successfully completed the Full Stack Development with MEAN course as part of the thingQbator program, a Cisco CSR initiative.",
      skills: ["MEAN Stack", "Full Stack Development"],
      category: "Full Stack"
    },
    {
      title: "Consolidated Score – NPTEL",
      issuer: "NPTEL Online Certification (funded by MoE)",
      date: "Jan-Apr 2025",
      image: hciCertImg,
      description: "Elite certification for successfully completing the 12-week Human Computer Interaction course with a consolidated score of 85%.",
      skills: ["HCI", "UX/UI Design"],
      category: "Achievements"
    },
    {
      title: "Certificate of Merit – LPU",
      issuer: "Lovely Professional University (LPU)",
      date: "August 2024",
      image: certificateImg,
      description: "Recognized for outstanding performance in the Data Structures and Algorithms program.",
      skills: ["Data Structures", "Algorithms"],
      category: "DSA / Programming"
    },
    {
      title: "Cyber Security v/s Ethical Hacking",
      issuer: "Secuneus Technologies / LPU",
      date: "November 2023",
      image: cyberSecCertImg,
      description: "Participation in an intensive hands-on workshop focused on Cyber Security and Ethical Hacking principles.",
      skills: ["Cyber Security", "Ethical Hacking"],
      category: "Achievements"
    },
    {
      title: "Hardware and Operating Systems",
      issuer: "IBM / Coursera",
      date: "September 2024",
      image: hardwareOsCertImg,
      description: "IBM authorized course focusing on the fundamentals of computer hardware and operating systems.",
      skills: ["Operating Systems", "Hardware IT"],
      category: "DSA / Programming"
    },
    {
      title: "Google Networking Fundamentals",
      issuer: "Google / Coursera",
      date: "September 2024",
      image: networkingBitsCertImg,
      description: "Google authorized certification covering the Bits and Bytes of Computer Networking and infrastructure.",
      skills: ["Networking", "TCP/IP"],
      category: "DSA / Programming"
    },
    {
      title: "Schema Design Optimization",
      issuer: "MongoDB, Inc.",
      date: "January 2025",
      image: mongodbOptCertImg,
      description: "Proof of completion for advanced MongoDB training on Schema Design Optimization for scalable applications.",
      skills: ["MongoDB", "Database Design"],
      category: "Full Stack"
    },
    {
      title: "Schema Patterns & Antipatterns",
      issuer: "MongoDB, Inc.",
      date: "January 2025",
      image: mongodbPatternsCertImg,
      description: "Completed MongoDB training on Schema Patterns and Antipatterns for efficient data modeling.",
      skills: ["MongoDB", "Data Modeling"],
      category: "Full Stack"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "October 2023",
      image: responsiveWebCertImg,
      description: "Verified developer certification representing approximately 300 hours of work in Responsive Web Design.",
      skills: ["HTML5", "CSS3", "RWD"],
      category: "Full Stack"
    },
    {
      title: "Certificate of Participation – Hackathon",
      issuer: "LPU / Student Organization ECHO",
      date: "February 2024",
      image: hackathonCertImg,
      description: "Participated in HackWithVertos 1.0, a 24-hour hackathon, showcasing rapid prototyping and problem-solving skills.",
      skills: ["Hackathon", "Problem Solving"],
      category: "Achievements"
    },
    {
      title: "Master Generative AI & Tools",
      issuer: "Udemy",
      date: "August 2025",
      image: genaiCertImg,
      description: "Comprehensive mastery of Generative AI tools including ChatGPT and more, focused on prompt engineering and AI integration.",
      skills: ["Generative AI", "Prompt Engineering"],
      category: "Full Stack"
    },
    {
      title: "Java Programming",
      issuer: "Lovely Professional University (iamneo)",
      date: "May 2025",
      image: javaCertImg,
      description: "Completed 72 hours of intensive online course on Java Programming on the iamneo platform.",
      skills: ["Java", "Backend Development"],
      category: "DSA / Programming"
    },
    {
      title: "Data Structures and Algorithm",
      issuer: "Lovely Professional University (iamneo)",
      date: "December 2024",
      image: dsaIamneoCertImg,
      description: "Completed 72 hours of intensive training on Data Structures and Algorithms on the iamneo platform.",
      skills: ["DSA", "Problem Solving"],
      category: "DSA / Programming"
    },
    {
      title: "Object Oriented Programming",
      issuer: "Lovely Professional University (iamneo)",
      date: "December 2024",
      image: oopCertImg,
      description: "Completed 72 hours of online course on Object Oriented Programming concepts and implementation.",
      skills: ["OOPs", "Java/C++"],
      category: "DSA / Programming"
    },
    {
      title: "Computer Programming",
      issuer: "Lovely Professional University (iamneo)",
      date: "May 2024",
      image: programmingCertImg,
      description: "Completed 72 hours of fundamental computer programming training covering core logic and syntax.",
      skills: ["Programming Fundamentals", "Logic Building"],
      category: "DSA / Programming"
    }
  ];

  const filteredCerts = activeTab === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeTab);

  return (
    <section className="pt-32 pb-20 px-6 relative w-full min-h-screen flex flex-col items-center z-10 overflow-hidden">
      
      {/* Background Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20A274]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3197be]/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 opacity-20"></div>

      {/* Page Header */}
      <div className="text-center mb-10 relative w-full flex flex-col items-center px-4">
        <h2 className="text-[44px] md:text-[54px] font-[900] text-[#2A3B4C] dark:text-gray-100 tracking-[-0.02em] leading-tight drop-shadow-sm">
          Verified <span className="bg-gradient-to-r from-[#1C8F65] to-[#3197be] text-transparent bg-clip-text">Certificate</span>
        </h2>
        <p className="mt-4 text-[#556987] dark:text-gray-300 text-[17px] font-[500] leading-[1.6] text-center max-w-[600px]">
          Professional certifications and academic honors earned during my training and academic journey.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-10 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-3 rounded-full text-[14px] font-[800] tracking-tight transition-all duration-300 transform hover:scale-105 ${
              activeTab === cat
                ? 'bg-gradient-to-r from-[#1C8F65] via-[#20A274] to-[#3197be] text-white shadow-[0_10px_20px_-5px_rgba(32,162,116,0.35)]'
                : 'bg-black/5 dark:bg-white/5 text-[#556987] dark:text-gray-400 border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 relative z-10 px-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, index) => (
            <motion.div 
              key={cert.title + index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => setSelectedCert(cert)}
              className="flex flex-col bg-white/70 dark:bg-[#0a111a]/80 backdrop-blur-xl rounded-[24px] p-7 border-[1.5px] border-white/50 dark:border-white/5 shadow-lg group hover:border-[#20A274]/40 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(32,162,116,0.1)]"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-gray-100 dark:border-gray-800 shadow-inner group-hover:border-[#20A274]/30 transition-colors">
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 ring-1 ring-white/10">
                  <Layers size={10} className="text-[#20A274]" />
                  {cert.category}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center p-4">
                  <span className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-[800] text-[14px] border border-white/30 hover:bg-white/20 transition-all flex items-center gap-2">
                    <ExternalLink size={18} /> View Details
                  </span>
                </div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-700 block"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E9F7F2] dark:bg-[#112a23] flex items-center justify-center text-[#20A274] shadow-sm group-hover:rotate-12 transition-transform duration-300">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="text-[19px] font-[800] text-[#2A3B4C] dark:text-white leading-tight group-hover:text-[#20A274] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-[#20A274] font-bold text-[13px]">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-[#556987] dark:text-gray-300 text-[14px] leading-[1.7] font-medium mb-6 line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-gray-800/60 mt-auto">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#E9F7F2] dark:bg-gray-800/40 border border-[#20A274]/20 text-[#20A274] text-[12px] font-bold">
                      <CheckCircle2 size={12} /> {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-500 text-[12px] font-bold">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Certificate Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[1000px] bg-white dark:bg-[#0a111a] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 z-10"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
                <div className="w-full lg:w-[60%] bg-gray-100 dark:bg-[#070e17] flex items-center justify-center p-4 lg:p-0 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-[500px] lg:max-h-full object-contain shadow-2xl"
                  />
                </div>

                <div className="w-full lg:w-[40%] p-8 lg:p-10 flex flex-col bg-white dark:bg-[#0a111a]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#20A274]/10 text-[#20A274] text-[11px] font-black uppercase tracking-widest border border-[#20A274]/20 flex items-center gap-1.5">
                      <Layers size={12} />
                      {selectedCert.category}
                    </span>
                  </div>

                  <h3 className="text-[28px] font-black text-[#2A3B4C] dark:text-white leading-tight mb-4">
                    {selectedCert.title}
                  </h3>

                  <div className="flex flex-col gap-4 mb-8">
                    <div className="flex items-center gap-3 text-[#556987] dark:text-gray-400">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center text-[#20A274]">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <p className="text-[12px] font-black uppercase tracking-widest opacity-60">Platform</p>
                        <p className="text-[15px] font-bold text-[#2A3B4C] dark:text-gray-200">{selectedCert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-[#556987] dark:text-gray-400">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center text-[#3197be]">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-[12px] font-black uppercase tracking-widest opacity-60">Issued Date</p>
                        <p className="text-[15px] font-bold text-[#2A3B4C] dark:text-gray-200">{selectedCert.date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 overflow-y-auto max-h-[150px] lg:max-h-none">
                    <p className="text-[12px] font-black uppercase tracking-widest text-[#819ab7] dark:text-gray-500 mb-3">Description</p>
                    <p className="text-[#556987] dark:text-gray-300 text-[15px] leading-relaxed font-medium">
                      {selectedCert.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-100 dark:border-gray-800/60">
                    <div className="flex gap-4">
                      <a 
                        href={selectedCert.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#1C8F65] to-[#20A274] text-white px-6 py-4 rounded-2xl font-black text-[14px] tracking-wider flex items-center justify-center gap-2 hover:scale-[1.03] transition-all shadow-[0_10px_20px_rgba(32,162,116,0.2)]"
                      >
                        <ExternalLink size={18} /> Full Image
                      </a>
                      <button 
                        onClick={() => setSelectedCert(null)}
                        className="px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 text-[#2A3B4C] dark:text-gray-200 font-black text-[14px] hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
