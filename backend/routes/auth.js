const express = require('express');
const router  = express.Router();

const protect = require('../middlewares/protect');
const {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
  completeOnboarding,
  updateProfile,
  changePassword,
} = require('../controllers/authController');

// Public routes — no token needed
router.post('/register',  registerUser);
router.post('/login',     loginUser);

// Protected routes — token required
router.post('/logout',          protect, logoutUser);
router.get('/me',               protect, getMe);
router.post('/onboarding',      protect, completeOnboarding);
router.put('/update-profile',   protect, updateProfile);
router.put('/change-password',  protect, changePassword);

module.exports = router;
