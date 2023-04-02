import { Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/products')
    }
    
    return (
        <Fragment>
            <h1>Hello World</h1>
            <p>
                <Link to='/products'>
                    Go to Products
                </Link>
            </p>
            <button onClick={navigateHandler}>
                Go to products
            </button>
        </Fragment>
    )
}

export default Home