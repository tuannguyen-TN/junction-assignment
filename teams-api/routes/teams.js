const express = require('express');
const router = express.Router();
const Team = require('../models/team.model');
const mongoose = require('mongoose');

// retrieve all teams
router.route('/').get((req, res) => {
  Team.find()
    .then((teams) => res.json(teams))
    .catch((err) => res.send(400).json(err));
});

// retrieve a single team
router.route('/:id').get((req, res) => {
  Team.findById(req.params.id)
    .then((team) => res.json(team))
    .catch((err) => res.status(400).json(err));
});

// add a new team
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const challenge = req.body.challenge;
  const description = req.body.description;
  const idea = req.body.idea;
  const vacancies = req.body.vacancies;
  const contact = req.body.contact;
  const members = req.body.members;
  for (let element of members) {
    element = new mongoose.Types.ObjectId(element);
  }

  const newTeam = new Team({
    title,
    challenge,
    description,
    idea,
    vacancies,
    members,
    contact,
  });

  newTeam
    .save()
    .then(() => res.json('Team added!'))
    .catch((err) => res.status(400).json(err));
});

// delete a team
router.route('/:id').delete((req, res) => {
  Team.findByIdAndDelete(req.params.id)
    .then(() => res.json('Team deleted!'))
    .catch((err) => res.status(400).json(err));
});

// update a team
router.route('/update/:id').post((req, res) => {
  Team.findById(req.params.id)
    .then((team) => {
      team.title = req.body.title;
      team.challenge = req.body.challenge;
      team.description = req.body.description;
      team.idea = req.body.idea;
      team.vacancies = req.body.vacancies;
      team.members = req.body.members;
      team.contact = req.body.contact;

      team
        .save()
        .then(() => res.json('Team updated!'))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
