import styles from './Modal.module.css'
import ReactDOM from "react-dom"
import PropTypes from "prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay"

const modalRoot = document.getElementById("modal");


export default function Modal( { children, isModalOpened, toggleModal } ) {
    if (isModalOpened) {
      return ReactDOM.createPortal(
          (
      <>
      <div className={styles.details__modal}>
          <button id = 'modal_close' onClick={() => toggleModal()} className={styles.modal_close}></button>
            {children}
        </div>
        <ModalOverlay toggleModal={() => toggleModal()}/>
        </>
        ),
        modalRoot
      )}};

Modal.propTypes = {
    children: PropTypes.object,
    isModalOpened: PropTypes.bool,
    toggleModal: PropTypes.func,
}; 


