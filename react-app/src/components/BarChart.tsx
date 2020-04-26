import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'

interface BCProps {
    x_values: {[key: string]: [{[identifier: string]: string}]};
    x_width: string;
    x_width_gaps: boolean;
}

const BarChart = (props : BCProps) => {
    const [xValues, setXValues] = useState(props.x_values);
    const [xHeights, setXHeights] = useState({});
    const [maxHeight, setMaxHeight] = useState(1);

    useEffect(() => {
        setXValues(props.x_values);
        CalculateHeights(props.x_values);
    }, [props.x_values]);

    return (
        <Container className="bar-chart__wrapper">
            <Row className="bar-chart align-items-end">
                {Object.keys(xValues).map(xVal => {
                    return(
                        <Col 
                            className={`bar-chart__column ${props.x_width_gaps ? "gap" : ""}`} 
                            style={{
                                "height": String(xHeights[xVal]*100/maxHeight + "%")
                                , "max-width": props.x_width == null ? "auto" : props.x_width
                            }}
                        >
                            {Object.keys(xValues[xVal]).map(id => {
                                return(
                                    <Row 
                                        className={`bar-chart__column_${id.toLowerCase()}`} 
                                        style={{height: String(xValues[xVal][id]*100/xHeights[xVal] + "%")}}
                                    ></Row>
                                )
                            })}
                        </Col>
                    )
                })}
            </Row>
            <Row className="bar-chart__x-axis">
                {Object.keys(xValues).map(xVal => {
                    return (
                        <Col className={props.x_width_gaps ? "gap" : ""}
                            style={{"max-width": props.x_width == null ? "auto" : props.x_width}}
                        >
                            {xVal}
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )

    function CalculateHeights(xAxis : {}) {
        let heightDict = {};
        let highestHeight = 0;

        Object.keys(xAxis).map(xVal => {
            let entryVal = 0;

            Object.keys(xAxis[xVal]).map(id => {
                entryVal += Number(xAxis[xVal][id]);
            });

            if(entryVal > highestHeight)
                highestHeight = entryVal;

            heightDict[xVal] = entryVal;
        });

        setXHeights(heightDict);
        setMaxHeight(highestHeight);
    }
}

export default BarChart;