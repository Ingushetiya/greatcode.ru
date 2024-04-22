import React from 'react'
import styles from './modal.module.scss'
const Modal = ({closeModal, children}) => {
  return (
    <div className={styles.modalOverlay}>
    <div className={styles.modal}>
      <button className={styles.closeButton} onClick={closeModal}>
        <svg viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
      </button>
      {children}
    </div>
  </div>
  )
}

export default Modal