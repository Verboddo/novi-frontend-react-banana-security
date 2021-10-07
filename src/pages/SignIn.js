import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const { loggedIn } = useContext(AuthContext)
    console.log(loggedIn)
  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
          <input
              type="text"
              placeholder="e-mailadres"
          />
          <input
              type="text"
              placeholder="wachtwoord"
          />
        <button
            type="button"
            onClick={loggedIn}
        >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;