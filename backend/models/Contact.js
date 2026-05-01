const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number']
  },
  company: {
    type: String
  },
  stage: {
    type: String,
    enum: ['Lead', 'Contacted', 'Proposal Sent', 'Negotiation', 'Won', 'Lost'],
    default: 'Lead'
  },
  tags: {
    type: [String],
    default: []
  },
  notes: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
