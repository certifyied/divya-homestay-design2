import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import offerImage from '@/assets/offer-decor.jpg';
import heroImage from '@/assets/hero-kitchen.jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-display-lg mb-8">
              We believe great design transforms lives
            </h1>
            <p className="text-body-lg max-w-2xl">
              INNERFORM was founded with a simple vision: to create spaces that feel like home 
              from the very first moment. We combine thoughtful design with genuine care for 
              our clients' wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[16/7]"
          >
            <img
              src={heroImage}
              alt="Our studio workspace"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display-md mb-6">Our Story</h2>
              <div className="space-y-6 text-body-lg">
                <p>
                  Founded in 2015, INNERFORM began as a small studio with big dreams. 
                  Our founders believed that interior design should be accessible, personal, 
                  and transformative.
                </p>
                <p>
                  Today, we've grown into a full-service design studio, but our core values 
                  remain the same: listen deeply, design thoughtfully, and deliver spaces 
                  that exceed expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={offerImage}
                alt="Interior detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md mb-16 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'We design spaces that reflect who you truly are, not trends that fade.',
              },
              {
                title: 'Collaboration',
                description: 'Your vision guides every decision. We listen, we learn, we create together.',
              },
              {
                title: 'Excellence',
                description: 'Every detail matters. We pursue perfection in materials, craft, and execution.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-background rounded-2xl p-8"
              >
                <h3 className="text-2xl font-display font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md mb-4">Meet Our Team</h2>
            <p className="text-body-lg max-w-xl mx-auto">
              A passionate group of designers, architects, and dreamers dedicated to creating 
              extraordinary spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Founder & Creative Director' },
              { name: 'Marcus Webb', role: 'Lead Architect' },
              { name: 'Elena Rossi', role: 'Senior Interior Designer' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="aspect-square bg-secondary rounded-2xl mb-6" />
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
