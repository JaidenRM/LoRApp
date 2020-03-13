import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';


class Heading extends React.Component {

    mapToStyle(word, style) {
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

    render() {
        switch(this.props.textStyle) {
            case "acronym":
                let words = this.props.text.split(" ");
                return words.map((word) =>
                    this.mapToStyle(word, this.props.textStyle)
                );
            default:
                return <h1>{this.props.text}</h1>
        }

    }

}

Heading.propTypes = {
    text: PropTypes.string
};

export default Heading;
