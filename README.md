# Junction Full-stack Developer Assignment

# Introduction

This is my submission for the assignment of Junction's Fullstack Developer position in this summer. Due to my limited knowledge amd skills, I managed to merely complete (on a not-so-well-designed for) some of the features mentioned in the Notion page, and sketched in the UI Wireframe on Figma. Those included:

- Overall layout of homepage.
- Team display with full overview of information.
- Routing for vacancies and team members.
- Surface-level design of webpage.

# Technology overview

In this assignment, I used the MERN (MongoDB, Express, React, Node) stack. In addition, I utilized Vite to create the boilerplate and get started. I split the app into two separate directories:

- junction-assignment/join-a-team-site: consists of frontend content.
- junction-assignment/teams-api: consists of backend content.

With that said, in order to run the app, it is necessary to run the development command from both directories since they fulfil different purposes.

Before running backend, we need the credentials to the MongoDB database. The credentials are stored in `process.env` file.

```
// with pwd = .../junction-assignment/
cd teams-api/
cp process.env .env
```

To run the app, first run the backend:

```
// with pwd = .../junction-assignment/
cd teams-api/
npm install
nodemon index.js
```

then from another command line tab, run the frontend:

```
// with pwd = .../junction-assignment/
npm install
cd join-a-team-site/
npm run dev
```

## Author

Tuan Nguyen (tuannguyen221101@gmail.com)
