import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();


    const {signinUsingGoogle} = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redierect_uri = location.state?.from || '/home'
    const handleGooglesignin = () => {
        signinUsingGoogle()
        .then(result => {
           history.push(redierect_uri)
        })
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('password must be at least 6 character long')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
        
       
    }



    return (
        <div id="login" className="loginform">
            <h3> Login</h3>
            <form onSubmit={handleRegistration}>
                <input onBlur={handleEmailChange} type="email" placeholder="Email" required/><br /><br />
                <input onBlur={handlePasswordChange} type="password" placeholder="Password" required/><br /><br />
                <input type="submit" value="Log In" />
            </form><br />
            <div className="text-danger">{error}</div>
                <p>New to Medizoid? <NavLink to="/register">Registration</NavLink></p>
            <br />
            <button className="btn btn-warning" onClick={handleGooglesignin}>Google Signin</button>
        </div>
    );
};

export default Login;