import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AITools = () => {
  return (
    <div className="pt-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
        >
          <h1 className="text-4xl font-bold text-white mb-8">AI Tools</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Revolutionizing App Development with LLMs
              </h2>
              <p className="text-gray-400 mb-6">
                We create cutting-edge applications powered by advanced language
                models to solve real-world challenges and enhance user
                experiences. Our AI-driven solutions are tailored to your unique
                requirements.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom AI App Development",
                  "Natural Language Processing (NLP)",
                  "AI-Powered Automation",
                  "Generative AI Integration",
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
                <h3 className="text-xl font-semibold text-white mb-3">
                  Development Strategy
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li>1. Requirement Analysis</li>
                  <li>2. LLM Model Selection & Fine-Tuning</li>
                  <li>3. App Design & Development</li>
                  <li>4. Testing & Deployment</li>
                  <li>5. Maintenance & Scaling</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Take Your App to the Next Level
                </h3>
                <p className="text-gray-400 mb-4">
                  Ready to harness the power of AI for your app?
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold"
                >
                  <Link to="/#contact">Get in Touch</Link> {/* Redirect to home contact section */}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AITools;
