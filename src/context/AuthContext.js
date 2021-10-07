import react, {createContext, useState} from "react";
import { useHistory, Link } from 'react-router-dom';

export const AuthContext = createContext({})

function AuthContextProvider( { children } ) {
    const history = useHistory()
    const [isAuth, toggleIsAuth] = useState(false);

    function loggedIn() {
        toggleIsAuth(true)
        console.log("Gebruiker ingelogd!")
        history.push("/profile")
    }

    function loggedOut() {
        toggleIsAuth(false)
        console.log("Gebruiker is uitgelogd!")
        history.push("/home")
    }

    const testData ={
        auth: isAuth,
        loggedIn: loggedIn,
        loggedOut: loggedOut
    }

    return (
        <AuthContext.Provider value={testData}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider