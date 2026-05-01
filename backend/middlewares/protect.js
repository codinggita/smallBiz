const User = require('../models/User');

// Reads Bearer token from Authorization header and finds the matching user in DB
const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided. Access denied.' });
    }

    const token = authHeader.split(' ')[1];
    
    // Debug log for Render logs
    console.log(`[Auth] Verifying token: ${token.substring(0, 5)}...`);

    const user = await User.findOne({ authToken: token });
    if (!user) {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    req.user = user; // Attach user to request for use in controllers
    next();
  } catch (err) {
    res.status(500).json({ message: 'Server error in auth middleware.', error: err.message });
  }
};

module.exports = protect;
