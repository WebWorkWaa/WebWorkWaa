import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Lightbulb, Target, Code2 } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="aboutus" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            We're a team of passionate creators, developers, and designers dedicated to crafting exceptional digital experiences.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With years of industry expertise and a commitment to innovation, we transform your vision into reality through cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="w-10 h-10" />,
              title: "Expert Team",
              description: "Our diverse team brings years of experience in creating innovative digital solutions."
            },
            {
              icon: <Lightbulb className="w-10 h-10" />,
              title: "Creative Solutions",
              description: "We think outside the box to deliver unique and effective solutions for every project."
            },
            {
              icon: <Target className="w-10 h-10" />,
              title: "Result Driven",
              description: "We focus on achieving measurable results that drive your business forward."
            },
            {
              icon: <Code2 className="w-10 h-10" />,
              title: "Modern Tech",
              description: "We leverage the latest technologies to build scalable and efficient solutions."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className="text-purple-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;