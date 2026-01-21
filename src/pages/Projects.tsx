import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import projectNatural from '@/assets/project-natural-luxury.jpg';
import projectBlack from '@/assets/project-modern-black.jpg';
import projectWood from '@/assets/project-wood-mode.jpg';
import heroImage from '@/assets/hero-kitchen.jpg';

const allProjects = [
  {
    id: 'natural-luxury',
    title: 'Natural Luxury',
    category: 'Residential',
    year: '2025',
    image: projectNatural,
    location: 'Aspen, Colorado',
  },
  {
    id: 'modern-black',
    title: 'Modern Black',
    category: 'Residential',
    year: '2024',
    image: projectBlack,
    location: 'New York, NY',
  },
  {
    id: 'wood-mode',
    title: 'Wood Mode',
    category: 'Commercial',
    year: '2024',
    image: projectWood,
    location: 'Portland, Oregon',
  },
  {
    id: 'urban-retreat',
    title: 'Urban Retreat',
    category: 'Residential',
    year: '2024',
    image: heroImage,
    location: 'San Francisco, CA',
  },
  {
    id: 'coastal-modern',
    title: 'Coastal Modern',
    category: 'Residential',
    year: '2023',
    image: projectNatural,
    location: 'Miami, Florida',
  },
  {
    id: 'minimalist-office',
    title: 'Minimalist Office',
    category: 'Commercial',
    year: '2023',
    image: projectBlack,
    location: 'Austin, Texas',
  },
];

const categories = ['All', 'Residential', 'Commercial'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-display-lg mb-8">Our Projects</h1>
            <p className="text-body-lg">
              Explore our portfolio of residential and commercial spaces. Each project 
              tells a unique story of collaboration, creativity, and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container-wide">
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-foreground hover:bg-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Link to={`/projects/${project.id}`} className="project-card block group">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="project-card-overlay rounded-2xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-primary-foreground/70 text-sm mb-1">{project.location}</p>
                        <h3 className="text-primary-foreground text-xl md:text-2xl font-medium">
                          {project.title}
                        </h3>
                      </div>
                      <span className="text-primary-foreground/70 text-sm">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
