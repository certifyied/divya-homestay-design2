import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectNatural from '@/assets/project-natural-luxury.jpg';
import projectBlack from '@/assets/project-modern-black.jpg';
import projectWood from '@/assets/project-wood-mode.jpg';

const projects = [
  {
    title: 'Natural Luxury',
    year: '2025',
    image: projectNatural,
    size: 'large',
  },
  {
    title: 'Modern Black',
    year: '2024',
    image: projectBlack,
    size: 'medium',
  },
  {
    title: 'Wood Mode',
    year: '2024',
    image: projectWood,
    size: 'small',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section-title"
          >
            Our Last Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/projects" className="link-arrow mt-4 md:mt-0">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <Link to="/projects/natural-luxury" className="project-card block">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="project-card-overlay rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="text-primary-foreground text-xl md:text-2xl font-medium">
                  {projects[0].title}
                </h3>
                <span className="text-primary-foreground/70 text-sm">{projects[0].year}</span>
              </div>
            </Link>
          </motion.div>

          {/* Side Projects */}
          <div className="md:col-span-4 space-y-4 md:space-y-6">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.15 }}
              >
                <Link to={`/projects/${project.title.toLowerCase().replace(' ', '-')}`} className="project-card block">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="project-card-overlay rounded-2xl" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <h3 className="text-primary-foreground text-base md:text-lg font-medium">
                      {project.title}
                    </h3>
                    <span className="text-primary-foreground/70 text-xs">{project.year}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
