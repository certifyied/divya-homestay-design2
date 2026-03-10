import Layout from "@/components/layout/Layout";
import React from "react";
import { Link } from "react-router-dom";

import heroImg from "@/assets/World-Earth-Day_001.webp";
import blog1 from "@/assets/World-Earth-Day_001.webp";
import blog2 from "@/assets/photo-1500530855697-b586d89ba3ee.avif";
import blog3 from "@/assets/photo-1506744038136-46273834b3fb.avif";
import blog4 from "@/assets/photo-1507525428034-b723cf961d3e.avif";

const blogs = [
  {
    id: 1,
    title: "Top 5 Experiences You Should Try in Thekkady",
    desc: "Discover the best activities to enjoy during your stay in Thekkady, from jungle safaris to peaceful nature walks.",
    img: blog1,
  },
  {
    id: 2,
    title: "Why Glamping is the Future of Luxury Travel",
    desc: "Glamping combines nature with comfort. Learn why travelers are choosing luxury camping experiences.",
    img: blog2,
  },
  {
    id: 3,
    title: "A Perfect Weekend Getaway in The Hills",
    desc: "Escape the city and relax in nature. Here's how you can spend a perfect weekend surrounded by mountains.",
    img: blog3,
  },
  {
    id: 4,
    title: "Best Time to Visit Thekkady for Nature Lovers",
    desc: "Planning a trip? Discover the best seasons to experience wildlife, greenery, and beautiful landscapes.",
    img: blog4,
  },
];

function BlogsPage() {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] overflow-hidden">
          <img src={heroImg} alt="Blogs" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="text-white max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                Explore Our Latest <br /> Blogs
              </h1>

              <p className="text-lg md:text-xl text-gray-200">
                Discover the Best of Munnar
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
            <span className="text-[#164e63]">Blogs</span>
          </p>
        </div>

        {/* Blogs Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="relative h-[420px] overflow-hidden group"
              >
                {/* Image */}
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>

                  <p className="text-sm text-gray-200 mb-3">{blog.desc}</p>

                  <button className="text-sm font-semibold border-b border-white hover:text-gray-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogsPage;