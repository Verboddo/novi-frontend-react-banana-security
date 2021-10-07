import React, {createContext, useState} from "react";
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext({})

function AuthContextProvider( { children } ) {
    const [isAuth, toggleIsAuth] = useState({isAuth: false, user: ''});
    const history = useHistory()

    function loggedIn() {
        toggleIsAuth({isAuth: true})
        console.log("Gebruiker ingelogd!")
        history.push("/profile")
    }

    function loggedOut() {
        toggleIsAuth({isAuth: false})
        console.log("Gebruiker is uitgelogd!")
        history.push("/")
    }

    const testData ={
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        loggedIn,
        loggedOut
    }

    return (
        <AuthContext.Provider value={testData}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider