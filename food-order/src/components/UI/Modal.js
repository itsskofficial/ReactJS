import classes from "./css/Modal.module.css"
import {Fragment, ReactDOM} from "react"

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose/>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrops'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    )
}

export default Modal