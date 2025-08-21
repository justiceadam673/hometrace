import React, { useState } from "react";
import background from "../../assets/agent/herobg.jpg";
import { Link, useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error
    setError("");

    // Enhanced validation
    if (!email) {
      setError("Email is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!password) {
      setError("Password is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      setLoading(true);

      // For demonstration, we'll use hardcoded credentials
      // In a real app, this would be an API call
      if (email === "admin@hometrace.com" && password === "admin123") {
        // Store auth state (in a real app, store a token)
        localStorage.setItem("isAuthenticated", "true");

        // Navigate to dashboard
        navigate("/AdminDashBoard", { replace: true });
      } else {
        setError("Invalid email or password");
        setTimeout(() => setError(""), 3000);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
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
          w-full
          min-h-[70%]
          bg-white
          flex flex-col justify-center items-center
          px-4 gap-6
          rounded-tl-[24px] rounded-tr-[24px]
          sm:gap-8
          sm:rounded-[24px]
          sm:px-8
          max:sm:w-full
          md:w-1/2 md:ml-auto md:h-[92vh]
        "
      >
        <h2 className="text-2xl font-semibold">Admin Sign In</h2>

        {error && (
          <p className="text-white text-sm md:text-[1rem] p-4 fixed mb-175 md:mt-25 lg:mt-30 bg-[#973131] rounded-[12px]">
            {error}
          </p>
        )}

        {/* Input Fields */}
        <div className="flex flex-col w-[90%] md:w-[70%] gap-5">
          <input
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-400 rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-400 rounded-md outline-none"
          />
        </div>

        {/* Button & Link */}
        <div className="flex flex-col items-center w-[90%] md:w-[70%] gap-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-full bg-[#2C1669] text-white font-medium text-lg disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <div className="flex gap-0.5 text-sm">
            <p>Don't have an account?</p>
            <Link to="/AdminUp" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AdminSignIn;
