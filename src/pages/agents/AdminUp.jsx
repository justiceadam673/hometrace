import React, { useState } from "react";
import background from "../../assets/agent/herobg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const AdminSignUp = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

      // Store user data
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Navigate to verification page
      navigate("/verification");
    } catch (err) {
      setError(err.message || "Something went wrong");
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
      <div className="flex md:w-1/2 justify-center items-center bg-white p-4 w-full ">
        <div className="w-full items-center justify-center flex flex-col">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 max-w-xl w-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-center flex flex-col text-[#371B83]">
                Agent Sign Up{" "}
              </h2>
              <p className="opacity-65 text-sm text-black text-center">
                Kindly enter your information to create your account
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg"
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg "
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 pr-10 rounded-lg"
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

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 pr-10 rounded-lg"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <div className="text-center flex flex-col gap-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2C1669] text-white py-3 hover:bg-[#1D0F4A] disabled:opacity-50 rounded-2xl md:rounded-[20px]"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/AdminSignIn" className="text-[#2C1669] underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
