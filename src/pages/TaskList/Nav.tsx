import React, { useState } from 'react'
import { Button, Navbar, ToggleButton } from 'react-bootstrap'
import styles from '../styles/nav.module.css'
 
const Nav = () => {

    const [theme,setTheme]=useState(false)


    return (
        <Navbar className={`${styles.main} ${theme?styles.light:styles.dark}`}>
            Home
            <Button type='button' onClick={(e)=>setTheme((prev)=>!prev)}> theme
            </Button>
        </Navbar>
    )
}
 
export default Nav