import React, { useState, useEffect } from 'react'
import { 
    Container, Row, Col
    , InputGroup, InputGroupAddon, InputGroupText
    , Input, Label, Button
} from 'reactstrap'
import EditIcon from '../images/edit-pen.png'

const DeckCreator = (props) => {
    const MAX_CHAMPS = 6;
    const MAX_CARDS = 40;

    const [deckProps, setDeckProps] = useState({});
    
    useEffect(() => setDeckProps(ParseDeck), [props.deck]);
    
    return (
        <Container className="deck-creator">
            <Row className="deck-creator__deck_name">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <img src={EditIcon} className="deck-creator__deck_name__icon"/>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="My new deck name..." className="deck-creator__deck_name__input"/>
                </InputGroup>
            </Row>
            <Row className="deck-creator__deck_stats">
                <Col xs={6} sm={3}>
                    <Label for="lbl_spells_count">Spells:</Label>
                    <span id="lbl_spells_count">{deckProps["spells"]}</span>
                </Col>
                <Col xs={6} sm={3}>
                    <Label for="lbl_followers_count">Followers:</Label>
                    <span id="lbl_followers_count">{deckProps["followers"]}</span>
                </Col>
                <Col xs={6} sm={3}>
                    <Label for="lbl_champions_count">Champions:</Label>
                    <span id="lbl_champions_count">{deckProps["champions"]}/{MAX_CHAMPS}</span>
                </Col>
                <Col xs={6} sm={3}>
                    <Label for="lbl_total_count">Total:</Label>
                    <span id="lbl_total_count">{deckProps["total"]}/{MAX_CARDS}</span>
                </Col>
                <Col xs={12}>
                    {props.barChart}
                </Col>
            </Row>
            <Row className="deck-creator__cards">
                <ul>
                    <li>Card 1</li>
                    <li>Card 2</li>
                    <li>Card 3</li>
                </ul>
            </Row>
            <Row className="deck-creator__save_btn">
                <Button>Save</Button>
            </Row>
        </Container>
    )

    function ParseDeck() {
        const defaultDict = { "spells": 0, "followers": 0, "champions": 0, "total": 0
        , "0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7+": 0}

        if(props.deck) {
            Object.keys(props.deck).forEach(key => {
                let cost = Number(props.deck[key]["cost"]) >= 7
                    ? "7+" : props.deck[key]["cost"];
                    
                if(props.deck[key]["type"] == "Spell") {
                    defaultDict["spells"] += 1;
                    defaultDict[cost] += 1;
                }
                else if(props.deck[key]["type"] == "Unit") {
                    if(props.deck[key]["supertype"] == "Champion")
                        defaultDict["champions"] += 1;
                    else
                        defaultDict["followers"] += 1;
                    
                    defaultDict[cost] += 1;
                }

                defaultDict["total"] += 1;
            })
        }

        return defaultDict;
    }
}

export default DeckCreator;