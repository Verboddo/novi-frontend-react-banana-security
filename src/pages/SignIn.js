import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const { loggedIn } = useContext(AuthContext)
    console.log(loggedIn)

    const { register, handleSubmit } = useForm();

    function onFormSubmit(data) {
        loggedIn()
        console.log(data)
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="signIn">
                    <input
                        type="text"
                        id="email"
                        placeholder="e-mailadres"
                        {...register("email")}
                    />
                    <input
                        type="text"
                        id="wachtwoord"
                        placeholder="wachtwoord"
                        {...register("wachtwoord")}
                    />
                    <button
                        type="submit"
                    >Inloggen
                    </button>
                </label>
            </form>


            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    )
        ;
}

export default SignIn;