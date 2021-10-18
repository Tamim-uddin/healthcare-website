import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const Allcontext = UseFirebase();
    return (
        <AuthContext.Provider value={Allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;