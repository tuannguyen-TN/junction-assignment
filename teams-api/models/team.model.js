const mongoose = require('mongoose');
const Member = require('./member.model');

const teamSchema = new mongoose.Schema(
  {
    title: String,
    challenge: String,
    description: String,
    idea: String,
    vacancies: [String],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
    contact: String,
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
