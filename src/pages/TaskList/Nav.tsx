import React, { useContext, useState } from 'react'
import { Button, Navbar, ToggleButton } from 'react-bootstrap'
import styles from '../styles/nav.module.css'
import { Theme } from '../../components/ThemeContext/ThemeContext'

 
const Nav = () => {

    

    const { theme, changeTheme } = useContext(Theme);


    return (
        <Navbar className={`${styles.main} ${theme?styles.light:styles.dark}`}>
            Home
            <Button type='button' onClick={changeTheme}>
 theme {theme?<>light</>:<>dark</>}
            </Button>
        </Navbar>
    )
}
 
export default Nav