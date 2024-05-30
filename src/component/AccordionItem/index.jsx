//import React, { useState } from 'react';
import styles from './Style.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

function AccordionItem() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
                <div className={styles['accordion-item']}>
                <div className={styles['accordion-header']} onClick={() => setIsActive(!isActive)}>
                    {/* {title} */}
                    Our founders Dustin Moskovitz and Justin Rosenstein met.  <span>{isActive ?  <IoIosArrowUp />: <IoIosArrowDown />}</span>
                </div>
                {isActive && <div className={styles['accordion-content']}><p>
                  {/* {content} */}
                  Our founders Dustin Moskovitz and Justin Rosenstein met. </p></div>}
                </div>
                
       
    </>
  );
}

export default AccordionItem;
