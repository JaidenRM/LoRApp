import React from 'react';
import '../css/NavBar.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { pageRoutes } from '../routes.tsx';
import PropTypes from 'prop-types';

NavBar.propTypes = {
    layout: PropTypes.string
}

const NavBar = (props) => {

    return (
        <Container className={props.className} fluid>
            {getLayout()}
        </Container>
    );
    
    function getLayout() {
        switch(props.layout) {
            case "mobile":
                return (
                    Object.values(pageRoutes)
                        .map((prop, key) => {
                        if(prop.noRender) return null;
                        return(
                            <Row className="navrow-mobile">
                                <NavLink to={prop.path} className="navlink-mobile">
                                    {prop.displayName}
                                </NavLink>
                            </Row>
                    )})
                )
            default:
                return (
                    <Row className="navrow-desktop">
                        {Object.values(pageRoutes)
                        .map((prop, key) => {
                            if(prop.noRender) return null;
                            return(
                                <Col>
                                    <NavLink to={prop.path} className="navlink-desktop">
                                        {prop.displayName}
                                    </NavLink>
                                </Col>
                        )})}
                    </Row>
                )
        }
    }
}



export default NavBar;