import React from 'react'
import { Navbar } from 'react-bootstrap'
import styles from '../styles/nav.module.css'
 
const Nav = () => {
    return (
        <Navbar className={`${styles.light}`}>
            Home
        </Navbar>
    )
}
 
export default Nav