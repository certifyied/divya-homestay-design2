import React, { useState } from "react";
import { Link } from "react-router-dom";
import galleryHero from "@/assets/ABC04045 (1).jpg";
import Layout from "@/components/layout/Layout";

/* Gallery Images */
import img1 from "@/assets/ABC04057 (1).jpg";
import img2 from "@/assets/ABC03931 (1).jpg";
import img3 from "@/assets/ABC04045 (1).jpg";
import img4 from "@/assets/ABC04008 (1).jpg";
import img5 from "@/assets/ABC04163 (1).jpg";
import img6 from "@/assets/AC03900 (1).jpg";
import img7 from "@/assets/GALLERY03936 (1).jpg";
import img8 from "@/assets/GALLRY1ABC04000 (1).jpg";
import img9 from "@/assets/ABC04009 (1).jpg";
// import img10 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
// import img11 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
// import img12 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
// import img13 from "@/assets/87da99b67e69cee29f9fc43b8ab21f69.webp";
import img14 from "@/assets/ROOM03868s (1).jpeg";
import img15 from "@/assets/ABC03979 (2).jpg";

const images = [
  img1,img2,img3,img4,img5,
  img6,img7,img8,img9,img14,img15
];

/* Different heights for masonry */
const heights = [
  "h-[260px]",
  "h-[420px]",
  "h-[300px]",
  "h-[500px]",
  "h-[350px]",
  "h-[280px]",
  "h-[460px]",
  "h-[320px]",
  "h-[380px]",
  "h-[260px]",
  "h-[430px]",
  "h-[300px]",
  "h-[360px]",
  "h-[480px]",
  "h-[340px]"
];

function Gallery() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <section className="w-full">

        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
          <img
            src={galleryHero}
            alt="Pendora Gallery"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-wide text-white">
              Moments at Pendora
            </h1>

            <p className="text-gray-200 mt-4 max-w-xl">
              Discover the beauty, comfort, and unforgettable experiences from our luxury glamping retreat.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="container-wide pt-14">
          <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#164e63]">Gallery</span>
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="container-wide py-16">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">

            {images.map((img, index) => (
              <div
                key={index}
                className={`mb-6 break-inside-avoid overflow-hidden group cursor-pointer ${heights[index]}`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}

          </div>
        </div>

        {/* Full Screen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Full view"
              className="max-h-[90vh] max-w-[90vw] object-contain "
            />

          </div>
        )}

      </section>
    </Layout>
  );
}

export default Gallery;