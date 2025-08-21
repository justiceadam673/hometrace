import React, { useState } from "react";
import background from "../../assets/agent/herobg.jpg";
import { Link, useNavigate } from "react-router-dom";

const AdminSignUp = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Enhanced validation
    if (!formData.fullName) {
      setError("Full name is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!formData.email) {
      setError("Email is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!formData.password) {
      setError("Password is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!formData.confirmPassword) {
      setError("Please confirm your password");
      setTimeout(() => setError(""), 3000);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setTimeout(() => setError(""), 3000);
      return;
    }

    // Password strength validation
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!/(?=.*[A-Z])/.test(formData.password)) {
      setError("Password must contain at least one uppercase letter");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!/(?=.*[0-9])/.test(formData.password)) {
      setError("Password must contain at least one number");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setLoading(true);

    try {
      // For demonstration, we'll simulate a successful signup
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store auth state (in a real app, store a token)
      localStorage.setItem("isAuthenticated", "true");

      // Navigate to dashboard
      navigate("/AdminDashBoard");
    } catch (err) {
      setError(err.message || "Something went wrong");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col md:p-8 p-0"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Mobile Top Image */}
      <img
        src={background}
        alt=""
        className="md:hidden w-full h-[30%] object-cover block"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full min-h-[70%] bg-white
          flex flex-col justify-center items-center
          px-4 gap-6
          rounded-tl-[24px] rounded-tr-[24px]
          sm:gap-8 sm:rounded-[24px] sm:px-8
          max:sm:w-full md:w-1/2 md:ml-auto md:h-[92vh]
        "
      >
        <h2 className="text-2xl font-semibold">Admin Sign Up</h2>

        {/* Error Message */}
        {error && (
          <p className="text-white text-sm md:text-[1rem] p-4 fixed mb-175 md:mt-25 lg:mt-30 bg-[#973131] rounded-[12px]">
            {error}
          </p>
        )}

        {/* Input Fields */}
        <div className="flex flex-col w-[90%] md:w-[70%] gap-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            className="p-2 md:p-3 border border-gray-400 rounded-md outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="p-3 md:p-3 border border-gray-400 rounded-md outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 md:p-3 border border-gray-400 rounded-md outline-none"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-3 md:p-3 border border-gray-400 rounded-md outline-none"
          />
        </div>

        {/* Button & Link */}
        <div className="flex flex-col items-center w-[90%] md:w-[70%] gap-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-full font-medium text-lg text-white ${
              loading ? "bg-gray-400" : "bg-[#2C1669] hover:bg-[#1e0e4f]"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <div className="flex gap-0.5 text-sm">
            <p>Already have an account?</p>
            <Link to="/AdminSignIn" className="text-[#2C1669] font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AdminSignUp;
