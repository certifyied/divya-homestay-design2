import Layout from "@/components/layout/Layout";
import React from "react";
import { Link } from "react-router-dom";

import heroImg from "@/assets/GALLERYCOVERIMAGE (1).jpg";
import blog1 from "@/assets/ABC03931 (1).jpg";
import blog2 from "@/assets/ABC04057 (1) (1) (1).jpg";
import blog3 from "@/assets/ABC04009 (1).jpg";
import blog4 from "@/assets/ABC04000 (1).jpg";
import blog5 from "@/assets/ABC04088 (1).jpg";
import blog6 from "@/assets/ABC04163 (1).jpg";

const blogs = [
  {
    id: 1,
    title: "Top 5 Experiences You Should Try in Vagamon",
    desc: "Discover the best things to do in Vagamon including paragliding, tea plantation walks, pine forest visits, and peaceful hilltop sunsets.",
    img: blog1,
  },
  {
    id: 2,
    title: "Why Glamping in Vagamon is a Unique Experience",
    desc: "Enjoy the beauty of nature without giving up comfort. Glamping in Vagamon offers luxury dome stays with stunning valley and mountain views.",
    img: blog2,
  },
  {
    id: 3,
    title: "A Perfect Weekend Getaway in Vagamon Hills",
    desc: "Escape city life and spend a relaxing weekend surrounded by cool mountain air, rolling meadows, and scenic viewpoints.",
    img: blog3,
  },
  {
    id: 4,
    title: "Best Time to Visit Vagamon for Nature Lovers",
    desc: "Planning a trip to Vagamon? Learn about the best seasons to enjoy misty hills, lush greenery, and beautiful weather.",
    img: blog4,
  },
  {
    id: 5,
    title: "Exploring Vagamon Tea Plantations",
    desc: "Take a peaceful walk through Vagamon’s famous tea estates and experience breathtaking landscapes and fresh mountain air.",
    img: blog5,
  },
  {
    id: 6,
    title: "Experience Luxury Dome Stay in Vagamon",
    desc: "Stay in a unique luxury dome surrounded by nature and enjoy unforgettable nights under the stars in the beautiful hills of Vagamon.",
    img: blog6,
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
                className="relative h-[420px] overflow-hidden rounded-md group"
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