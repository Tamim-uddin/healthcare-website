import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import './Register.css';
import { useHistory } from 'react-router-dom';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const history = useHistory();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password, name);
        if(password.length < 6){
            setError('password must be at least 6 character long')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            history.push('/');
        })
        .catch(error => {
            setError(error.message);
        })    
    }

    return (
        <div className="register-form">
            <h3>Please Registration</h3>
            <form onSubmit={handleRegistration}>
                <input onBlur={handleNameChange} type="text" placeholder="Name" required/><br />
                <input onBlur={handleEmailChange} type="email" placeholder="Email" required/><br />
                <input onBlur={handlePasswordChange} type="password" placeholder="Password" required/> <br />
                <input onBlur={handlePasswordChange} type="password" placeholder="Retype Password" required/> <br />
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
                <p>Already Register? <NavLink to="/login">Sign In</NavLink></p>
                <div className="text-danger">{error}</div>
        </div>
    );
};

export default Register;