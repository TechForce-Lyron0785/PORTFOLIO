import React, { useState, useEffect } from "react";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "SKILLS", path: "/skills" },
  { name: "EXPERIENCE", path: "/training" },
  { name: "EDUCATION", path: "/education" },
  { name: "PROJECTS", path: "/projects" },
  { name: "CERTIFICATES", path: "/certificates" },
  { name: "ACHIEVEMENTS", path: "/achievements" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4 md:px-6 transition-all duration-300">
      <nav className="w-[96%] max-w-[1600px] py-3.5 px-6 md:px-10 bg-white/40 dark:bg-[#070e17]/40 backdrop-blur-2xl border border-white/40 dark:border-[#20A274]/15 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_0_25px_rgba(32,162,116,0.1)] flex items-center justify-between">
        {/* Extreme Left: LOGO */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-11 h-11 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_10px_rgba(32,162,116,0.3)]"
            >
              <path
                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                fill="#20A274"
              />
              <path d="M50 0 L50 100 L6.7 75 L6.7 25 Z" fill="#1C8F65" />
            </svg>
            <span
              className="absolute text-white font-bold text-2xl font-sans"
              style={{ marginLeft: "-1px" }}
            >
              V
            </span>
          </div>
          <div className="flex flex-col -ml-1 mt-0.5">
            <span className="text-[26px] font-bold text-[#15796b] dark:text-[#20A274] leading-[1.1] tracking-wide drop-shadow-[0_0_8px_rgba(32,162,116,0.2)]">
              Viktor
            </span>
            <span className="text-[14px] font-[700] text-gray-500 tracking-[0.22em] leading-[1.1] ml-[2px] dark:text-gray-400">
              PORTFOLIO
            </span>
          </div>
        </Link>

        {/* Extreme Right: Menu + Buttons */}
        <div className="flex items-center gap-6 xl:gap-8">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-9 text-[12px] xl:text-[13px] font-bold tracking-[0.08em]">
            {navLinks.map((link) => {
              const isPageRoute =
                link.path === "/skills" ||
                link.path === "/training" ||
                link.path === "/education" ||
                link.path === "/projects" ||
                link.path === "/certificates" ||
                link.path === "/achievements" ||
                link.path === "/contact";
              const isActive =
                (isPageRoute && location.pathname === link.path) ||
                (!isPageRoute &&
                  location.pathname === "/" &&
                  location.hash === link.path.replace("/", "")) ||
                (link.path === "/" &&
                  location.pathname === "/" &&
                  !location.hash);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1 transition-all duration-300 ${
                    isActive
                      ? "text-[#15796b] dark:text-[#20A274] drop-shadow-[0_0_10px_rgba(32,162,116,0.4)]"
                      : "text-[#556987] dark:text-gray-300 hover:text-[#15796b] dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#15796b] dark:bg-[#20A274] shadow-[0_0_8px_rgba(32,162,116,0.8)]"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 border-l-[1.5px] border-gray-200 dark:border-gray-700/60 pl-6 xl:pl-8">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1wXohu_NCxbSESx5w-HW6zGvBXQty4aOx"
              download="Resume.pdf"
              className="bg-gradient-to-r from-[#1C8F65] to-[#20A274] text-white px-5 py-2.5 rounded-xl hover:scale-105 transition-all duration-300 font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(28,143,101,0.4)] border border-[#20A274]/50"
            >
              <Download size={16} strokeWidth={2.5} />
              Resume
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 text-[#2A3B4C] dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-[80px] left-4 right-4 z-40 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="w-full bg-white/95 dark:bg-[#070e17]/95 backdrop-blur-2xl shadow-2xl py-6 rounded-2xl border border-white/20 dark:border-[#20A274]/20 flex flex-col space-y-4 px-6 dark:shadow-[0_10px_40px_rgba(32,162,116,0.15)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-bold text-[14px] text-[#556987] dark:text-gray-300 hover:text-[#15796b] dark:hover:text-[#20A274] border-b border-gray-100 dark:border-gray-800/50 pb-3 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1wXohu_NCxbSESx5w-HW6zGvBXQty4aOx"
            download="Resume.pdf"
            className="bg-gradient-to-r from-[#1C8F65] to-[#20A274] text-white px-5 py-3.5 rounded-xl w-full flex items-center justify-center gap-2 mt-4 font-bold text-sm shadow-[0_0_15px_rgba(28,143,101,0.3)]"
          >
            <Download size={18} strokeWidth={2.5} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
