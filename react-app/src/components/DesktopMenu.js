import React from 'react';
import NavBar from '../components/NavBar';

const DesktopMenu = (props) => {

    return <NavBar className={`nav ${props.className}`}/>
}

export default DesktopMenu;