import React, { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import _variables from '../scss/_variables.scss';

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
    if(screenWidth < parseInt(_variables.md))
        return <MobileMenu className={`${props.className} menu-layout`}/>

    return <DesktopMenu className={`${props.className} menu-layout`}/>
}

export default Menu;