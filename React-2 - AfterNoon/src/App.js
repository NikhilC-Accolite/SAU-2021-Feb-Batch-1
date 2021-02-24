import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./components/HomePage.js";
import { AddBook } from "./components/AddBook";
import { BookDetails } from "./components/BookDetails";
import { SearchBook } from "./components/SearchBook.js";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <header>
        <Navbar bg="dark" expand="lg">
          <div className="container">
            <div className="inner-content">
              <div className="brand">
                <Navbar.Brand href="/" style = {{color : '#ffffff'}}>Book Serach App</Navbar.Brand>
              </div>
              <ul className="nav-links">
                <li>
                  <Nav.Item>
                    <Link to="/">Home Page</Link>
                  </Nav.Item>
                </li>
                <li>
                  <Nav.Item>
                    <Link to="/list">Books Archive</Link>
                  </Nav.Item>
                </li>
                <li>
                  <Nav.Item>
                    <Link to="/add">Insert Books</Link>
                  </Nav.Item>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
      </header>

      <Container>
        <Switch>
          <Route exact path="/">
            <HomePage />{" "}
          </Route>
          <Route path="/list">
            <SearchBook />{" "}
          </Route>
          <Route path="/add">
            <AddBook />
          </Route>
          <Switch>
            <Route path="/detail/:id" children={<BookDetails />} />
          </Switch>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
