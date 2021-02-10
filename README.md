<img src ="src/images/bookshelf2.jpg" width = "100%">

# Literacy Council Donor Management Portal

The Donor Management Portal is a CRUD operations React/Redux app that allows charitable organizations to maintain lists of past donors. Donor records contain contact information and comprehensive donation histories.

## Features

- CRUD operations.
  - Users can create and save records of new donors, including contact information and donation history.
  - Users can read detailed donor records with a comprehensive and sortable donation history.
  - Users can update donor records in two ways. They can make large scale edits via the edit ui or they can add a single donation to a donor's history directly from the donor details ui.
  - Users can delete donor records.
- GET, POST, PATCH, and DELETE calls to a mock REST api and persitent database created with [JSON server](https://www.npmjs.com/package/json-server) hosted on [Glitch](https://glitch.com/).
- Autocomplete donor search.
- Create unique login or login with Google via [Auth0](https://auth0.com/).

## Technologies

- [React](https://reactjs.org/)

  - [Create-React-App](https://github.com/facebook/create-react-app)
  - [React-Modal](http://reactcommunity.org/react-modal/)
  - [React-Autosuggest](https://github.com/moroshko/react-autosuggest)
  - [React Promise Tracker](https://lemoncode.github.io/react-promise-tracker/)
  - [React Promise Loader](https://github.com/awibox/react-promise-loader)

- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)

  - [React Redux](https://react-redux.js.org/)
  - [Redux Thunk](https://github.com/reduxjs/redux-thunk)

- [Auth0](https://auth0.com/)
- [JSON Server](https://www.npmjs.com/package/json-server) hosted on [Glitch](https://glitch.com/)
- [Axios](https://github.com/axios/axios)
- [React JSON Schema Form](https://react-jsonschema-form.readthedocs.io/en/latest/)
- [Bootstrap](https://getbootstrap.com/) & [React Bootstrap](https://react-bootstrap.github.io/)
- 'Minty' Theme by [Bootswatch](https://bootswatch.com/)

## Future

- The mock api that handles the data for this app is a simple [JSON server](https://www.npmjs.com/package/json-server) database file hosted on [Glitch](https://glitch.com/). I am currently learning Node.JS. I plan to create my own RESTful api for this app as my first Node project.

- I want to implement report functionality to allow users to generate reports targeting specific criteria (ie - top donors, total donations by type, etc.)

- I also plan to implement mass email functionality that would allow users to email all past donors during donation drive events.

## Notes

- This was my biggest project yet, and I cannot overstate how much I learned in the process. Tutorials are fine for introducing topics, but I don't truly learn something until I do it for myself. I learn by making mistakes, by researching, and by fixing those mistakes. I learn by solving problems.

  Case in point: this was my first use of [Redux](https://redux.js.org/) and [React Redux](https://react-redux.js.org/) in a personal project. Going in I had a basic theoretical understanding of the data flow and structure of Redux, but it took me acutually coding my way through actions, reducers, and store creation - as well as all the attendant problems that can arise - to truly understand the power of Redux. This project pushed me to learn more, to solve intricate problems, and I'm stronger for it.

- The back end requirements for this project are not particularly robust. I needed a basic RESTful api to handle CRUD operations. I've used [JSON Server](https://www.npmjs.com/package/json-server) before, and felt comfortable using it here. I settled on hosting the json-server data on Glitch, and it works well enough. Glitch does have some lag time when first initializing the app, though speed improves dramatically as the user begins performing CRUD operations. I would prefer to create my own fully functional RESTful api to handle the data. I am beginning to learn Node.js, and intend to build the api for this project soon.

- This was my first project to utilize authentication. I had worked with Google OAuth 2.0 before on a tutorial project, and decided I wanted to explore another option this time. I decided to go with [Auth0](https://auth0.com/) for this project. I liked the look and feel of their universal login functionality, as well as the ability to create your own login or choose to login with Google. I was particularly pleased with the protected route functionality via the withAuthenticationRequired HOC. I was able to integrate it with [React Router](https://reactrouter.com/) easily, and I am pleased with the result.

- This was my second project to use both [React-Autosuggest](https://github.com/moroshko/react-autosuggest) and [React-Modal](http://reactcommunity.org/react-modal/) (See my [Pokédex](https://github.com/CaseyPitman/pokedex-2) project). I am a fan of both and intend to use them more going forward.

- One of the issues I ran into early on in this project was handling data for creating and editing operations. I had already built out the data structure for the donor records, and knowing I wanted to use a retrieved donor record to prefill a form for editing purposes, it made sense to reuse the same form for creating and editing purposes. As my form was somewhat large, I felt that assigning incoming data to each input field individually would be cumbersome. After some research I found [React JSON Schema Form](https://react-jsonschema-form.readthedocs.io/en/latest/). It seemed to be the perfect answer to my problem. It allowed me to build the form from the data structure, and the ability to seamlessly integrate with [Bootstrap](https://getbootstrap.com/) and my [Bootswatch](https://bootswatch.com/) theme were nice bonuses.

  React JSON Schema Form isn't perfect though. I ran into a few limitations, mostly regarding customizing fields, validation, and formatting, that required a bit of workaround. I would like to see a more customization options added, particularly when it comes to layout and sizing of input fields.
