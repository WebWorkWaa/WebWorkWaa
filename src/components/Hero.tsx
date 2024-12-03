import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket} from 'lucide-react';
import { RiRobot2Line } from "react-icons/ri"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Everything is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Designed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            We transform ideas into exceptional digital experiences through innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {[
              { icon: <Code2 className="w-8 h-8" />, title: "Web Development", link: "/web-development" },
              { icon: <Palette className="w-8 h-8" />, title: "UI/UX Design", link: "/ui-ux-design" },
              { icon: <Rocket className="w-8 h-8" />, title: "Web Apps", link: "/web-apps" },
              { icon: <RiRobot2Line className="w-8 h-8" />, title: "AI Tools", link: "/ai-tools" }
            ].map((service, index) => (
              <a href={service.link} key={index} className="no-underline">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 w-64"
                >
                  {service.icon}
                  <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                </motion.div>
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;