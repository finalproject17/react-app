import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Adjust the import according to your setup
import styles from './style.module.css';


const SideMenuItem = ({ icon, label, to }) => {
    return (
        <div className={styles.sideMenuItem}>
            <Link  className={styles.sideMenuItem__link}>
                <FontAwesomeIcon icon={icon} />
                
                <div className={styles.sideMenuItem__text}>{label}</div>
            </Link>
        </div>
    );
}

export default SideMenuItem;
