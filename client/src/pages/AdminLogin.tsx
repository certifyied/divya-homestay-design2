// import { useState, ChangeEvent, FormEvent } from "react";
// import API from "../utils/axios";
// import Layout from "@/components/layout/Layout";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react"; // 👀 Import icons

// interface LoginForm {
//   email: string;
//   password: string;
// }

// const AdminLogin = () => {
//   const [form, setForm] = useState<LoginForm>({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // 👈 toggle state

//   const navigate = useNavigate();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//     setError("");
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       setError("All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await API.post("/login", form, {
//         withCredentials: true,
//       });

//       const { token, admin } = response.data;

//       localStorage.setItem("adminToken", token);
//       localStorage.setItem("adminData", JSON.stringify(admin));

//       alert("Login successful");

//       navigate("/admin/dashboard");

//     } catch (err: any) {
//       setError(err.response?.data?.error || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="min-h-[90vh] flex items-center justify-center px-4">
//         <div className="w-full max-w-md">

//           <h2 className="text-3xl font-semibold text-center mb-8">
//             Admin Login
//           </h2>

//           {error && (
//             <p className="text-red-500 text-center mb-4">{error}</p>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
//             />

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"} // toggle
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black pr-12"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </span>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-black text-white py-3 tracking-widest hover:bg-gray-800 transition"
//             >
//               {loading ? "Logging in..." : "LOGIN"}
//             </button>

//           </form>

//           {/* <p className="text-center text-sm mt-4">
//             Don't have an account?{" "}
//             <span
//               onClick={() => navigate("/register")}
//               className="text-black font-semibold cursor-pointer underline"
//             >
//               Signup
//             </span>
//           </p> */}

//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminLogin;



import { useState, ChangeEvent, FormEvent } from "react";
import API from "../utils/axios";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";

interface LoginForm {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // ✅ Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   if (!form.email || !form.password) {
  //     setError("All fields are required");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     setError("");

  //     const response = await API.post("/login", form, {
  //       withCredentials: true, // required if server sets cookies
  //     });

  //     // const { token } = response.data;

  //     // ✅ Store token in a secure cookie (expires in 7 days)
  //     // Cookies.set("adminToken", token, {
  //     //   expires: 7,
  //     //   secure: true, // only HTTPS
  //     //   sameSite: "strict",
  //     // });

  //     // ✅ Show token in alert (for testing/dev)
  //     // alert(`Login successful!\nToken: ${token}`);
  //     alert("Login successful");

  //     navigate("/admin/dashboard");

  //   } catch (err: any) {
  //     setError(err.response?.data?.error || "Login failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await API.post("/login", form, {
        withCredentials: true,
      });

      alert("Login successful");
      navigate("/admin/dashboard");

    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };



  return (
    <Layout>
      <div className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-semibold text-center mb-8">
            Admin Login
          </h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black pr-12"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 tracking-widest hover:bg-gray-800 transition"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>

        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;