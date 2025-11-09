import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "Jai Harsha Gunda",
      role: "Executive, SRMHS",
      content: "The color vibrance and layout are visually appealing, creating an engaging and pleasant user experience.",
      image: "../images/testimonials/testimonial1.jpg"
    },
    {
      name: "Rahul JM",
      role: "Owner, Aruna Home Cleaning",
      content: "The website turned out better than we imagined. It looks professional, loads fast, and is easy for our customers to navigate. We got more inquiries within days of launching. The entire process was smooth, and the work was delivered right on time.",
      image: "../images/testimonials/testimonial-default.jpg"
    },
    // {
    //   name: "Emily Rodriguez",
    //   role: "Marketing Director, GrowthCo",
    //   content: "The UI/UX expertise they brought to our project was exceptional. Our conversion rates have improved significantly since the redesign.",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    // },
    // {
    //   name: "David Park",
    //   role: "CTO, FutureTech",
    //   content: "Their development team's technical expertise is outstanding. They delivered a complex web application ahead of schedule.",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    // },
    // {
    //   name: "Lisa Thompson",
    //   role: "Product Manager, InnovateX",
    //   content: "The attention to detail in UI/UX design was remarkable. Our user engagement metrics have doubled since launch.",
    //   image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
    // }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = () => {
    const items = [];
    const isMobile = window.innerWidth < 768; // Adjust breakpoint if needed
    const testimonialsToShow = isMobile ? 1 : 3;
  
    for (let i = 0; i < testimonialsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };
  

  return (
    <section id="testimonials" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6 relative"
      >
        <motion.h2 className="text-4xl font-bold text-white text-center mb-16">
          Client Testimonials
        </motion.h2>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 relative"
                >
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-purple-400 opacity-50" />
                  
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;