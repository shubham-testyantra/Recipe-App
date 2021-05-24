import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserContext from "../../contextAPI/context";
import Login from "../login/Login";
import LandingPage from "../landingpage/LandingPage";
import AddRecipe from "../add-recipe/AddRecipe";
import Home from "../home/Home";

const Navbar = (props) => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div className="navbar-content">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success py-3">
        <div className="container-fluid col-md-12 px-4">
          <Link className="navbar-brand" to="/">
            Recipe
          </Link>

          {state.login ? (
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav mr-auto col-md-12">
                <li className="nav-item float-center col-md-6 ">
                  <Link
                    className="nav-link active float-end "
                    aria-current="page"
                    to="/add-recipe"
                  >
                    Add Recipe
                  </Link>
                </li>
                <div
                  className="nav-item nav-link col-md-6"
                  onClick={() => {
                    dispatch({ type: "logout" });
                  }}
                >
                  <li className=" nav-item   logOutClass">Logout</li>
                </div>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav mr-auto col-md-12">
                <li className="nav-item  col-md-12  text-end ">
                  <Link className="nav-link  active" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <Switch>
        <Route exact path="/add-recipe" component={AddRecipe} />
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route component={Home} />
      </Switch>
    </div>
  );
};

export default Navbar;
