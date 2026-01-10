import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { FaBook, FaCalendarAlt, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const { user, loading: authLoading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
            return;
        }

        const fetchBookings = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                };
                const { data } = await axios.get('https://disenosys-ks3n.onrender.com/api/bookings/mybookings', config);
                setBookings(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching bookings:', err);
                setError(err.response?.data?.message || 'Failed to load your orders.');
                setLoading(false);
            }
        };

        if (user) {
            fetchBookings();
        }
    }, [user, authLoading, navigate]);

    if (authLoading || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <FaSpinner className="animate-spin text-4xl text-brand-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
                    <p className="text-gray-500 mt-2">View your enrolled courses and application status.</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center gap-2">
                        <FaExclamationCircle /> {error}
                    </div>
                )}

                {bookings.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                        <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                            <FaBook size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Active Enrollments</h3>
                        <p className="text-gray-500 mb-6">You haven't applied for any courses yet.</p>
                        <button
                            onClick={() => navigate('/course')}
                            className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-accent transition-colors"
                        >
                            Explore Courses
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking) => (
                            <div key={booking._id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                                {booking.course && booking.course.image ? (
                                    <div className="h-40 bg-gray-100 relative">
                                        <img
                                            src={booking.course.image}
                                            alt={booking.course.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${booking.status === 'Confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                            {booking.status || 'Pending'}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                                        <FaBook className="text-gray-300 text-4xl" />
                                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${booking.status === 'Confirmed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                            {booking.status || 'Pending'}
                                        </div>
                                    </div>
                                )}

                                <div className="p-6">
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                                        {booking.type}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        {booking.course ? booking.course.title : 'General Inquiry/Demo'}
                                    </h3>

                                    <div className="border-t border-gray-100 mt-4 pt-4 text-sm text-gray-500 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2"><FaCalendarAlt /> Date:</span>
                                            <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2">Order ID:</span>
                                            <span className="font-mono text-xs">{booking._id.slice(-6).toUpperCase()}</span>
                                        </div>
                                    </div>

                                    {booking.status === 'Pending' && (
                                        <div className="mt-4 bg-yellow-50 text-yellow-700 text-xs p-3 rounded-lg flex gap-2">
                                            <FaExclamationCircle className="flex-shrink-0 mt-0.5" />
                                            <span>Your application is under review. Our team will contact you shortly.</span>
                                        </div>
                                    )}
                                    {booking.status === 'Confirmed' && (
                                        <div className="mt-4 bg-green-50 text-green-700 text-xs p-3 rounded-lg flex gap-2">
                                            <FaCheckCircle className="flex-shrink-0 mt-0.5" />
                                            <span>Enrollment Confirmed! Access your materials in the dashboard.</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
