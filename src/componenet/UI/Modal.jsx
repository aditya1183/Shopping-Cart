import React from 'react'
import { createPortal } from 'react-dom'
import styles from './Modle.module.css'

function Modal({children , closedModle}) {
  return createPortal(<>
  <div className={styles.modleBackdrop} onClick={closedModle}></div>
  <div className={styles.modleContent}>{children}</div>

  
  </> , document.getElementById("modal"))
}

export default Modal