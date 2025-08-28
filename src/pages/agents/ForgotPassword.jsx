import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/agent/herobg.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
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

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Image Section - 30% on mobile, 50% on desktop */}
      <div className="h-[30vh] md:h-screen md:w-1/2">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section - 70% on mobile, 50% on desktop */}
      <div className="flex md:w-1/2 bg-white justify-center items-center p-4 w-full">
        <div className="w-full items-center justify-center flex flex-col gap-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          <h2 className="text-2xl font-semibold text-[#371B83]">
            Reset Password
          </h2>

          {success ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-xl">
              <p>Password reset link has been sent to your email address.</p>
              <p className="mt-4">
                <Link
                  to="/AdminSignIn"
                  className="text-[#2C1669] hover:underline"
                >
                  Back to Sign In
                </Link>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl w-full">
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-sm"
                />
              </div>

              <div className="text-center flex flex-col gap-4">
                <button
                  type="submit"
                  className="w-full bg-[#2C1669] text-white py-3 hover:bg-[#1D0F4A] disabled:opacity-50 rounded-2xl md:rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
                <Link
                  to="/AdminSignIn"
                  className="text-[#2C1669] hover:underline"
                >
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
