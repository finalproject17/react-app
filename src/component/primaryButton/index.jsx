//import React from 'react'
import styles from './style.module.css'

 const PrimaryButton = ({name ,additionalClass}) => {
  return (
    <button className={`${styles.btn} ${additionalClass}`}>{name}</button>
  )
}

export default PrimaryButton;