import React from 'react';
import { Row, Col } from 'reactstrap';
import { isNullOrUndefined } from 'util';

//Given a collection of objects, spread them over rows with x cols
// and in each col call each of the objects members that are given
const image_members =  ["iconAbsolutePath"]

export const CreateLayoutWithObjectMembers = (objCol, membersCol, numOfCols, component) => {
    let rows = [];
    let cols = [];

    for(var i = 0; i < objCol.length; i++) {
        let innerElem = membersCol.map((member) => {
            return <Col>{image_members.includes(member) ? <img src={objCol[i][member]}/> : objCol[i][member]}</Col>
        });
        
        cols.push(
            <Col>
                {isNullOrUndefined(component) ? innerElem : React.cloneElement(component, {}, innerElem)}
            </Col>
        )
    
        if((i+1 % numOfCols == 0 && i != 0)
            || (i == objCol.length - 1 && cols.length > 0)) {
            rows.push(<Row>{cols}</Row>);
            cols = [];
        }

    }

    return rows;
}

export const CreateLayoutWithObjects = (objCol, numOfCols, component) => {
    let rows = [];
    let cols = [];

    for(var i = 0; i < objCol.length; i++) {
        cols.push(
            <Col>
                {isNullOrUndefined(component) ? objCol[i] : React.cloneElement(component, {}, objCol[i])}
            </Col>
        )
    
        if((i+1 % numOfCols == 0 && i != 0)
            || (i == objCol.length - 1 && cols.length > 0)) {
            rows.push(<Row>{cols}</Row>);
            cols = [];
        }

    }

    return rows;
}