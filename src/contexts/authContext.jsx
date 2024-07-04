import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    useEffect(() => {
       const token = localStorage.getItem("token");
       if (token) {
         setIsLoggedIn(true);
       }
     }, []);
    
    const login = (token) => {
        // const isToken = localStorage.getItem('token');
        localStorage.setItem("token", token);
        setToken(token);
        setIsLoggedIn(true);
    }
    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};