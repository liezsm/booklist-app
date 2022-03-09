import AddBook from "./Components/AddBook";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/addbook'>
              <AddBook />
            </Route>
          </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
