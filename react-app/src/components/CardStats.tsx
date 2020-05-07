import React, { FunctionComponent, useState, useEffect } from 'react'
import {
    Container, Row, Col
} from 'reactstrap'

/* 
    Base show a dropdown of current and assoc. cards?
    Show card info below
*/


interface CS {
    cards: CardInfo[]
}

const CardStats: FunctionComponent<CS> = props => {
    const [ddlInd, setDDLIndex] = useState(0);

    const HandleDDLChange = val => {
        let ind = Number(val);

        if(Number.isNaN(ind))
            ind = 0;
        
        setDDLIndex(ind);
    }
    //ERROR: when clicking on new card and not on index 0 it crashes
    return (
        <Container className="card-stats">
            <Row className="card-stats__ddl">
                <Col>
                    <select onChange={e => HandleDDLChange(e.target.value)}>
                        {props.cards.map((c, i) => <option value={i}>{c.name}</option>)}
                    </select>
                </Col>
            </Row>
            
                {Object.keys(props.cards[ddlInd]).map(key =>
                    <Row className={`card-stats__info_${key}`}>
                        <Col xs="auto">{key}: {props.cards[ddlInd][key]}</Col>
                    </Row>
                )}
            
        </Container>
    )
}

CardStats.defaultProps = {
    cards: [{
        name: null,
        fullImg: null,
        artist: null,
        flavour: null,
        cost: NaN,
        attack: NaN,
        health: NaN,
        type: null,
        rarity: null
    }]
}

export default CardStats;