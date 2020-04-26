import React, { useState, useEffect } from 'react'
import { 
    Container, Row, Col
    , InputGroup, InputGroupAddon, InputGroupText
    , Input, Label, Button
} from 'reactstrap'
import EditIcon from '../images/edit-pen.png'
import * as Constants from '../constants.tsx'
import MyModal from './MyModal.tsx'

const DeckCreator = (props) => {
    //cant rely on props as they will be updated before states
    //i.e. props will update before render, states after alas conflict at initial render
    //console.log(props.deck);
    const [deck, setDeck] = useState({});
    const [deckProps, setDeckProps] = useState({});
    const [decklist, setDecklist] = useState({});
    const [deckCode, setDeckCode] = useState("");

    const RemoveFromDeck = code => props.handler(code, false);
    const CreateDeck = async () => {
        let resp = await fetch("/api/deck/encode", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(decklist)
        });
        let json = await resp.json();

        setDeckCode(json.code);
    }
    const ModalBodyText = 
            <Container>
                <Row>
                    <Col>
                        Down below is the text you can use to import your 
                        deck into Legends of Runeterra or other websites/
                        features that allow this.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" value={deckCode} readOnly></Input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Simply copy the above code!
                    </Col>
                </Row>
            </Container>

    const DeckCodeModal = () => {
        if(deckCode != "" && deckCode != null) {
            return <MyModal 
                openModalText="View deck code"
                modalTitle="Generated deck code"
                modalBody={ModalBodyText}
            />
        }

        return ""
    }   
    
    useEffect(() => {
        setDeck(props.deck);
        let parsedDecks = ParseDeck();
        setDeckProps(parsedDecks["props"]);
        setDecklist(parsedDecks["codes"]);
        console.log(parsedDecks["codes"]);
    }, [props.deck]);

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
                    <span id="lbl_champions_count">{deckProps["champions"]}/{Constants.MAX_CHAMPS}</span>
                </Col>
                <Col xs={6} sm={3}>
                    <Label for="lbl_total_count">Total:</Label>
                    <span id="lbl_total_count">{deckProps["total"]}/{Constants.MAX_CARDS}</span>
                </Col>
                <Col xs={12}>
                    {props.barChart}
                </Col>
            </Row>
            <Row className="deck-creator__cards">
                <ul>
                    {Object.keys(decklist).sort(SortCards).map(code => {
                        let key = decklist[code]["index"];
                        //console.log(decklist);
                        return(
                            <li>
                                <Button onClick={() => RemoveFromDeck(code)}>
                                    {deck[key]["cost"]}: {deck[key]["name"]} x{decklist[code]["total"]}
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </Row>
            <Row className="deck-creator__save_btn">
                <Button onClick={CreateDeck}>Save</Button>
                <DeckCodeModal/>
            </Row>
        </Container>
    )

    function ParseDeck() {
        const defaultDict = { "spells": 0, "followers": 0, "champions": 0, "total": 0 };
        const codeDict = {};

        if(deck) {
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

                if(!codeDict[props.deck[key]["cardCode"]])
                    codeDict[props.deck[key]["cardCode"]] = {"index": key, "total": 1};
                else
                    codeDict[props.deck[key]["cardCode"]]["total"] += 1;

                defaultDict["total"] += 1;
            })
        }

        return { "props": defaultDict, "codes": codeDict };
    }

    function SortCards(a, b) {
        let aInd = decklist[a]["index"];
        let bInd = decklist[b]["index"];

        if(Number(deck[aInd]["cost"]) < Number(deck[bInd]["cost"]))
            return -1;

        if(Number(deck[aInd]["cost"]) > Number(deck[bInd]["cost"]))
            return 1;
        
        if(deck[aInd]["name"] < deck[bInd]["name"])
            return -1;
        if(deck[aInd]["name"] > deck[bInd]["name"])
            return 1;

        return 0;
    }
}

export default DeckCreator;