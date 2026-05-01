const mongoose = require('mongoose');
const crypto = require('crypto'); // Built-in Node.js — no install needed

const UserSchema = new mongoose.Schema(
  {
    name:           { type: String, required: true, trim: true },
    email:          { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash:   { type: String, required: true },
    passwordSalt:   { type: String, required: true },
    businessName:   { type: String, required: true, trim: true },
    role:           { type: String, enum: ['owner', 'admin', 'member'], default: 'owner' },
    whatsappNumber: { type: String, default: null },
    authToken:      { type: String, default: null }, // Session token stored in DB
    isOnboarded:    { type: Boolean, default: false },
    onboarding: {
      industry:    { type: String, default: '' },
      teamSize:    { type: String, default: '' },
      primaryGoal: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

// Hash a plain password and store salt + hash on the user
UserSchema.methods.setPassword = function (password) {
  this.passwordSalt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, 'sha512')
    .toString('hex');
};

// Verify a plain password against the stored hash
UserSchema.methods.verifyPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, 'sha512')
    .toString('hex');
  return hash === this.passwordHash;
};

// Generate a random session token and store it on the user
UserSchema.methods.generateToken = function () {
  this.authToken = crypto.randomBytes(32).toString('hex');
  return this.authToken;
};

module.exports = mongoose.model('User', UserSchema);
