import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';

Heading.propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.string
};

const Heading = (props) => {
    
    switch(props.textStyle) {
        case "acronym":
            let words = props.text.split(" ");
            return (
                <Row className={`heading ${props.className}`}>
                {
                    words.map((word) =>
                    mapToStyle(word, props.textStyle))
                }
                </Row>
            );
        default:
            return <h1 className={`${props.className} heading`}>{props.text}</h1>
    }

    //creates a heading based on the selected style
    function mapToStyle(word, style) {
        switch(style) {
            case "acronym":
                return (
                    <Col>
                        <Row>
                            <Col md="auto">
                                <h1>{word[0].toUpperCase()}</h1>
                            </Col>
                            <Col>
                                <p>{word.substring(1)}</p>
                            </Col>
                        </Row>
                    </Col>
                )
            default:
                return <h1>{word[0].toUpperCase() + word.substring(1)}</h1>
        }
    }
}

export default Heading;
