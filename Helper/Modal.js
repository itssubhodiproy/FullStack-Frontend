import React from 'react'
import styles from './css/Modal.module.css'
const Modal = (props) => {
  return (
    <div className={`${styles["modal-container"]}`}>
        <div className={`${styles[props.modalClass]}`}>
            <div className={`${styles["modal-content"]}`}>
              {props.children}
            </div>
        </div>
    </div>
  )
}

export default Modal