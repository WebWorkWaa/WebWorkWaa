import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "SRMHS",
      description: "A user-friendly landing page for a school, enhancing its online presence and accessibility",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tags: ["Bootstrap", "CSS", "JavaScript"],
      link: "https://srmhs.com"
    },
    {
      title: "DeepChartify",
      description: "An AI Interactive analytics generating tool where the users can upload and prompt it based on the data provided by the user",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["Typescript", "LlamaIndex", "React.js"],
      link: "https://100xdeepchartify.netlify.app/"
    },
    // {
    //   title: "Social Media App",
    //   description: "Modern social networking platform with real-time features",
    //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    //   tags: ["React Native", "GraphQL", "AWS"],
    //   link: "https://example.com/social"
    // },
    // {
    //   title: "AI-Powered Analytics",
    //   description: "Advanced analytics platform using machine learning algorithms",
    //   image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    //   tags: ["Python", "TensorFlow", "AWS"],
    //   link: "https://example.com/analytics"
    // },
    // {
    //   title: "Educational Platform",
    //   description: "Interactive learning management system with real-time collaboration",
    //   image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    //   tags: ["Next.js", "Socket.io", "PostgreSQL"],
    //   link: "https://example.com/education"
    // }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const isMobile = window.innerWidth < 768;
    const visibleCount = isMobile ? 1 : 3;
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length;
      items.push(projects[index]);
    }
    return items;
  };

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6 relative"
      >
        <motion.h2 className="text-4xl font-bold text-white text-center mb-16">
          Our Projects
        </motion.h2>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 project-grid">
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;