import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes, FaSpinner, FaCheckCircle } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, type = 'Demo', courseName = '', courseId = '', price = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [processingPayment, setProcessingPayment] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (type === 'Course Application') {
            setProcessingPayment(true);

            setTimeout(async () => {
                setProcessingPayment(false);
                setLoading(true);
                await submitBooking();
            }, 2000);
        } else {
            setLoading(true);
            await submitBooking();
        }
    };

    const submitBooking = async () => {
        try {
            const userInfo = localStorage.getItem('userInfo');
            const token = userInfo ? JSON.parse(userInfo).token : null;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                }
            };

            await axios.post(
                'https://disenosys-ks3n.onrender.com/api/bookings',
                {
                    ...formData,
                    type: type, // Backend expects 'type', not 'bookingType'
                    courseId: type === 'Course Application' ? courseId : undefined,
                },
                config
            );

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setFormData({ name: '', email: '', phone: '' });
                onClose();
            }, 3000);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden font-dm-sans">
                { }
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <FaTimes size={24} />
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {type === 'Demo' ? 'Book a Free Demo' : 'Apply for Course'}
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm">
                        {type === 'Demo'
                            ? 'Experience our expert-led training firsthand.'
                            : `Complete your application for ${courseName}.`}
                    </p>

                    {price && type === 'Course Application' && (
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
                            <span className="text-brand-primary font-bold">Total Amount:</span>
                            <span className="text-brand-accent font-bold text-xl">₹{price}</span>
                        </div>
                    )}

                    {processingPayment ? (
                        <div className="flex flex-col items-center justify-center py-8">
                            <FaSpinner className="animate-spin text-brand-primary text-4xl mb-4" />
                            <p className="text-gray-600 font-bold">Processing Payment...</p>
                            <p className="text-gray-400 text-xs mt-2">Please do not close this window.</p>
                        </div>
                    ) : success ? (
                        <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                                <FaCheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                            <p className="text-center text-gray-600">
                                You have successfully enrolled in <strong>{courseName}</strong>.
                            </p>
                            <p className="text-center text-gray-500 text-sm mt-4">
                                Check 'My Orders' for details. Redirecting...
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-accent transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2"
                            >
                                {loading && <FaSpinner className="animate-spin" />}
                                {loading ? 'Confirming...' : (type === 'Course Application' ? 'Pay & Enroll' : 'Submit Request')}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
