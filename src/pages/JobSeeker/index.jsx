<<<<<<< HEAD
import React from 'react';

const JobSeeker = () => {
    return (
        <div>
            
        </div>
    );
}

export default JobSeeker;

=======
// import React from 'react';
import styles from './JobSeeker.module.css';
import Card from '../../component/Cards/Cards';
import Navbar from '../../component/Navbar/index';

const JobSeeker = () => {
    return (
        <>
            <div className={styles.heroSection}>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.containerContent}>
                        <h1>
                            The <span className={styles.highlight}>#1</span> Job Board for<br /> Hiring or Find your next <br /> job in <span className={styles.highlight}>Egypt</span>
                        </h1>
                        <p>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                        <div className={styles.searchBar}>
                            <div className={styles.searchItem}>
                                <i className="fas fa-briefcase"></i>
                                <select className={styles.searchSelect}>
                                    <option value="">Industry</option>
                                    <option value="IT">IT</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>
                            <span className={styles.separator}>|</span>
                            <div className={styles.searchItem}>
                                <i className="fas fa-map-marker-alt"></i>
                                <select className={`${styles.searchSelect} ${styles.noBorder}`}>
                                    <option value="">Location</option>
                                    <option value="Cairo">Cairo</option>
                                    <option value="Alexandria">Alexandria</option>
                                    <option value="Giza">Giza</option>
                                </select>
                            </div>
                            <button className={styles.searchButton}>
                                <i className="fas fa-search"></i> Search
                            </button>
                        </div>
                    </div>
                    <div className={styles.containerImage}>
                        <img src="../../../assets/Hero section.jpg" alt="Job Search" />
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <Card number="30k+" title="Job Seeker" description="We always provide people a complete <br />solution upon focused of any business" />
                    <Card number="10k+" title="Vacant jobs" description="We always provide people a complete <br /> solution upon focused of any business" />
                    <Card number="20k+" title="Company" description="We always provide people a complete <br /> solution upon focused of any business" />
                </div>
            </div>
        </>
    );
}

export default JobSeeker;
>>>>>>> e032bf6204847b17c1415ac6b22183ef17071bba
