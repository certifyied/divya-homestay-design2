import AdminLayout from "@/components/admin/AdminLayout";
import API from "@/utils/axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Admin {
    name: string;
    email: string;
    mobile: string;
    role: string;
}

const AdminProfile = () => {
    const navigate = useNavigate();

    const [admin, setAdmin] = useState<Admin>({
        name: "",
        email: "",
        mobile: "",
        role: "",
    });

    const [activeTab, setActiveTab] = useState<"info" | "update" | "password">("info");

    const [profileInputs, setProfileInputs] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const [passwords, setPasswords] = useState({
        oldPassword: "",
        retypeOldPassword: "",
        newPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    // Fetch admin profile
    const fetchProfile = async () => {
        try {
            const { data } = await API.get("/admin-profile");
            setAdmin({
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                role: data.role,
            });
            setProfileInputs({
                name: data.name,
                email: data.email,
                mobile: data.mobile,
            });
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Failed to load profile");
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    // Handlers
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setProfileInputs({ ...profileInputs, [e.target.name]: e.target.value });

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPasswords({ ...passwords, [e.target.name]: e.target.value });

    const updateProfile = async () => {
        let { name, email, mobile } = profileInputs;

        const nameTrim = name?.trim();
        const emailTrim = email?.trim();
        const mobileTrim = mobile?.trim();

        // ❗ Prevent empty update
        if (!nameTrim && !emailTrim && !mobileTrim) {
            return toast.error("At least one field is required to update");
        }

        // Name validation
        if (nameTrim && nameTrim.length < 3) {
            return toast.error("Name must be at least 3 characters");
        }

        // Gmail validation
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (emailTrim && !gmailRegex.test(emailTrim)) {
            return toast.error("Email must be a valid @gmail.com address");
        }

        // Mobile validation
        const mobileRegex = /^[0-9]{10}$/;
        if (mobileTrim && !mobileRegex.test(mobileTrim)) {
            return toast.error("Mobile number must be exactly 10 digits");
        }

        try {
            setLoading(true);

            const payload = {
                name: nameTrim,
                email: emailTrim,
                mobile: mobileTrim,
            };

            const { data } = await API.put("/admin-profile/update", payload);

            toast.success(data.message);

            setAdmin((prev) => ({
                ...prev,
                name: nameTrim || prev.name,
                email: emailTrim || prev.email,
                mobile: mobileTrim || prev.mobile,
            }));

            setProfileInputs({ name: "", email: "", mobile: "" });

            setActiveTab("info");
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Update failed");
        } finally {
            setLoading(false);
        }
    };

    const changePassword = async () => {
        if (!passwords.oldPassword || !passwords.retypeOldPassword || !passwords.newPassword) {
            return toast.error("All password fields are required");
        }
        try {
            setLoading(true);
            const { data } = await API.put("/admin-profile/change-password", passwords);
            toast.success(data.message);
            setPasswords({ oldPassword: "", retypeOldPassword: "", newPassword: "" });
            setActiveTab("info"); // go back to info after change password
            setLoading(false);
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Password change failed");
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await API.post("/admin-logout");
            toast.success("Logged out successfully");
            navigate("/");
        } catch (error: any) {
            toast.error("Logout failed");
        }
    };

    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-40 bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Sidebar */}
                <div className="w-full md:w-1/4 bg-gray-100 p-6 space-y-4">
                    <button
                        onClick={() => setActiveTab("info")}
                        className={`w-full text-left px-4 py-2 hover:bg-[#164e63] hover:text-white transition ${activeTab === "info" ? "bg-[#164e63] text-white" : ""
                            }`}
                    >
                        Admin Info
                    </button>
                    <button
                        onClick={() => setActiveTab("update")}
                        className={`w-full text-left px-4 py-2 hover:bg-[#164e63] hover:text-white transition ${activeTab === "info" ? "bg-[#164e63] text-white" : ""
                            }`}
                    >
                        Update Profile
                    </button>
                    <button
                        onClick={() => setActiveTab("password")}
                        className={`w-full text-left px-4 py-2 hover:bg-[#164e63] hover:text-white transition ${activeTab === "info" ? "bg-[#164e63] text-white" : ""
                            }`}
                    >
                        Change Password
                    </button>
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className="w-full text-left px-4 py-2 bg-red-600 text-white hover:bg-gray-700 transition"
                    >
                        Logout
                    </button>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-3/4 p-8">
                    {/* Admin Info */}
                    {activeTab === "info" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Admin Information</h2>

                            <div className="grid grid-cols-[120px_1fr] gap-y-3 text-gray-700">
                                <span className="font-semibold">Name</span>
                                <span>: {admin.name}</span>

                                <span className="font-semibold">Email</span>
                                <span>: {admin.email}</span>

                                <span className="font-semibold">Mobile</span>
                                <span>: {admin.mobile}</span>

                                <span className="font-semibold">Role</span>
                                <span>: {admin.role}</span>
                            </div>
                        </div>
                    )}

                    {/* Update Profile */}
                    {activeTab === "update" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Mobile</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 border"
                                    />
                                </div>

                            </div>

                            <button
                                onClick={updateProfile}
                                disabled={loading}
                                className="mt-6 px-6 py-2 bg-black text-white hover:bg-gray-800 transition"
                            >
                                {loading ? "Updating..." : "Save Changes"}
                            </button>
                        </div>
                    )}

                    {/* Change Password */}
                    {activeTab === "password" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Change Password</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Old Password</label>
                                    <input
                                        type="password"
                                        name="oldPassword"
                                        value={passwords.oldPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full px-4 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Retype Old Password</label>
                                    <input
                                        type="password"
                                        name="retypeOldPassword"
                                        value={passwords.retypeOldPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full px-4 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={passwords.newPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full px-4 py-2 border"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={changePassword}
                                disabled={loading}
                                className="mt-6 px-6 py-2 bg-black text-white hover:bg-gray-800 transition"
                            >
                                {loading ? "Changing..." : "Save Password"}
                            </button>
                        </div>
                    )}
                    {showLogoutModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
                                <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
                                <p className="mb-6">Are you sure you want to log out?</p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => setShowLogoutModal(false)}
                                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={async () => {
                                            setShowLogoutModal(false);
                                            await logout(); // ✅ reuse function
                                        }}
                                        className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminProfile;