<<<<<<< HEAD
=======
<<<<<<< HEAD
//import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-12'>
                            <img src='careers-logo.svg' alt='logo' className={styles.logo}></img>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-6'>
                            <p className={styles.title}>Services</p>
                            <ul className={styles.list}>
                                <li>Browse Jobs</li>
                                <li>Candidates</li>
                                <li>Companies</li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-6'>
                            <p className={styles.title}>Company</p>
                            <ul className={styles.list}>
                                <li>About us</li>
                                <li>FAQ’s</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-6'>
                            <p className={styles.title}>Support</p>
                            <ul className={styles.list}>
                                <li>Terms of use</li>
                                <li>Privacy</li>
                                <li>Conditions</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <p className={styles.title}>Newsletter</p>
                            <ul className={styles.list}>
                                <li>Join & get news regularly</li>
                            </ul>
                            <div >
                                <input className={styles.inputs} type='email' placeholder='Enter your email' />
                                <button className={styles.SendBtn}>Send</button>
                            </div>
                            <div className={styles.social}>
                                <Link to="" className={styles.link}>
                                    <img src='Twitter.svg' alt='Twitter' />
                                </Link>
                                <Link to="" className={styles.link}>
                                    <img src='Whatsapp.svg' alt='Whatsapp' />
                                </Link>
                                <Link to="" className={styles.link}>
                                    <img src='Vector.svg' alt='Instagram' />
                                </Link>
                                <Link to="" className={styles.link}>
                                    <img src='linkedin.svg' alt='LinkedIn' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-lg-6 col-md-4 col-sm-12 text-center'>
                        <span className={styles.copyright}>Copyright © 2022. Careers. All rights reserved.</span>
                    </div>
                    <div className='col-lg-6 col-md-4 col-sm-12 text-center'>
                        <span className={styles.privacy}>Privacy Policy</span>
                        <span className={styles.privacy}>Terms & Conditions</span>
                        <span className={styles.privacy}>Security</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
=======
>>>>>>> e032bf6204847b17c1415ac6b22183ef17071bba
import React from 'react';

const Footer= () => {
    return (
        <div>
            
<<<<<<< HEAD
=======
            
>>>>>>> e032bf6204847b17c1415ac6b22183ef17071bba
        </div>
    );
}

export default Footer;
<<<<<<< HEAD
=======
>>>>>>> Mary
>>>>>>> e032bf6204847b17c1415ac6b22183ef17071bba
