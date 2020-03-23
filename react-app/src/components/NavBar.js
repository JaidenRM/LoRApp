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
                            <Row className="navrow">
                                <NavLink exact={prop.exact} to={prop.path} className="navlink" activeClassName="active">
                                    {prop.displayName}
                                </NavLink>
                            </Row>
                    )})
                )
            default:
                return (
                    <Row className="navrow">
                        {Object.values(pageRoutes)
                        .map((prop, key) => {
                            if(prop.noRender) return null;
                            return(
                                <Col>
                                    <NavLink exact={prop.exact} to={prop.path} className="navlink" activeClassName="active">
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