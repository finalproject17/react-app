import React from 'react'
import styles from './style.module.css'

 const PrimaryButton = ({name}) => {
  return (
    <button className={styles.btn}>{name}</button>
  )
}

export default PrimaryButton;