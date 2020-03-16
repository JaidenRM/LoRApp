import React from 'react';
import MobileMenu from '../components/MobileMenu';
import DesktopMenu from '../components/DesktopMenu';

class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            screenWidth: window.innerWidth
        };
        this.getWindowWith = this.getWindowWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.getWindowWidth.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.getWindowWidth.bind(this));
    }

    getWindowWidth() {
        this.setState({
            screenWidth: window.innerWidth
        });
    }

    //work out states and logic for when to show hamburger vs no hamburger
    render() {
        console.log(this.state.screenWidth);
        if(this.state.screenWidth < 760)
            return <MobileMenu className="mobile-layout"/>

        return <DesktopMenu className="desktop-layout"/>
    }
}

export default Menu;