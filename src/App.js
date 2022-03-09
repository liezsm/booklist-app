import AddBook from "./Components/AddBook";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import BookDetails from "./Components/BookDetails";
import EditBook from "./Components/EditBook";

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

            <Route path='/books/:id'>
              <BookDetails />
            </Route>

            <Route path='/editbook/:id'>
              <EditBook />
            </Route>
          </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
