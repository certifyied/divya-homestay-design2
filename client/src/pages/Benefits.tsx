import { motion } from 'framer-motion';
import { Check, Clock, Users, Award, Sparkles, Shield } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const benefits = [
  {
    icon: Users,
    title: 'Personal Approach',
    description: 'Every project begins with deep listening. We understand your lifestyle, preferences, and dreams before sketching a single line.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect your time. Our streamlined process ensures projects are completed on schedule without compromising quality.',
  },
  {
    icon: Award,
    title: 'Award-Winning Design',
    description: 'Our work has been recognized by industry leaders. Excellence isn\'t just our goal—it\'s our standard.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description: 'From the perfect light fixture to the ideal fabric texture, we obsess over every element that makes a space extraordinary.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We work only with trusted craftsmen and premium materials. Every installation is inspected to our rigorous standards.',
  },
  {
    icon: Check,
    title: 'Full-Service Support',
    description: 'From concept to completion and beyond, we\'re with you every step. Our aftercare ensures lasting satisfaction.',
  },
];

const Benefits = () => {
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
            <h1 className="text-display-lg mb-8">
              Why clients choose INNERFORM
            </h1>
            <p className="text-body-lg">
              We don't just design spaces—we create experiences. Here's what sets us apart 
              and why our clients trust us with their most important projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '4.5k', label: 'Happy Clients' },
              { number: '120+', label: 'Projects Done' },
              { number: '15', label: 'Industry Awards' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-number text-primary-foreground">{stat.number}</div>
                <p className="stat-label text-primary-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md mb-16 text-center"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We learn about your vision, lifestyle, and goals.' },
              { step: '02', title: 'Concept', description: 'We develop creative concepts and present options.' },
              { step: '03', title: 'Design', description: 'We refine every detail of your perfect space.' },
              { step: '04', title: 'Delivery', description: 'We oversee installation and final touches.' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-display text-muted-foreground/30 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-medium mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Benefits;
