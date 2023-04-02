import { Fragment, useRef, useState } from 'react'
import './css/NewUser.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const NewUser = (props) => {
    const [error, setError] = useState(null)

    const userName = useRef()
    const userAge = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title:'Invalid Input',
                message:'Please enter valid name and age'
            })
            return
        }

        if (userAge === 0) {
            setError({
                title:'Invalid Age',
                message:'Please enter age greater than 0'
            })
            return
        }
        props.onAddUser({
            key:Math.random(),
            name: userName.current.value,
            age: userAge.current.value,
        })

        userName.current.value = ''
        userAge.current.value=''

    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <form className='new-user-form' onSubmit={formSubmitHandler}>
                <div className='new-user-forn-label-container'>
                    <h2 className='new-user-form-label'>
                        Enter details
                    </h2>
                </div>
                <div className='new-user-form-input-container'>
                    <input type='text' className='new-user-form-input-name' placeholder='Enter name' ref={userName}>
                    </input>
                    <input type= 'number' className='new-user-form-input-age' placeholder='Enter age' ref={userAge}>
                    </input>
                </div>
                <div className = 'new-user-form-actions'>
                    <Button type='submit' onClick={formSubmitHandler}>
                        Add User
                    </Button>
                </div>
            </form>
        </Fragment>
    )
}

export default NewUser