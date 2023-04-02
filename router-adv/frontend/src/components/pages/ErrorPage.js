import { useRouteError } from "react-router-dom"
import PageContent from "../PageContent"

const ErrorPage = () => {
    const error = useRouteError()
    let title='An error occurred'
    let message = 'Something went wrong'
    if (error.status===500){
        message =error.data.message
    }
    return (
        <PageContent title={title}>
            {message}
        </PageContent>
    )
}

export default ErrorPage