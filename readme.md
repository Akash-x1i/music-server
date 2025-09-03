# Installation:
- `npm init -y`
- `npm i express`
- `npm i --save-dev nodemon`

- add scripts in package.json: `"devStart": "nodemon server.js"`
- create `server.js`
- `npm run devStart` to run the server

- `npm i ejs`
- set view-engibne by: `app.set('view engine', 'ejs')`
- create `index.ejs` in views dir 