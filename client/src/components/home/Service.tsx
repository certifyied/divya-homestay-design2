// import React from "react";
// import {
//   Wifi,
//   Coffee,
//   Car,
//   ParkingCircle,
//   BatteryCharging,
//   Utensils,
//   Baby,
//   Waves,
//   Bath,
//   CreditCard,
//   Wind,
//   Dog,
//   ShowerHead,
//   Flame,
//   Music
// } from "lucide-react";

// function Service() {
//   const sections = [
//     {
//       title: "Popular Amenities",
//       showFreeBadge: true,
//       items: [
//         { icon: Coffee, name: "Breakfast" },
//         { icon: Wifi, name: "Free WiFi" },
//         { icon: Car, name: "Parking" },
//         { icon: Waves, name: "Hot Tub Jacuzzi" },
//         { icon: BatteryCharging, name: "Free EV Charging" },

//         // ✅ NEW ITEMS
//         { icon: Flame, name: "Campfire Nights" },
//         { icon: Music, name: "Live Music Experience" }
//       ]
//     },
//     {
//       title: "Internet",
//       showFreeBadge: true,
//       items: [
//         { icon: Wifi, name: "Free WiFi Available" },
//         { icon: Wifi, name: "WiFi in Public Areas" }
//       ]
//     },
//     {
//       title: "Food & Drink",
//       items: [
//         { icon: Utensils, name: "Room Service" },
//         { icon: Coffee, name: "Free Breakfast Available" }
//       ]
//     },
//     {
//       title: "Children",
//       items: [
//         { icon: Baby, name: "Children Friendly" },
//         { icon: Baby, name: "Activities for Kids" }
//       ]
//     },
//     {
//       title: "Jacuzzi",
//       showFreeBadge: true,
//       items: [
//         { icon: Bath, name: "Hot Tub Jacuzzi" },
//         { icon: Bath, name: "Bubble Bath" }
//       ]
//     },
//     {
//       title: "Parking & Transportation",
//       showFreeBadge: true,
//       items: [
//         { icon: ParkingCircle, name: "Free Parking" },
//         { icon: Car, name: "Free Self Parking" }
//       ]
//     },
//     {
//       title: "Policies & Payments",
//       items: [
//         { icon: Flame, name: "Smoke Free Property" },
//         {
//           icon: CreditCard,
//           name: "Online Payments (Debit Card, Credit Card, UPI, Cash)"
//         }
//       ]
//     },
//     {
//       title: "Glamps",
//       items: [
//         { icon: Wind, name: "Air Conditioning in All Glamps" },
//         { icon: Coffee, name: "Coffee Maker in All Glamps" }
//       ]
//     },
//     {
//       title: "Pet Friendly",
//       items: [{ icon: Dog, name: "Pets Allowed" }]
//     },
//     {
//       title: "Bathroom",
//       items: [
//         { icon: Bath, name: "Private Bathroom in All Glamps" },
//         { icon: ShowerHead, name: "Showers in All Glamps" },
//         { icon: Wind, name: "Hair Dryer" },
//         { icon: Bath, name: "Hot Water" }
//       ]
//     }
//   ];

//   return (
//     <section className="py-16 px-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-semibold mb-12 text-center">
//         Services & Amenities
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {sections.map((section, i) => (
//           <div key={i}>
//             <h2 className="text-xl font-semibold mb-4">
//               {section.title}
//             </h2>

//             <div className="space-y-3">
//               {section.items.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
//                   >
//                     <Icon className="w-5 h-5 text-[#164e63]" />

//                     <span className="text-sm font-medium">
//                       {item.name}
//                     </span>

//                     {section.showFreeBadge && (
//                       <span className="ml-auto text-[10px] px-2 py-[2px] border border-[#164e63] text-[#164e63] rounded-md font-medium uppercase">
//                         free
//                       </span>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Service;

import React from "react";
import {
  Wifi,
  Coffee,
  Car,
  ParkingCircle,
  BatteryCharging,
  Utensils,
  Baby,
  Waves,
  Bath,
  CreditCard,
  Wind,
  Dog,
  ShowerHead,
  Flame,
  Music
} from "lucide-react";

function Service() {
  const sections = [
    {
      title: "Popular Amenities",
      highlight: true,
      showFreeBadge: true,
      items: [
        { icon: Coffee, name: "Breakfast" },
        { icon: Wifi, name: "Free WiFi" },
        { icon: Car, name: "Parking" },
        { icon: Waves, name: "Hot Tub Jacuzzi" },
        { icon: BatteryCharging, name: "EV Charging" },
        { icon: Flame, name: "Campfire Nights" },
        { icon: Music, name: "Live Music" }
      ]
    },
    {
      title: "Internet",
      showFreeBadge: true,
      items: [
        { icon: Wifi, name: "Free WiFi Available" },
        { icon: Wifi, name: "WiFi in Public Areas" }
      ]
    },
    {
      title: "Food & Drink",
      items: [
        { icon: Utensils, name: "Room Service" },
        { icon: Coffee, name: "Free Breakfast" }
      ]
    },
    {
      title: "Children",
      items: [
        { icon: Baby, name: "Children Friendly" },
        { icon: Baby, name: "Kids Activities" }
      ]
    },
    {
      title: "Jacuzzi",
      showFreeBadge: true,
      items: [
        { icon: Bath, name: "Hot Tub Jacuzzi" },
        { icon: Bath, name: "Bubble Bath" }
      ]
    },
    {
      title: "Parking",
      showFreeBadge: true,
      items: [
        { icon: ParkingCircle, name: "Free Parking" },
        { icon: Car, name: "Self Parking" }
      ]
    },
    {
      title: "Payments",
      items: [
        { icon: CreditCard, name: "Cards / UPI / Cash" },
        { icon: Flame, name: "Smoke Free Property" }
      ]
    },
    {
      title: "Glamps",
      items: [
        { icon: Wind, name: "Air Conditioning" },
        { icon: Coffee, name: "Coffee Maker" }
      ]
    },
    {
      title: "Pet Friendly",
      items: [{ icon: Dog, name: "Pets Allowed" }]
    },
    {
      title: "Bathroom",
      items: [
        { icon: Bath, name: "Private Bathroom" },
        { icon: ShowerHead, name: "Shower" },
        { icon: Wind, name: "Hair Dryer" },
        { icon: Bath, name: "Hot Water" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-16">
          Services & Amenities
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 shadow-sm border bg-white ${
                section.highlight ? "lg:col-span-2" : ""
              }`}
            >
              <h2 className="text-lg font-semibold mb-6">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="p-2 rounded-lg bg-[#164e63]/10">
                        <Icon className="w-4 h-4 text-[#164e63]" />
                      </div>

                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>

                      {/* ✅ PREMIUM FREE BADGE */}
                      {section.showFreeBadge && (
                        <span className="ml-auto text-[10px] px-2.5 py-1 rounded-full bg-[#164e63]/10 text-[#164e63] font-semibold tracking-wide">
                          FREE
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;