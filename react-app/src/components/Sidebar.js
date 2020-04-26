//controls the elements we will have on the side
//set fixed position
//onclick assign class and open element
    //assign class to set fixed position of element

import { Container, Row, Col } from "reactstrap"
import React, { useState } from "react"
import FilterIcon from '../images/filter.png'

const Sidebar = (props) => {
    const [isActive, setIsActive] = useState(-1);
    const Toggle = (index) => index == isActive ? setIsActive(-1) : setIsActive(index);

    let children = React.Children.toArray(props.children);

    return (
        <Container className={`sidebar_wrapper ${props.className}`}>
            <Row className="sidebar">
                <Col xs="auto">
                    {children.map((child, index) => {
                        return(
                            <Row className={`sidebar_icon`} onClick={() => Toggle(index)}>
                                <img 
                                    src={FilterIcon} 
                                    className={`sidebar_icon__image  ${isActive == index ? "activated" : ""}`}
                                />
                            </Row>
                        )
                    })}
                </Col>
                {children.map((child, index) => {
                    return (
                        <Col className={`sidebar_component ${isActive == index ? "show" : "hidden"}`}>
                            <Row className={`sidebar_component__child ${index}`}>
                                <Col>{child}</Col>
                            </Row>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Sidebar;