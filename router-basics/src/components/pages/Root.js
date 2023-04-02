import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Nav from "../elements/Nav"

const Root = () => {
    return (
        <Fragment>
            <Nav />
            <main>
                <Outlet/>
            </main>
        </Fragment>
    )
}

export default Root