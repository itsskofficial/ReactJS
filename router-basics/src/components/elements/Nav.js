import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import styles from "./css/Nav.module.css"

const Nav = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <nav>
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul className={styles.list}>
                        <li>
                                <NavLink to='/' className={({ isActive }) => 
                                    isActive ? styles.active : undefined
                            } end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                                <NavLink to='/products' className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                            } end>
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default Nav