# scrumboard
scrumboard app created with the yeoman angular-fullstack generator

## intro
I decided to use the great yeoman angular-fullstack generator, whose purpose it is to create MEAN stack applications, using MongoDB, Express, AngularJS, and Node. It's also capable of scaffolding lots of boilerplate code, which saves time and resources at the development.

## steps taken

### install yeoman & generator

1) install yeoman
`npm install -g yo`

2) install `angular-fullstack` generator
`npm install -g generator-angular-fullstack`

### scaffold the app

1) Make a new directory, and cd into it:
`mkdir scrumseraya && cd $_`

2) Scaffold the base app
`yo angular-fullstack scrumseraya`

3) Interactively choose the technologies you want to use. I decided to use
- Client
    - Scripts: JavaScript
    - Markup: Jade
    - Stylesheets: CSS
    - Angular Router: ui-router
- Server
    - Database: MongoDB
    - Authentication boilerplate: Yes
    - oAuth integrations: Facebook Twitter Google
    - Socket.io integration: Yes

4) Scaffold the Endpoint
`yo angular-fullstack:endpoint task`

This will create the model and API on the server:
```
server/api/task/index.js
server/api/task/task.spec.js
server/api/task/task.controller.js
server/api/task/task.model.js  (optional)
server/api/task/task.socket.js (optional)
```

5) Scaffold the route
`yo angular-fullstack:route task`

This will create the client files:
```
client/app/task/task.js
client/app/task/task.controller.js
client/app/task/task.controller.spec.js
client/app/task/task.jade
client/app/task/task.css
```
