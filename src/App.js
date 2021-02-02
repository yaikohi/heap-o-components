import './App.css';
import React from 'react';
import '@instructure/canvas-theme';

import {ChartView} from "./components/histogram/ChartView";
import {DataTableView} from "./components/datatable/DataTableView";

import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route} from "react-router-dom"

function App() {
  return (
      <div className="App">
        <Router>
          <div className="Navbar">
            <nav className='side-nav'>
                <Link to="/">Home</Link>
                <Link to="/Chart">Chart</Link>
                <Link to="/Table">Table</Link>
            </nav>
          </div>
            <Switch>
                <Route Exact path="/Chart"  component={ChartView} />
                <Route Exact path="/Table"  component={DataTableView} />
            </Switch>
        </Router>



      </div>
  );
}

export default App;
