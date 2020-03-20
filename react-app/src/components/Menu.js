import React, { useEffect, useState } from 'react';
import MobileMenu from '../components/MobileMenu';
import DesktopMenu from '../components/DesktopMenu';

const Menu = (props) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, [screenWidth]);

    //work out states and logic for when to show hamburger vs no hamburger
    //console.log(screenWidth);
    if(screenWidth < 760)
        return <MobileMenu className="mobile-layout"/>

    return <DesktopMenu className="desktop-layout"/>
}

export default Menu;