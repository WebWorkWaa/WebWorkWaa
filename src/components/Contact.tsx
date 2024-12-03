import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Formspree functionality
  const [state, handleSubmit] = useForm('xzzbopyb'); // Replace with your Formspree form ID

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information Section */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="text-gray-200">webworkwaa@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <p className="text-gray-200">+91 707 525 3468</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Address</p>
                      <p className="text-gray-200">Remote, IN</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
                {state.succeeded ? (
                  <div className="text-center">
                    <p className="text-green-400 text-xl font-semibold">
                      Thank you for your message! 🎉
                    </p>
                    <p className="text-gray-300 mt-4">
                      Your details have been successfully submitted. We will get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors"
                        placeholder="Your name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors"
                      >
                        <option value="" className="bg-gray-900">Select a project type</option>
                        <option value="website" className="bg-gray-900">Landing Page</option>
                        <option value="webapp" className="bg-gray-900">Web Application</option>
                        <option value="uiux" className="bg-gray-900">UI Design Prototype</option>
                        <option value="ecommerce" className="bg-gray-900">AI Tool</option>
                        <option value="other" className="bg-gray-900">Other</option>
                      </select>
                      <ValidationError prefix="Project Type" field="projectType" errors={state.errors} />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 text-white transition-colors h-32 resize-none"
                        placeholder="Your message"
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
