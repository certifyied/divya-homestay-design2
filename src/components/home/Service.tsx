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
  Flame
} from "lucide-react";

function Service() {
  const sections = [
    {
      title: "Popular Amenities",
      showFreeBadge: true,
      items: [
        { icon: Coffee, name: "Breakfast" },
        { icon: Wifi, name: "Free WiFi" },
        { icon: Car, name: "Parking" },
        { icon: Waves, name: "Hot tub Jacuzzi" },
        { icon: BatteryCharging, name: "Free EV Charging" }
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
        { icon: Coffee, name: "Free Breakfast Available" }
      ]
    },
    {
      title: "Children",
      items: [
        { icon: Baby, name: "Children Friendly" },
        { icon: Baby, name: "Activities for Kids" }
      ]
    },
    {
      title: "Jaccuzi",
      showFreeBadge: true,
      items: [
        { icon: Bath, name: "Hot Tub Jacuzzi" },
        { icon: Bath, name: "Bubble Bath" }
      ]
    },
    {
      title: "Parking & Transportation",
      showFreeBadge: true,
      items: [
        { icon: ParkingCircle, name: "Free Parking" },
        { icon: Car, name: "Free Self Parking" }
      ]
    },
    {
      title: "Policies & Payments",
      items: [
        { icon: Flame, name: "Smoke Free Property" },
        { icon: CreditCard, name: "Online Payments (Debit Card, Credit Card, UPI, Cash)" }
      ]
    },
    {
      title: "Rooms",
      items: [
        { icon: Wind, name: "Air Conditioning in All Rooms" },
        { icon: Coffee, name: "Coffee Maker in All Rooms" }
      ]
    },
    {
      title: "Pet Friendly",
      items: [{ icon: Dog, name: "Pets Allowed" }]
    },
    {
      title: "Bathroom",
      items: [
        { icon: Bath, name: "Private Bathroom in All Rooms" },
        { icon: ShowerHead, name: "Showers in All Rooms" },
        { icon: Wind, name: "Hair Dryer" },
        { icon: Bath, name: "Hot Water" }
      ]
    }
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-12 text-center">
        Services & Amenities
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

            <div className="space-y-3">
              {section.items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-gray-700" />

                    <span className="text-sm font-medium">{item.name}</span>

                    {section.showFreeBadge && (
                      <span className="ml-auto text-[10px] px-2 py-[2px] border border-gray-400 rounded-md font-medium">
                        free
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;