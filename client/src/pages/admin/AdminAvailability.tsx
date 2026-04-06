// import { useEffect, useState } from "react";
// import dayjs from "dayjs";
// import API from "@/utils/axios";

// const rooms = ["room1", "room2"];

// const AdminAvailability = () => {
//   const [availability, setAvailability] = useState<Record<string, string[]>>({
//     room1: [],
//     room2: [],
//   });

//   const today = dayjs();
//   const days = Array.from({ length: 15 }, (_, i) =>
//     today.add(i, "day").format("YYYY-MM-DD")
//   );

//   // GET availability
//   const fetchAvailability = async () => {
//     const res = await API.get("/availability");
//     setAvailability(res.data);
//   };

//   useEffect(() => {
//     fetchAvailability();
//   }, []);

//   // Toggle booking
// const toggleDate = async (roomId: string, date: string) => {

//   let dates = availability[roomId] || [];

//   // if date already booked remove it
//   if (dates.includes(date)) {
//     dates = dates.filter((d) => d !== date);
//   } 
//   // if available add it
//   else {
//     dates = [...dates, date];
//   }

//   // update backend
//   await API.post(`/availability/${roomId}`, {
//     unavailableDates: dates
//   });

//   // update UI
//   setAvailability({
//     ...availability,
//     [roomId]: dates
//   });

// };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Room Availability</h2>

//       <table className="border">
//         <thead>
//           <tr>
//             <th className="border p-2">Room</th>
//             {days.map((day) => (
//               <th key={day} className="border p-2">
//                 {day.slice(5)}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {rooms.map((room) => (
//             <tr key={room}>
//               <td className="border p-2 font-semibold">{room}</td>

//               {days.map((day) => {
//                 const booked = availability[room]?.includes(day);

//                 return (
//                   <td
//   key={day}
//   onClick={() => toggleDate(room, day)}
//   className={`border p-2 text-center cursor-pointer ${
//     availability[room]?.includes(day)
//       ? "bg-red-400"
//       : "bg-green-400"
//   }`}
// >
//   {availability[room]?.includes(day) ? "❌" : "✅"}
// </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminAvailability;



import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import API from "@/utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";

const rooms = ["room1", "room2"];

const AdminAvailability = () => {
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

    // SAME FUNCTION (unchanged)
    const toggleDate = async (roomId: string, date: string) => {

        let dates = availability[roomId] || [];

        if (dates.includes(date)) {
            dates = dates.filter((d) => d !== date);
        } else {
            dates = [...dates, date];
        }

        await API.post(`/availability/${roomId}`, {
            unavailableDates: dates
        });

        setAvailability({
            ...availability,
            [roomId]: dates
        });

    };

    return (
        <AdminLayout>
            <div className="min-h-[80vh] p-6 mt-24">
                <div>

                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Room Availability
                    </h2>

                    {/* ⭐ Add legend here */}
                    <div className="flex justify-center gap-6 mb-8 text-sm">
                        <span className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded"></div> Available
                        </span>
                        <span className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-red-500 rounded"></div> Booked
                        </span>
                    </div>

                    {/* Calendars */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {rooms.map((room) => (
                            <div className="w-full overflow-x-auto">
                                 <h3 className="text-xl font-semibold mb-4 capitalize text-center">
                                    {room === "room1" ? "Garden Room" : "Lake View Room"}
                                </h3>
                                <Calendar
                                    className="w-full max-w-full"
                                    onClickDay={(value) =>
                                        toggleDate(room, dayjs(value).format("YYYY-MM-DD"))
                                    }
                                    tileClassName={({ date }) => {
                                        const formatted = dayjs(date).format("YYYY-MM-DD");

                                        if (availability[room]?.includes(formatted)) {
                                            return "booked-date";
                                        }

                                        return "available-date";
                                    }}
                                />
                            </div>

                        ))}

                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminAvailability;