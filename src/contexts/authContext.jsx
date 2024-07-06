import React, { createContext, useState, useContext, useEffect } from 'react';
import { json } from 'react-router-dom';

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
        console.log("madonnnnna"+token);
        console.log("madonnnnna"+isLoggedIn);
    }, []);

    const login = (token, user) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user?._id);
        localStorage.setItem("user", user);
        setToken(token);
        setIsLoggedIn(true);
    }
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};