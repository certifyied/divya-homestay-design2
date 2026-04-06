import AdminLayout from "@/components/admin/AdminLayout";
import { useNavigate } from "react-router-dom";
import dashboardBanner from "@/assets/023.jpg";
import { Calendar, PlusCircle } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="min-h-[80vh] p-6 mt-20">

        {/* Banner Section */}
        <div className="relative w-full h-[380px] overflow-hidden shadow-xl ">
          <img
            src={dashboardBanner}
            alt="Homestay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
              Welcome Admin
            </h1>
            <p className="text-lg drop-shadow-md">
              Manage room availability and experiences easily
            </p>
          </div>
        </div>

        {/* Dashboard Title */}
        <h1 className="text-3xl font-bold mb-10 text-gray-800 mt-4">
          Admin Dashboard
        </h1>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mark Calendar Button */}
          <button
            onClick={() => navigate("/admin/calendar")}
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#164e63] to-[#1e6b7b] text-white rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <Calendar className="w-8 h-8" />
            <div className="text-left">
              <h2 className="text-xl font-semibold">Mark Calendar</h2>
              <p className="text-sm opacity-90">
                Mark booked and unavailable dates for Glamps.
              </p>
            </div>
          </button>

          {/* Add Experience Button */}
          <button
            onClick={() => navigate("/admin/add-experience")}
            className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#164e63] to-[#1e6b7b] text-white rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <PlusCircle className="w-8 h-8" />
            <div className="text-left">
              <h2 className="text-xl font-semibold">Add Experience</h2>
              <p className="text-sm opacity-90">
                Add new experiences for guests visiting the homestay.
              </p>
            </div>
          </button>

        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;