import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import team1 from "@/assets/Sarah-Chen-web-1024x991.jpg";
import team2 from "@/assets/Marc_Webb_by_Gage_Skidmore_2.jpg";
import team3 from "@/assets/968_big.jpg";
import Layout from "@/components/layout/Layout";
import offerImage from "@/assets/ABOUT0260311_170805 (1).jpg";
import heroImage from "@/assets/ABOUTCOVERIMAGEC04090 (1).jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[460px] md:h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="Our studio workspace"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                We believe great design transforms lives
              </h1>

              <p className="text-lg md:text-xl text-gray-200">
                INNERFORM was founded with a simple vision: to create spaces
                that feel like home from the very first moment. We combine
                thoughtful design with genuine care for our clients' wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb (Now directly below hero) */}
      <div className="container-wide py-6">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#164e63]">About</span>
        </p>
      </div>

      {/* Story Section */}
      <section className="py-16 md:py-24 pt-0">
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
                  Our journey started with a small beginning. Initially, we owned and managed a cottage stay where guests could come, relax, and enjoy the peaceful surroundings of nature. Through this experience, we understood what travelers truly look for — a calm place, privacy, and a refreshing environment away from busy city life.
                </p>

                <p>
                  While running the cottage, we began exploring new ideas to create something more unique and memorable for our guests. During that time, we came across a photo of a dome-style stay, and that image inspired us with a new idea.
                </p>

                <p>
                  That inspiration led us to start our own dome stay concept. We wanted to create a place that offers a different and special experience compared to regular stays.
                </p>

                <p>
                  Today, our dome stay is located in the middle of beautiful greenery and plantations, providing a peaceful and quiet atmosphere. It is a perfect getaway for newly married couples, couples looking for a romantic escape, and families who want to spend quality time together in nature.
                </p>

                <p>
                  Our goal is simple — to give every guest a cozy, refreshing, and memorable stay where they can relax, enjoy the beautiful views, and experience the calmness of nature.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-md group"
            >
              <img
                src={offerImage}
                alt="Interior detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-16 md:py-24 bg-[#164e63]">
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
                title: "Authenticity",
                description:
                  "We design spaces that reflect who you truly are, not trends that fade.",
              },
              {
                title: "Collaboration",
                description:
                  "Your vision guides every decision. We listen, we learn, we create together.",
              },
              {
                title: "Excellence",
                description:
                  "Every detail matters. We pursue perfection in materials, craft, and execution.",
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
      </section> */}

      {/* Team Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md mb-4 text-[#164e63]">
              Meet Our Team
            </h2>

            <p className="text-body-lg max-w-xl mx-auto">
              A passionate group of designers, architects, and dreamers
              dedicated to creating extraordinary spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & Creative Director",
                image: team1,
              },
              {
                name: "Marcus Webb",
                role: "Lead Architect",
                image: team2,
              },
              {
                name: "Elena Rossi",
                role: "Senior Interior Designer",
                image: team3,
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
      </section> */}
    </Layout>
  );
};

export default About;