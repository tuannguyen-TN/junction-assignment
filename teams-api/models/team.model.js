const mongoose = require('mongoose');
const Member = require('./member.model');

const teamSchema = new mongoose.Schema(
  {
    title: String,
    challenge: String,
    description: String,
    idea: String,
    vacancies: [String],
    members: [{ name: String, role: String }],
    contact: String,
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
