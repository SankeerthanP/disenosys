import React, { useState } from "react";
import axios from "axios";
import { FaTimes, FaSpinner, FaCheckCircle } from "react-icons/fa";

const BACKEND_URL = "https://disenosys-ks3n.onrender.com";

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
    await submitBooking();
  };

  const submitBooking = async () => {
    try {
      const userInfo = localStorage.getItem("userInfo");
      if (!userInfo) {
        throw new Error("You must be logged in to book.");
      }

      const token = JSON.parse(userInfo).token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const payload = {
        ...formData,
        type: type === "Demo" ? "Demo Request" : type,
        courseId: type === "Course Application" ? courseId : undefined,
      };

      await axios.post(`${BACKEND_URL}/api/bookings`, payload, config);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: "", email: "", phone: "" });
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Booking Error:", err);
      setError(err.response?.data?.message || err.message || "Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden font-dm-sans">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {type === "Demo" ? "Book a Free Demo" : "Apply for Course"}
          </h2>

          {success ? (
            <div className="flex flex-col items-center justify-center py-6">
              <FaCheckCircle size={40} className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">
                Booking Successful
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Your booking has been saved.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {loading && <FaSpinner className="animate-spin" />}
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
