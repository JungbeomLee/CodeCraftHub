const express = require('express');
const {
    registerUser,
    authUser,
    getUserProfile,
    updateUserProfile,
    deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/:id').delete(protect, deleteUser);

module.exports = router;
