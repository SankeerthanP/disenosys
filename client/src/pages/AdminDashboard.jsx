import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';

const AdminDashboard = () => {
    const { user, loading: authLoading } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [courses, setCourses] = useState([]);
    const [activeTab, setActiveTab] = useState('bookings');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);


    const [courseForm, setCourseForm] = useState({ title: '', category: '', price: '', image: '', description: '' });
    const [userForm, setUserForm] = useState({ name: '', email: '', isAdmin: false });

    useEffect(() => {
        if (!authLoading && (!user || !user.isAdmin)) {
            navigate('/');
        }
    }, [user, authLoading, navigate]);

    const fetchData = async () => {
        if (user && user.isAdmin) {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                const { data: usersData } = await axios.get('https://disenosys-ks3n.onrender.com/api/users', config);
                const { data: bookingsData } = await axios.get('https://disenosys-ks3n.onrender.com/api/bookings', config);
                const { data: coursesData } = await axios.get('https://disenosys-ks3n.onrender.com/api/courses', config);

                setUsers(usersData);
                setBookings(bookingsData);
                setCourses(coursesData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                console.error(err);
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, [user]);


    const handleStatusChange = async (id, newStatus) => {
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.put(`https://disenosys-ks3n.onrender.com/api/bookings/${id}/status`, { status: newStatus }, config);
            fetchData();
        } catch (err) {
            alert('Failed to update status');
        }
    };


    const handleDeleteUser = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                await axios.delete(`https://disenosys-ks3n.onrender.com/api/users/${id}`, config);
                fetchData();
            } catch (err) {
                alert('Failed to delete user');
            }
        }
    };

    const openEditUser = (u) => {
        setCurrentUser(u);
        setUserForm({ name: u.name, email: u.email, isAdmin: u.isAdmin });
        setIsUserModalOpen(true);
    };

    const handleSaveUser = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.put(`https://disenosys-ks3n.onrender.com/api/users/${currentUser._id}`, userForm, config);
            setIsUserModalOpen(false);
            fetchData();
        } catch (err) {
            alert('Failed to update user');
        }
    };


    const handleDeleteCourse = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                await axios.delete(`https://disenosys-ks3n.onrender.com/api/courses/${id}`, config);
                fetchData();
            } catch (err) {
                alert('Failed to delete course');
            }
        }
    };

    const openAddCourse = () => {
        setCurrentCourse(null);
        setCourseForm({ title: '', category: '', price: '', image: '', description: '' });
        setIsCourseModalOpen(true);
    };

    const openEditCourse = (c) => {
        setCurrentCourse(c);
        setCourseForm({ title: c.title, category: c.category, price: c.price, image: c.image, description: c.description });
        setIsCourseModalOpen(true);
    };

    const handleSaveCourse = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            if (currentCourse) {
                await axios.put(`https://disenosys-ks3n.onrender.com/api/courses/${currentCourse._id}`, courseForm, config);
            } else {
                await axios.post('https://disenosys-ks3n.onrender.com/api/courses', courseForm, config);
            }
            setIsCourseModalOpen(false);
            fetchData();
        } catch (err) {
            alert('Failed to save course');
        }
    };

    if (!user || !user.isAdmin) return null;

    return (
        <div className="min-h-screen bg-gray-50 pt-8 pb-12 px-4 sm:px-6 lg:px-8 font-dm-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

                { }
                <div className="flex space-x-4 mb-6 border-b border-gray-200 pb-1">
                    {['bookings', 'users', 'courses'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-t-lg font-medium text-sm transition-colors capitalize ${activeTab === tab
                                ? 'bg-brand-primary text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {loading ? <div className="text-center py-12">Loading...</div> : error ? (
                    <div className="bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
                ) : (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg min-h-[400px]">

                        { }
                        {activeTab === 'bookings' && (
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {bookings.map((booking) => (
                                        <tr key={booking._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {booking.user?.name} <br /> <span className="text-xs text-gray-500">{booking.user?.email}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.type}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.course?.title || 'N/A'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <select
                                                    value={booking.status || 'Pending'}
                                                    onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                                                    className={`rounded border-gray-300 text-xs font-bold py-1 px-2 ${booking.status === 'Approved' ? 'text-green-600 bg-green-50' :
                                                        booking.status === 'Rejected' ? 'text-red-600 bg-red-50' : 'text-yellow-600 bg-yellow-50'
                                                        }`}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        { }
                        {activeTab === 'users' && (
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((u) => (
                                        <tr key={u._id}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{u.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{u.email}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {u.isAdmin ? <span className="text-green-600 font-bold">Admin</span> : 'User'}
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm font-medium flex justify-end gap-3">
                                                <button onClick={() => openEditUser(u)} className="text-indigo-600 hover:text-indigo-900"><FaEdit /></button>
                                                <button onClick={() => handleDeleteUser(u._id)} className="text-red-600 hover:text-red-900"><FaTrash /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        { }
                        {activeTab === 'courses' && (
                            <div className="p-4">
                                <div className="flex justify-end mb-4">
                                    <button onClick={openAddCourse} className="bg-brand-primary text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-bold">
                                        <FaPlus /> Add Course
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {courses.map((course) => (
                                        <div key={course._id} className="border border-gray-200 rounded-lg p-4 bg-gray-50 relative group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-gray-900 line-clamp-1">{course.title}</h3>
                                                <div className="flex gap-2">
                                                    <button onClick={() => openEditCourse(course)} className="text-gray-500 hover:text-indigo-600"><FaEdit /></button>
                                                    <button onClick={() => handleDeleteCourse(course._id)} className="text-gray-500 hover:text-red-600"><FaTrash /></button>
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 mb-1">{course.category}</p>
                                            <p className="text-xs text-brand-primary font-bold">{course.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            { }
            {isUserModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Edit User</h2>
                        <form onSubmit={handleSaveUser} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" value={userForm.name} onChange={e => setUserForm({ ...userForm, name: e.target.value })} className="w-full border rounded p-2" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" value={userForm.email} onChange={e => setUserForm({ ...userForm, email: e.target.value })} className="w-full border rounded p-2" required />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={userForm.isAdmin} onChange={e => setUserForm({ ...userForm, isAdmin: e.target.checked })} />
                                <label className="text-sm font-medium text-gray-700">Is Admin?</label>
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <button type="button" onClick={() => setIsUserModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-brand-primary text-white rounded">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            { }
            {isCourseModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">{currentCourse ? 'Edit Course' : 'Add Course'}</h2>
                        <form onSubmit={handleSaveCourse} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input type="text" value={courseForm.title} onChange={e => setCourseForm({ ...courseForm, title: e.target.value })} className="w-full border rounded p-2" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input type="text" value={courseForm.category} onChange={e => setCourseForm({ ...courseForm, category: e.target.value })} className="w-full border rounded p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input type="text" value={courseForm.price} onChange={e => setCourseForm({ ...courseForm, price: e.target.value })} className="w-full border rounded p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                                <input type="text" value={courseForm.image} onChange={e => setCourseForm({ ...courseForm, image: e.target.value })} className="w-full border rounded p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea value={courseForm.description} onChange={e => setCourseForm({ ...courseForm, description: e.target.value })} className="w-full border rounded p-2 h-24" />
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <button type="button" onClick={() => setIsCourseModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-brand-primary text-white rounded">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminDashboard;
