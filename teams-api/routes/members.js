const express = require('express');
const router = express.Router();
const Member = require('../models/member.model');

// retrieve all members
router.route('/').get((req, res) => {
  Member.find()
    .then((members) => res.json(members))
    .catch((err) => res.status(400).json(err));
});

// retrieve a single member
router.route('/:id').get((req, res) => {
  Member.findById(req.params.id)
    .then((member) => res.json(member))
    .catch((err) => res.status(400).json(err));
});

// add a new member
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const team = req.body.team;
  const role = req.body.role;
  const email = req.body.email;
  const skills = req.body.skills;
  const about = req.body.about;
  const past_projects = req.body.past_projects;

  const newMember = new Member({
    name,
    team,
    role,
    email,
    skills,
    about,
    past_projects,
  });

  newMember
    .save()
    .then(() => res.json('Member added!'))
    .catch((err) => res.status(400).json(err));
});

// delete a member
router.route('/:id').delete((req, res) => {
  Member.findByIdAndDelete(req.params.id)
    .then(() => res.json('Member deleted!'))
    .catch((err) => res.status(400).json(err));
});

// update a member
router.route('/update/:id').post((req, res) => {
  Member.findById(req.params.id)
    .then((member) => {
      member.name = req.body.name;
      member.team = req.body.team;
      member.role = req.body.role;
      member.email = req.body.email;
      member.skills = req.body.skills;
      member.about = req.body.about;
      member.past_projects = req.body.past_projects;

      member
        .save()
        .then(() => res.json('Member updated!'))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
