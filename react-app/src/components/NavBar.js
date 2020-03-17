import React from 'react';
import '../css/NavBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import {
    Container, Row, Col
} from 'reactstrap';
import {
    pageRoutes
} from '../routes.tsx';
import PropTypes from 'prop-types';

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    getLayout() {
        switch(this.props.layout) {
            case "mobile":
                return (
                    Object.values(pageRoutes)
                          .map((prop, key) => {
                        if(prop.noRender) return null;
                        return(
                            <Row>
                                <NavLink to={prop.path}>
                                    {prop.displayName}
                                </NavLink>
                            </Row>
                    )})
                )
            default:
                return (
                    <Row>
                        {Object.values(pageRoutes)
                          .map((prop, key) => {
                            if(prop.noRender) return null;
                            return(
                                <Col>
                                    <NavLink to={prop.path}>
                                        {prop.displayName}
                                    </NavLink>
                                </Col>
                        )})}
                    </Row>
                )
        }
    }

    render() {
        return (
            <Container className={this.props.className}>
                {this.getLayout()}
            </Container>
        );
    }
}

NavBar.propTypes = {
    layout: PropTypes.string
}

export default NavBar;