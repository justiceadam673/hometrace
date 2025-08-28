import React, { useState } from "react";
import background from "../../assets/agent/herobg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="h-screen flex flex-col md:flex-row max-h-fit">
      {/* Image Section - 30% on mobile, 50% on desktop */}
      <div className="h-[30vh] md:h-screen md:w-1/2">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section - 70% on mobile, 50% on desktop */}
      <div className="flex md:w-1/2  bg-white p-4 w-full justify-center items-center">
        <div className="w-full items-center justify-center flex flex-col">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl w-full">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center">
                {error}
              </div>
            )}
            <h2 className="text-2xl font-semibold text-center text-[#371B83]">
              {" "}
              Sign In
            </h2>

            {/* Input Fields */}
            <div className="flex flex-col gap-3">
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
              <div className="text-right ">
                <Link
                  to="/forgot-password"
                  className="text-[#2C1669] text-sm underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="text-center flex flex-col gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2C1669] text-white py-3 hover:bg-[#1D0F4A] disabled:opacity-50 rounded-3xl md:rounded-2xl"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/AdminUp" className="text-[#2C1669] hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
