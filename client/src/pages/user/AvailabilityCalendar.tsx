import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import API from "@/utils/axios";
import Layout from "@/components/layout/Layout";

const rooms = ["room1", "room2"];

const AvailabilityCalendar = () => {
  const [availability, setAvailability] = useState<Record<string, string[]>>({
    room1: [],
    room2: [],
  });

  const fetchAvailability = async () => {
    const res = await API.get("/availability");
    setAvailability(res.data);
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  return (
    <Layout>
      <div className="px-4 sm:px-6 md:px-10 py-10 bg-gray-100 min-h-screen mt-24">
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Check Room Availability
        </h2>

        {/* legend */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-sm">
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div> Available
          </span>
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div> Booked
          </span>
        </div>

        {/* calendar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">

          {rooms.map((room) => (
            <div
              key={room}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center capitalize">
                {room === "room1" ? "Garden Room" : "Lake View Room"}
              </h3>

              <div className="calendar-wrapper">
                <Calendar
                  className="w-full"
                  tileClassName={({ date }) => {
                    const formatted = dayjs(date).format("YYYY-MM-DD");

                    if (availability[room]?.includes(formatted)) {
                      return "booked-date";
                    }

                    return "available-date";
                  }}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </Layout>
  );
};

export default AvailabilityCalendar;