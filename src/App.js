import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./contextAPI/context";

import "./App.css";

import Navbar from "./components/navbar/Navbar";

const initialState = {
  login: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        login: true,
      };
    case "logout":
      return {
        login: false,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Router>
        <UserProvider value={{ state: state, dispatch: dispatch }}>
          <Navbar />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
