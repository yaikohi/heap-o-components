import './App.css';
import React from 'react';
import '@instructure/canvas-theme';

import {ChartOverview} from "./components/histogram/ChartOverview";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route} from "react-router-dom"

import person from "./components/Person";



function App() {
  return (
      <div className="App">

          <person age={37}/>

        <Router>
          <div className="Navbar">
            <nav className='side-nav'>
              <Link to="/">Home</Link>
            </nav>
          </div>
            <Switch>
                <Route Exact path="/"  component={ChartOverview} />
            </Switch>
        </Router>



      </div>
  );
}

export default App;
