import { Fragment } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const params = useParams()
    return (
        <Fragment>
            <h1>
                Here are the product details
            </h1>
            <p>
                Product Id : {params.id}
            </p>
        </Fragment>
        
    )
}

export default ProductDetails