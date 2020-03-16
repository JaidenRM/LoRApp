import React from 'react';
import NavBar from '../components/NavBar';

class DesktopMenu extends React.Component {

    render() {
        return <NavBar className={`nav ${this.props.className}`}/>
    }
}

export default DesktopMenu;