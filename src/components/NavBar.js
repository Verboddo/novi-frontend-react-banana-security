import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const history = useHistory();
    const {auth} = useContext(AuthContext)
    const {loggedOut} = useContext(AuthContext)

    console.log(auth)
    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            {!auth &&
            <div>
                <button
                    type="button"
                    onClick={() => history.push('/signin')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => history.push('/signup')}
                >
                    Registreren
                </button>
            </div>
            }
            {auth &&
            <div>
                <button
                    type="Button"
                    onClick={loggedOut}
                >
                    Logout
                </button>
            </div>
            }
        </nav>
    );
}

export default NavBar;