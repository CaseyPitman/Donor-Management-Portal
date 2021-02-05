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

The mock api that handles the data for this app is a simple [JSON server](https://www.npmjs.com/package/json-server) database file hosted on [Glitch](https://glitch.com/). I am currently learning Node.JS. I plan to create my own RESTful api for this app as my first Node project.

I want to implement report functionality to allow users to generate reports targeting specific criteria (ie - top donors, total donations by type, etc.)

I also plan to implement mass email functionality that would allow users to email all past donors during donation drive events.

## Notes
