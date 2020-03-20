import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const MobileMenu = (props) => {

    const [isOpen, setOpen] = useState(false);
    const [isFirstTime, setFirstTime] = useState(true);

    return(
        <div className={props.className}>
            <NavBar className={`nav ${isOpen ? "show" : "hidden"}`} layout={"mobile"}/>
            <div onClick={handleClick} className="hamburger">
                <div className={setAnimations("top")}/>
                <div className={setAnimations("mid")}/>
                <div className={setAnimations("bot")}/>
            </div>
        </div>
    );

    function handleClick() {
        setOpen(prev => !prev);
        setFirstTime(false);
    }

    function setAnimations(cName) {
        cName += "-line";
        if(isFirstTime)
            return cName;

        cName += (" " + cName + "-animate");

        if(!isOpen)
            cName += "-reverse";

        return cName;
    }
}

export default MobileMenu;