import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Navigation from './Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<BrowserRouter>
          <Fragment>
						<Navigation/>
						<Routing/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
