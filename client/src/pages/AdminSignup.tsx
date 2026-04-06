import { useState, ChangeEvent, FormEvent } from "react";
import API from "../utils/axios";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";


interface SignupForm {
  name: string;
  email: string;
  mobile: string;
  password: string;
}

const AdminSignup = () => {
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const validateForm = () => {
    const { name, email, mobile, password } = form;

    // 1. Check empty fields
    if (!name || !email || !mobile || !password) {
      return "All fields are required";
    }

    // 2. Name validation
    if (name.length < 3) {
      return "Name must be at least 3 characters";
    }

    // 3. Email validation
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      return "Email must be a valid @gmail.com address";
    }

    // 4. Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      return "Mobile number must be 10 digits";
    }

    // 5. Password validation (same as backend)
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await API.post("/signup", form);

      alert(res.data.message);

      // navigate to login page after signup
      navigate("/login");

    } catch (error: any) {
      setError(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Layout>
      <div className="min-h-[100vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Sign up
          </h2>

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile number"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 tracking-widest hover:bg-gray-800 transition"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-black font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminSignup;