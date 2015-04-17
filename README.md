# scrumboard
scrumboard app created with yeoman and the angular-fullstack generator

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
