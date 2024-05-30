<<<<<<< HEAD
=======
// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="../../../assets/careers-logo[1].svg" alt="Logo" />
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`${styles.rightBar} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.list}>
                    <li>
                        <NavLink to="/JobSeeker" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/find-jobs" onClick={toggleMenu}>Find jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" onClick={toggleMenu}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                    </li>
                </ul>
                <div className={styles.listItems}>
                    <NavLink to="/register" className={styles.registerLink} onClick={toggleMenu}>Register</NavLink>
                    <button onClick={toggleMenu}>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
>>>>>>> e032bf6204847b17c1415ac6b22183ef17071bba
