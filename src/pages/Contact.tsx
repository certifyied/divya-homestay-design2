import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import heroImage from "@/assets/mare-delle-andamane-thailandia-11-giorni-in-catamarano-main.jpg";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>

      {/* Hero Image */}
      <section className="relative w-full h-[460px] md:h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="Contact"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">
              Need Help Planning? Just <br /> Contact Us
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Your Vacation Planner!
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container-wide py-6">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#164e63]">Contact</span>
        </p>
      </div>

      {/* Contact Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-title mb-8">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input-field"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input-field"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="input-field"
                />

                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="input-field min-h-[150px] resize-none"
                  required
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-[#164e63] text-white text-sm tracking-widest uppercase transition-all duration-500 hover:bg-transparent hover:text-[#164e63] border border-[#164e63]"
                >
                  Send Message
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-title mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#164e63]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Studio Location</h3>
                    <p className="text-muted-foreground">
                      123 Design District <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#164e63]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#164e63]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      hello@innerform.studio
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-12 p-8 bg-[#164e63]/10 rounded-2xl">
                <h3 className="font-medium mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;