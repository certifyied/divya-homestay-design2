import { motion } from 'framer-motion';
import team1 from "@/assets/Sarah-Chen-web-1024x991.jpg";
import team2 from "@/assets/Marc_Webb_by_Gage_Skidmore_2.jpg";
import team3 from "@/assets/968_big.jpg";
import Layout from '@/components/layout/Layout';
import offerImage from '@/assets/dji_mimo_20250319_173514_20250319173514_1742393975570_photo-scaled-e1748857014857-768x1026.webp';
import heroImage from '@/assets/khanabadosh-glamps-kumrat0_1714215050 (1).jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full h-[460px] md:h-[600px] overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Our studio workspace"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                We believe great design transforms lives
              </h1>

              <p className="text-lg md:text-xl text-gray-200">
                INNERFORM was founded with a simple vision: to create spaces that feel like home
                from the very first moment. We combine thoughtful design with genuine care for
                our clients' wellbeing.
              </p>
            </motion.div>
          </div>
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
              <h2 className="text-display-md mb-6 text-[#164e63]">
                Our Story
              </h2>
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
              className="roverflow-hidden"
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
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#164e63]">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md mb-16 text-center text-white"
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
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-2xl font-display font-medium mb-4 text-[#164e63]">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
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
      <h2 className="text-display-md mb-4 text-[#164e63]">Meet Our Team</h2>
      <p className="text-body-lg max-w-xl mx-auto">
        A passionate group of designers, architects, and dreamers dedicated to creating
        extraordinary spaces.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        {
          name: 'Sarah Chen',
          role: 'Founder & Creative Director',
          image: team1
        },
        {
          name: 'Marcus Webb',
          role: 'Lead Architect',
          image: team2
        },
        {
          name: 'Elena Rossi',
          role: 'Senior Interior Designer',
          image: team3
        },
      ].map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="text-center"
        >
          <div className="aspect-square overflow-hidden rounded-2xl mb-6 group">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <h3 className="text-xl font-medium mb-2 text-[#164e63]">
            {member.name}
          </h3>

          <p className="text-gray-600">{member.role}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </Layout>
  );
};

export default About;
