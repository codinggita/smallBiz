const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'SmallBiz API is running ✅' });
});

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
