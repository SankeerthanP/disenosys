import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaUserFriends, FaSpinner } from "react-icons/fa";
import BookingModal from "./BookingModal";
import CourseDetailsModal from "./CourseDetailsModal";
import AuthContext from "../context/AuthContext";

const PlacementPrograms = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const BACKEND_URL = "https://disenosys-ks3n.onrender.com";

    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/courses`);
        const pgCourses = data.filter((course) => course.type === "PG");
        setCourses(pgCourses);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load PG programs", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setShowDetailsModal(true);
  };

  const handleModalApply = () => {
    setShowDetailsModal(false);
    if (!user) {
      navigate("/login");
      return;
    }
    setShowBookingModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <FaSpinner className="animate-spin text-4xl text-brand-primary" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-white font-dm-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-brand-accent font-bold tracking-wider text-sm uppercase mb-2">
            PROGRAMS WE OFFER
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Placement <span className="text-brand-accent">Programs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized courses designed to get you hired in top OEMs and Tier 1
            companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              onClick={() => handleViewDetails(course)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                    <FaUserFriends />
                    <span>{course.students || "Many"} Enrolled</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CourseDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        course={selectedCourse}
        onApply={handleModalApply}
      />

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        type="Course Application"
        courseName={selectedCourse?.title}
        courseId={selectedCourse?._id}
        price={selectedCourse?.price}
      />
    </section>
  );
};

export default PlacementPrograms;
