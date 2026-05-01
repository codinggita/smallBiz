const User = require('../models/User');

// Helper to return a clean user object (no sensitive fields)
const safeUser = (user) => ({
  id:           user._id,
  name:         user.name,
  email:        user.email,
  businessName: user.businessName,
  role:         user.role,
  whatsappNumber: user.whatsappNumber,
  isOnboarded:  user.isOnboarded,
  onboarding:   user.onboarding,
  createdAt:    user.createdAt,
});

// ─────────────────────────────────────────────
// POST /api/auth/register
// ─────────────────────────────────────────────
const registerUser = async (req, res) => {
  try {
    const { name, email, businessName, password } = req.body;

    // Validate all required fields
    if (!name || !email || !businessName || !password) {
      return res.status(400).json({ message: 'All fields are required: name, email, businessName, password.' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters.' });
    }

    // Check if email is already registered
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'An account with this email already exists.' });
    }

    // Create user, hash password, generate token
    const user = new User({ name, email, businessName });
    user.setPassword(password);
    const token = user.generateToken();
    await user.save();

    res.status(201).json({ token, user: safeUser(user) });
  } catch (err) {
    res.status(500).json({ message: 'Server error during registration.', error: err.message });
  }
};

// ─────────────────────────────────────────────
// POST /api/auth/login
// ─────────────────────────────────────────────
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });

    // Check user exists AND password matches
    if (!user || !user.verifyPassword(password)) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate a fresh token on every login
    const token = user.generateToken();
    await user.save();

    res.status(200).json({ token, user: safeUser(user) });
  } catch (err) {
    res.status(500).json({ message: 'Server error during login.', error: err.message });
  }
};

// ─────────────────────────────────────────────
// POST /api/auth/logout  (protected)
// ─────────────────────────────────────────────
const logoutUser = async (req, res) => {
  try {
    // Invalidate the token by clearing it in DB
    req.user.authToken = null;
    await req.user.save();

    res.status(200).json({ message: 'Logged out successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error during logout.', error: err.message });
  }
};

// ─────────────────────────────────────────────
// GET /api/auth/me  (protected)
// ─────────────────────────────────────────────
const getMe = async (req, res) => {
  try {
    // req.user is already populated by protect middleware
    res.status(200).json(safeUser(req.user));
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching user profile.', error: err.message });
  }
};

// ─────────────────────────────────────────────
// POST /api/auth/onboarding  (protected)
// ─────────────────────────────────────────────
const completeOnboarding = async (req, res) => {
  try {
    const { industry, teamSize, primaryGoal } = req.body;

    if (!industry || !teamSize || !primaryGoal) {
      return res.status(400).json({ message: 'All onboarding fields are required: industry, teamSize, primaryGoal.' });
    }

    req.user.onboarding = { industry, teamSize, primaryGoal };
    req.user.isOnboarded = true;
    await req.user.save();

    res.status(200).json({
      message:     'Onboarding complete!',
      isOnboarded: true,
      onboarding:  req.user.onboarding,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error during onboarding.', error: err.message });
  }
};

// ─────────────────────────────────────────────
// PUT /api/auth/update-profile  (protected)
// ─────────────────────────────────────────────
const updateProfile = async (req, res) => {
  try {
    const { name, businessName, whatsappNumber } = req.body;

    if (name)            req.user.name = name;
    if (businessName)    req.user.businessName = businessName;
    if (whatsappNumber)  req.user.whatsappNumber = whatsappNumber;

    await req.user.save();

    res.status(200).json({ message: 'Profile updated successfully.', user: safeUser(req.user) });
  } catch (err) {
    res.status(500).json({ message: 'Server error during profile update.', error: err.message });
  }
};

// ─────────────────────────────────────────────
// PUT /api/auth/change-password  (protected)
// ─────────────────────────────────────────────
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: 'Both oldPassword and newPassword are required.' });
    }

    if (!req.user.verifyPassword(oldPassword)) {
      return res.status(401).json({ message: 'Old password is incorrect.' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ message: 'New password must be at least 8 characters.' });
    }

    req.user.setPassword(newPassword);
    await req.user.save();

    res.status(200).json({ message: 'Password changed successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error during password change.', error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
  completeOnboarding,
  updateProfile,
  changePassword,
};
