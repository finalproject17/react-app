//import React from 'react';
import AccordionItem from '../../component/AccordionItem/index';
import styles from './style.module.css';
import Footer from  '../../component/Footer/index'
const WhyChooseUs = () => {
    return (<><div className={styles.glassy}>
            
                 
                   <div className={styles.container }>

                   <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <h2 className={styles.mainTitle}>  How it works?</h2>

                    </div>
                   </div>
                    < div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-3 col-xs-3'>
                         <img src='account.svg' alt='icons'></img>
                          <h6  className={styles.subTitle}>Create Account</h6>
                          <p  className={styles.paragraph}>It’s very easy to open an account and  start <br></br>your 
                          journey.</p>

                        </div> 


                        <div className='col-lg-4 col-md-4 col-sm-3 col-xs-3'>
                         <img src='editFile.svg' alt='icons'></img>
                          <h6  className={styles.subTitle} >Complete your profile</h6>
                          <p className={styles.paragraph} >Complete your profile with all the info to get <br></br>  attention of client.</p>

                        </div> 



                        <div className='col-lg-4 col-md-4 col-sm-3 col-xs-3'>
                         <img src='Edit.svg' alt='icons'></img>
                          <h6 className={styles.subTitle} >Apply job or hire</h6>
                          <p className={styles.paragraph} >Apply & get your preferable jobs with all   the <br></br>  requirements and get it.</p>

                        </div> 


                    </div>

                     
                   </div>



                 
            </div>
         


        <div className={styles.container}>
            
            <div className='row'>
               <div className='col-lg-6 col-md-4 col-sm-12'>
                     <div className={styles.parent}>
                      <p className={styles.par}>Why choose us?</p>
                      <h2>World of talent at your fingertips</h2>
                     <div className="accordion">
                            <AccordionItem
                                title="Who we are?"
                                content="Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                            />
                            <AccordionItem
                                title="What's our goal"
                                content="Content for our goal goes here."
                            />
                            <AccordionItem
                                title="Our vision"
                                content="Content for our vision goes here."
                            />
                        </div>
                 <button className={styles.btn1}>Learn More</button>
                    
               </div>
               </div>
               <div className='col-lg-6 col-md-4 col-sm-12'>
                <div className={styles.photos}>
                 <img src="Candidates.png" alt="photo" className={styles.photo} />
                </div>
               </div>


               
            </div>
        </div>

        <Footer/>

         
        </>
    );
}

export default WhyChooseUs;
