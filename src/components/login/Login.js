import React, { useContext } from "react";

import UserContext from "../../contextAPI/context";

function Login(props) {
  const { state, dispatch } = useContext(UserContext);

  const landingPage = () => {
    dispatch({
      type: "login",
    });
    props.history.push("/landingpage");
  };

  return (
    <div className="mt-5">
      <h2>Login Page</h2>
      <p className="pt-4">
        <h5>Username : ________________</h5>
        <h5>Password : ________________</h5>
      </p>
      <br />
      <button
        className="px-5 btn-danger"
        onClick={() => {
          landingPage();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
