import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import NavBar from '../components/NavBar';

const MobileMenu = (props) => {

    const [isOpen, setOpen] = useState(false);
    const [isFirstTime, setFirstTime] = useState(true);

    return(
        <Row className={props.className} fluid>
            <NavBar className={isOpen ? "show" : "hidden"} layout={"mobile"}/>
            <Col onClick={handleClick} className="hamburger" xs="auto">
                <Row className={setAnimations("top")}/>
                <Row className={setAnimations("mid")}/>
                <Row className={setAnimations("bot")}/>
            </Col>
        </Row>
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