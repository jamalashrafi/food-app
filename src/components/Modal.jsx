import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
    const portalNode = document.getElementById('portal');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalNode)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalNode)}
        </>
    )
}

export default Modal
