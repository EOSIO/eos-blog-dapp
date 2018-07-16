import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// Add routing config
import routes from '../../Utils/routes'

class App extends Component {
  // Set Initial State
  state = {
    showMenu: false,
    postList: [],
  }

// // setter
// sessionStorage.setItem('myData', data);
//
// // getter
// sessionStorage.getItem('myData');


// // setter
// localStorage.setItem('myData', data);
//
// // getter
// localStorage.getItem('myData');

  render() {
    return (
      <Router>
        {renderRoutes(routes)}
      </Router>
    );
  }
}

export default App;
