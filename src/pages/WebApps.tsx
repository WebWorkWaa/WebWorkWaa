import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const WebApps = () => {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Web Applications</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Custom Web Applications</h2>
              <p className="text-gray-400 mb-6">
                We develop powerful, scalable web applications that help businesses automate processes,
                manage data, and improve efficiency. Our solutions are built with the latest technologies
                and best practices.
              </p>
              <ul className="space-y-4">
                {[
                  'SaaS Applications',
                  'Enterprise Solutions',
                  'Real-time Applications',
                  'Cloud Integration',
                  'Custom Dashboards'
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
                <h3 className="text-xl font-semibold text-white mb-3">Development Approach</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>1. Business Analysis</li>
                  <li>2. Architecture Design</li>
                  <li>3. Agile Development</li>
                  <li>4. Quality Assurance</li>
                  <li>5. Continuous Integration</li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Build Your Application</h3>
                <p className="text-gray-400 mb-4">
                  Ready to transform your business with a custom web application?
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold"
                >
                 <Link to="/#contact">Get in Touch</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebApps;