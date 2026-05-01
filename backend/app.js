const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'SmallBiz API is running ✅' });
});

const contactsRoutes = require('./routes/contacts');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactsRoutes);

module.exports = app;
