const express = require('express');
const router = express.Router();
const { authUser, registerUser, getUserProfile, getUsers, deleteUser, updateUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/').get(protect, admin, getUsers);

router.route('/:id')
    .delete(protect, admin, deleteUser)
    .put(protect, admin, updateUser);

module.exports = router;
