/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
  Be sure to adjust the `browserslist` field in your `package.json` file.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

// Import our top-level component.
import App from './layouts/App'



// Top-level classes on the body. Feel free to remove / change.
axios.defaults.baseURL = 'http://localhost:3000/api';

// Mount our app.
ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
