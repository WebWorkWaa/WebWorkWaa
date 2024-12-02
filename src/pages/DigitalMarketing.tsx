import React from 'react';
import { motion } from 'framer-motion';

const DigitalMarketing = () => {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Digital Marketing Services</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Growth-Driven Marketing</h2>
              <p className="text-gray-400 mb-6">
                We help businesses grow their online presence through strategic digital marketing
                campaigns. Our data-driven approach ensures maximum ROI and sustainable growth.
              </p>
              <ul className="space-y-4">
                {[
                  'SEO Optimization',
                  'Content Marketing',
                  'Social Media Management',
                  'Email Marketing',
                  'PPC Campaigns'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">Marketing Strategy</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>1. Market Analysis</li>
                  <li>2. Strategy Development</li>
                  <li>3. Campaign Execution</li>
                  <li>4. Performance Tracking</li>
                  <li>5. Optimization & Scaling</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Boost Your Online Presence</h3>
                <p className="text-gray-400 mb-4">
                  Ready to take your digital marketing to the next level?
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold"
                >
                  Get in Touch
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketing;