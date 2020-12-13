import './App.css';
import '@instructure/canvas-theme';

import {ChartOverview} from "./components/histogram/ChartOverview";
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
