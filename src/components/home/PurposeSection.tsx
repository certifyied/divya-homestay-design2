import { motion } from 'framer-motion';
import architectureModel from '@/assets/architecture-model.jpg';

const stats = [
  { number: '10', suffix: '+', label: 'Years in Design' },
  { number: '4.5', suffix: 'k', label: 'Satisfied Clients' },
  { number: '120', suffix: '+', label: 'Finished Projects' },
];

const PurposeSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display-lg mb-16 md:mb-24"
        >
          We Design With Purpose
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Stats */}
          <div className="lg:col-span-4 space-y-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="stat-number">
                  {stat.number}
                  <span className="text-muted-foreground">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Architecture Model Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={architectureModel}
                  alt="3D architectural model"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6 max-w-sm ml-auto text-right">
                <p className="text-body text-muted-foreground">
                  Every detail is intentional — combining aesthetics with{' '}
                  <span className="text-foreground font-medium">real-life function.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
