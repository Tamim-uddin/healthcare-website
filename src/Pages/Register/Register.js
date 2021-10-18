import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

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
        createUserWithEmailAndPassword(auth, email, password)
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
        <div className="register-form">
            <h3>Registration</h3>
            <form onSubmit={handleRegistration}>
                <input onBlur={handleEmailChange} type="email" placeholder="Email" required/><br /><br />
                <input onBlur={handlePasswordChange} type="password" placeholder="Password" required/><br /><br />
                <input type="submit" value="Register" />
            </form><br />
                <div className="text-danger">{error}</div>
                <p>Already Register? <NavLink to="/login">Sign In</NavLink></p>
        </div>
    );
};

export default Register;