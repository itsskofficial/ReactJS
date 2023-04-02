import './css/ErrorModal.css'
import Card from './Card'
import Button from './Button'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'

const Backdrop = (props) => {
    return (
        <div className='error-backdrop' onClick={props.onConfirm}>
        </div>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className='error-modal'>
                <header className='error-header'>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className='error-content'>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className='error-actions'>
                    <Button onClick={props.onConfirm}>
                        Okay
                    </Button>
                </footer>
            </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm = {props.onConfirm}/>, document.getElementById('overlay-root'))}
        </Fragment>
        
    )
}

export default ErrorModal