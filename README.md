# Swirk
<a href="https://skillicons.dev">
   <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs,sass,ts" />
</a>

# Project Idea


The project idea was inspired by <a href="https://twitter.com">Twitter</a>.

# Table of Contents
  - <a href="#about">About this Project</a>
  - <a href="#how-to-run">How to run the app on your computer</a>
  - <a href="#future-features">Future Features</a>
  - <a href="#project-structure">Project Structure</a>
  - <a href="#tools">Tools</a>
  - <a href="#application-pictures">Application Pictures</a>


# <p id="about">About this project</p>

Swirk is a social meadia project and its similar to Twitter. It is a place where people can share their opinion on many different topics and ideas. They have full access to all of the resources on the server and can use many functionalities related to posting content online.

# <p id="how-to-run">How to run the app on your computer</p>

1. You can download the project ZIP file or you can clone the repository directly.
2. Open the project with IDE/Code Editor.
3. Open terminal with `Ctrl + J`.
4. Navigate to swirk folder with `cd swirk`.
4. Then navigate to `client` folder with `cd client`.
5. Type `npm i` to install all modules that are listed on `package.json` file and their dependencies.
6. Type `npm start` to run the project in the browser. It will start on `http://localhost:3000`, but you can change it to another if necessary. Type `y` to do it.
7. Do the steps 4, 5 and 6 with the server folder.
7. Explore Swirk.
8. Share your opinion and thoughts on Swirk.

# <p id="future-features">Future Features</p>

- <strong>Chat</strong>
  - send message to user
  
- <strong>Discussions</strong>
  - start discussion
  - invite users to discussion

# <p id="project-structure">Project Structure</p>
  - Client
    - api - for all of the project api requests
    - assets - for project assets
    - components - all of the components used in multiple places
    - constants - all of the project constant variables
    - contexts - all of the project contexts
    - features - all of the project features (authentication, posts, genres and profile)
    - hooks - all of the custom hooks
    - layouts - for every partial code used by many components
    - lib - for 3rd party libraries and their configuration files
    - pages - for all of the application pages that does not store complicated logic
    - services - for each application service and its requests
    - utils - that contains functions used in multiple files

  - Server
    - config - configuring the application
    - constants - all of the project constant variables
    - controllers - folder, where we can separate the route and the controller function
    - models - stores database schemas
    - routes - contains various application routes

# <p id="tools">Tools</p>

 - <a href="https://reactjs.org/">React</a>
  - <a href="https://www.typescriptlang.org/">TypeScript</a>
  - <a href="https://reactrouter.com/">React Router</a>
  - <a href="https://firebase.google.com/">Firebase</a>
  - <a href="https://app.cyclic.sh/">Cyclic</a>
  - <a href="https://nodejs.org/en/">Node</a>
  - <a href="https://expressjs.com/">Express</a>
  - <a href="https://www.npmjs.com/package/nodemon">nodemon</a>
  - <a href="https://www.mongodb.com/">MongoDB</a>
  - <a href="https://mongoosejs.com/">Mongoose</a>
  - <a href="https://jwt.io/">jwt</a>
  - <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>
  - <a href="https://www.npmjs.com/package/dotenv">dotenv</a>

# <p id="application-pictures">Application Pictures</p>

![swirk-welcome](https://user-images.githubusercontent.com/95768526/230709166-a0c4576a-81e6-46e1-bc5c-7c15d679e37f.png)

![swirk-login](https://user-images.githubusercontent.com/95768526/230709169-54594f45-1911-44d0-91fc-2e68e0d31ff6.png)

![swirk-register](https://user-images.githubusercontent.com/95768526/230709171-8222a95c-d2fe-4517-b526-69c9a292b891.png)

![swirk-explore](https://user-images.githubusercontent.com/95768526/230709250-514aa32e-59b6-44e0-ace3-3c0215c4016c.png)

![swirk-profile](https://user-images.githubusercontent.com/95768526/230709175-af5e040b-918e-43ed-9a71-01fe84229ae9.png)

