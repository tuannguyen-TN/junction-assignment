const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const teamsRouter = require('./routes/teams');
const membersRouter = require('./routes/members');

app.use('/teams', teamsRouter);
app.use('/members', membersRouter);

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
