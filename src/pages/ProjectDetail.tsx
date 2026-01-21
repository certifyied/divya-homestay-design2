import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import projectNatural from '@/assets/project-natural-luxury.jpg';
import projectBlack from '@/assets/project-modern-black.jpg';
import projectWood from '@/assets/project-wood-mode.jpg';
import heroImage from '@/assets/hero-kitchen.jpg';

const projectsData: Record<string, {
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  area: string;
  duration: string;
  images: string[];
  materials: string[];
}> = {
  'natural-luxury': {
    title: 'Natural Luxury',
    category: 'Residential',
    year: '2025',
    location: 'Aspen, Colorado',
    description: 'A stunning mountain retreat that seamlessly blends modern design with natural elements. Floor-to-ceiling windows frame breathtaking forest views while warm wood tones and organic textures create an inviting atmosphere.',
    area: '4,500 sq ft',
    duration: '18 months',
    images: [projectNatural, heroImage, projectWood],
    materials: ['Reclaimed Oak', 'Natural Stone', 'Linen Textiles', 'Brass Fixtures'],
  },
  'modern-black': {
    title: 'Modern Black',
    category: 'Residential',
    year: '2024',
    location: 'New York, NY',
    description: 'A bold urban penthouse that embraces darkness as a design feature. Deep charcoal tones, dramatic lighting, and luxurious textures create a sophisticated sanctuary in the heart of Manhattan.',
    area: '3,200 sq ft',
    duration: '14 months',
    images: [projectBlack, projectNatural, heroImage],
    materials: ['Black Marble', 'Velvet Upholstery', 'Smoked Glass', 'Matte Black Steel'],
  },
  'wood-mode': {
    title: 'Wood Mode',
    category: 'Commercial',
    year: '2024',
    location: 'Portland, Oregon',
    description: 'A Japanese-inspired commercial space that celebrates the beauty of natural wood. Every surface tells a story through carefully selected timber, creating a warm and grounding work environment.',
    area: '2,800 sq ft',
    duration: '10 months',
    images: [projectWood, projectBlack, projectNatural],
    materials: ['Japanese Cedar', 'White Oak', 'Rice Paper Screens', 'Copper Accents'],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[id || ''] || projectsData['natural-luxury'];

  return (
    <Layout>
      {/* Back Link */}
      <section className="pt-28 md:pt-32">
        <div className="container-wide">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-8 pb-16 md:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-muted-foreground">{project.category}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.location}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-display-lg">{project.title}</h1>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[16/9]"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-section-title mb-6">About the Project</h2>
              <p className="text-body-lg leading-relaxed">{project.description}</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Area</p>
                <p className="text-xl font-medium">{project.area}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Duration</p>
                <p className="text-xl font-medium">{project.duration}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3">Materials</p>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((material) => (
                    <span
                      key={material}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section-title mb-8"
          >
            Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-md mb-6">Ready to start your project?</h2>
            <p className="text-body-lg max-w-lg mx-auto mb-8">
              Let's discuss how we can transform your space into something extraordinary.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
