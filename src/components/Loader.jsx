import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';
    
    // Set a timer to finish loading after the animation is complete
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      finishLoading();
    }, 4800); // Increased duration to ~4.8s for a slower, more premium feel

    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070e17] overflow-hidden"
    >
      {/* Premium Gradient Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,162,116,0.15)_0%,rgba(7,14,23,1)_70%)] opacity-80 z-0"></div>
      
      {/* Background Grid - extra subtle premium feel */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#20A274_1px,transparent_1px),linear-gradient(to_bottom,#20A274_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.0, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative w-40 h-40 flex items-center justify-center mb-8"
        >
          {/* Pulsing Aura */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-[#20A274] to-[#3BAFDA] rounded-full blur-3xl"
          />

          {/* Hexagon/Rounded-xl Branding Box (Matches Navbar) */}
          <div className="relative z-20 w-32 h-32 bg-gradient-to-br from-[#0a151f] to-[#070e17] rounded-[40px] flex items-center justify-center border border-white/10 shadow-[0_20px_50px_rgba(32,162,116,0.4)] overflow-hidden">
            <span className="text-white text-6xl font-[900] select-none tracking-tighter">H</span>
            
            {/* Animated Shine */}
            <motion.div
              animate={{ 
                left: ["-100%", "200%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 1,
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
            />
          </div>
          
          {/* Orbiting particles (subtle detail) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-[#20A274]/20 rounded-full"
          />
        </motion.div>

        {/* Text Animation */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="flex items-center gap-3"
          >
            <h2 className="text-[26px] md:text-[32px] font-[900] text-white tracking-[0.3em] uppercase">
              HIMANSHU <span className="text-[#20A274]">SHEKHAR</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 2.2, duration: 1.2 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#20A274] to-transparent mt-4 opacity-60"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="text-[#64748b] text-[13px] font-bold uppercase tracking-[0.5em] mt-6 ml-2"
          >
            Full Stack Developer
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
