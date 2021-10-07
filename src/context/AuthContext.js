import react, {createContext, useState} from "react";

export const AuthContext = createContext(AuthContext)

function AuthContext( { children } ) {
    const [isAuth, toggleIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext