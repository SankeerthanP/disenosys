import React, { useState } from "react";
import axios from "axios";
import { FaTimes, FaSpinner, FaCheckCircle } from "react-icons/fa";

const BookingModal = ({
  isOpen,
  onClose,
  type = "Course Application",
  courseName = "",
  courseId = "",
  price = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userInfo = localStorage.getItem("userInfo");
      if (!userInfo) {
        setError("Please login to continue.");
        setLoading(false);
        return;
      }

      const parsedUser = JSON.parse(userInfo);
      const token = parsedUser.token;

      if (!token) {
        setError("Authentication failed. Please login again.");
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const payload = {
        type: type,
        courseId: courseId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };

      await axios.post("/api/bookings", payload, config);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: "", email: "", phone: "" });
        onClose();
      }, 2500);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Booking failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden font-dm-sans">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Apply for Course
          </h2>

          <p className="text-gray-500 mb-6 text-sm">{courseName}</p>

          {price && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
              <span className="text-brand-primary font-bold">Amount:</span>
              <span className="text-brand-accent font-bold text-xl">
                ₹{price}
              </span>
            </div>
          )}

          {success ? (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                <FaCheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Booking Successful
              </h3>
              <p className="text-center text-gray-600">
                You have successfully applied for <strong>{courseName}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-accent flex items-center justify-center gap-2"
              >
                {loading && <FaSpinner className="animate-spin" />}
                {loading ? "Submitting..." : "Apply Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
