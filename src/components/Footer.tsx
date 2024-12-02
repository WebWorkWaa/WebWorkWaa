import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-['Havelock_Titling']">web.work.waa</h3>
            <p className="text-gray-400">Crafting digital experiences that leave lasting impressions.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} 
                     className="text-gray-400 hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="/web-development" className="hover:text-purple-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/uiux-design" className="hover:text-purple-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/web-apps" className="hover:text-purple-400 transition-colors">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="/digital-marketing" className="hover:text-purple-400 transition-colors">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Digital Avenue</li>
              <li>Tech City, TC 12345</li>
              <li>contact@web.work.waa</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 web.work.waa. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;