const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    name: String,
    team: String,
    role: String,
    email: String,
    skills: [
      {
        skill: String,
        proficiency: Number,
      },
    ],
    about: String,
    past_projects: [{ name: String, link: String }],
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
