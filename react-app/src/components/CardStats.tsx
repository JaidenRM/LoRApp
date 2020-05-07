import React, { FunctionComponent, useState, useEffect } from 'react'
import {
    Container, Row, Col
} from 'reactstrap'

/* 
    Base show a dropdown of current and assoc. cards?
    Show card info below
*/
type CardInfo = {
    name: string
    fullImg: string,
    artist: string,
    flavour: string,
    cost: number,
    attack: number,
    health: number,
    type: string,
    rarity: string
}

interface CS {
    cards: CardInfo[]
}

const CardStats: FunctionComponent<CS> = props => {

    return (
        <Container>
            <Row>
                <Col>
                    <select>
                        {props.cards.map((c, i) => <option value={i}>{c.name}</option>)}
                    </select>
                </Col>
            </Row>
            <Row>
                {Object.keys(props.cards[0]).map(key => {
                    <Col>{key}: {props.cards[0][key]}</Col>
                })}
            </Row>
        </Container>
    )
}

export default CardStats;