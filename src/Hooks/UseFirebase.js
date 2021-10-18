import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged   } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';


initializeAuthentication();

const UseFirebase = () => {
    const [user, setuser] = useState({});
    const [isloading, setisloading] = useState(true)

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();


    const signinUsingGoogle = () => {
        setisloading(true);
      return  signInWithPopup(auth, GoogleProvider)
        .finally(() => setisloading(false));
    }
    useEffect( () => {
       const unsubscribed = onAuthStateChanged(auth , user => {
            if (user) {
                setuser(user);
            }
            else{
                setuser({})
            }
            setisloading(false);
        });
        return () => unsubscribed;
    } , [])
    const logOut = () => {
        setisloading(true);
        signOut(auth)
        .then(() => {

        })
        .finally(() => setisloading(false));
    }
   return {
       user,
       isloading,
       signinUsingGoogle,
       logOut
   }
};

export default UseFirebase;