import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import BookingModal from "./BookingModal";
import CourseDetailsModal from "./CourseDetailsModal";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProgramSwitcher = () => {
  const [activeTab, setActiveTab] = useState("PG");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/api/courses");
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load courses", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) => course.type === activeTab);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setShowDetailsModal(true);
  };

  const handleEnroll = (course) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setSelectedCourse(course);
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
    <section className="py-20 bg-gray-50 font-dm-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Our Programs
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 p-1 rounded-full flex">
            <button
              onClick={() => setActiveTab("PG")}
              className={`px-8 py-3 rounded-full text-sm font-bold ${
                activeTab === "PG"
                  ? "bg-brand-primary text-white"
                  : "text-gray-600"
              }`}
            >
              PG Programs
            </button>
            <button
              onClick={() => setActiveTab("Online")}
              className={`px-8 py-3 rounded-full text-sm font-bold ${
                activeTab === "Online"
                  ? "bg-brand-primary text-white"
                  : "text-gray-600"
              }`}
            >
              Online Courses
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="mt-auto flex justify-between gap-4">
                  <button
                    onClick={() => handleViewDetails(course)}
                    className="text-brand-primary font-bold text-sm hover:text-brand-accent"
                  >
                    More Info
                  </button>
                  <button
                    onClick={() => handleEnroll(course)}
                    className="bg-brand-cyan text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-brand-primary"
                  >
                    Enroll Now
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
        onApply={() => {
          setShowDetailsModal(false);
          if (!user) {
            navigate("/login");
            return;
          }
          setShowBookingModal(true);
        }}
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

export default ProgramSwitcher;
