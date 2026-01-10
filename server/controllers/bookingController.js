const asyncHandler = require("express-async-handler");
const Booking = require("../models/Booking");

const addBooking = asyncHandler(async (req, res) => {
  const { courseId, type } = req.body;

  if (!type) {
    res.status(400);
    throw new Error("Booking type is required");
  }

  const normalizedType = type === "Demo" ? "Demo Request" : type;

  const booking = new Booking({
    user: req.user._id,
    course: normalizedType === "Course Application" ? courseId : undefined,
    type: normalizedType,
  });

  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({})
    .populate("user", "id name email")
    .populate("course", "title category");
  res.json(bookings);
});

const getMyUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("course", "title category image")
    .sort("-createdAt");
  res.json(bookings);
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    res.status(404);
    throw new Error("Booking not found");
  }

  booking.status = req.body.status || booking.status;
  const updatedBooking = await booking.save();
  res.json(updatedBooking);
});

module.exports = {
  addBooking,
  getBookings,
  getMyUserBookings,
  updateBookingStatus,
};
