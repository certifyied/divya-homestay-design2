import React from "react";

function Videosection() {
    return (
        <div className="w-full py-20 px-4 md:px-10">

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 items-center gap-8">

                {/* LEFT - Video */}
                <div className="relative group w-full rounded-3xl overflow-hidden shadow-2xl">
                    {/* <video
                        src="src/assets/PENDORA REEL.MOV"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    /> */}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/10 border-t border-white/20 px-4 py-3 text-center">
                        <p className="text-white text-sm font-medium tracking-wide">
                            PENDORA GLAMPS
                        </p>
                        <p className="text-white/70 text-xs">
                            Vagamon, Kerala
                        </p>
                    </div>
                </div>

                {/* CENTER - Vertical Line */}
                <div className="hidden md:flex justify-center">
                    <div className="w-[1px] h-[600px] bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
                </div>

                {/* RIGHT - Content */}
                <div className="text-left">

                    {/* ✅ Heading moved here */}
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide text-gray-900 text-[#0f4c5c] ">
                        Indulge in Nature’s Finest Retreat
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-serif">
                        Pendora Glamps in Vagamon offers a luxurious escape immersed in nature’s calm. Set against a backdrop of misty hills and open landscapes, this glamping retreat is perfect for travelers seeking peace, privacy, and a unique outdoor experience.
                    </p>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-serif">
                        With two premium glamping units, guests can enjoy a more private and intimate stay experience. Each glamp is thoughtfully designed to provide comfort, style, and a close connection to nature. Ideal for couples and small groups, Pendora Glamps promises a serene getaway away from the noise of the city.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Videosection;