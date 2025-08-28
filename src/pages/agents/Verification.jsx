import React, { useState } from "react";
import background from "../../assets/agent/herobg.jpg";
import { Link, useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("Upload");

  const [formData, setFormData] = useState({
    phoneNumber: "",
    verificationCode: "",
    nin: "",
    document: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "file-upload") {
      const file = e.target.files[0];
      if (file) {
        setFileName(file.name);
        setFormData({ ...formData, document: file });
      } else {
        setFileName("Upload");
        setFormData({ ...formData, document: null });
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.phoneNumber) {
      setError("Phone number is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!formData.verificationCode) {
      setError("Verification code is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!formData.nin) {
      setError("NIN is required");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!formData.document) {
      setError("Please upload required document");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/subscription");
    } catch (err) {
      setError("Verification failed. Please try again.");
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
      <div className="flex md:w-1/2 bg-white p-4 justify-center items-center w-full">
        <div className="w-full items-center justify-center flex flex-col gap-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
              {error}
            </div>
          )}
          <h2 className="text-2xl font-semibold text-[#371B83]">
            Verification
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl w-full">
            <div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50"
                placeholder="234 |"
              />
            </div>

            <div className="flex justify-between w-full px-4 py-3 bg-gray-50">
              <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleChange}
                className="border-none outline-none"
                placeholder="Code"
              />
              <p className="text-sm text-[#371B83] cursor-pointer">Send Code</p>
            </div>

            <div>
              <input
                type="text"
                id="nin"
                name="nin"
                value={formData.nin}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50"
                placeholder="NIN"
              />
            </div>

            <div className="flex justify-between place-items-center">
              <p className="flex gap-1.5 w-full">
                Upload a valid NIESV{" "}
                <span className="hidden md:block">Membership Certificate</span>
              </p>

              <label
                htmlFor="file-upload"
                className="px-7 py-2 border rounded-lg text-sm border-black cursor-pointer hover:bg-[#2C1699] hover:text-white"
              >
                <span>{fileName}</span>
                <input
                  type="file"
                  id="file-upload"
                  name="file-upload"
                  onChange={handleChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,image/*"
                />
              </label>
            </div>

            <button
              type="submit"
              className={`w-full bg-[#2C1669] text-white py-3 rounded-2xl md:rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1D0F4A]"
              }`}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
