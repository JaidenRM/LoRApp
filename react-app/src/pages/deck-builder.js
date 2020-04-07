import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../components/Card.tsx';
import FilterCards from '../components/FilterCards';

const DeckBuilder = (props) => {
    const [cards, setCards] = useState({});
    const [nonCollectible, setNonCollectible] = useState({});
    const setCardsDict = c => setCards(c);

    useEffect(() => {
        fetchCards();
    }, []);
    
    const fetchCards = async () => {
        try {
            const resp = await fetch("/api/cards/all");
            const json = await resp.json();

            let collectible = {};
            let nonCollectible = {};
            let keys = Object.keys(json);

            keys.forEach((key) => {
                if (json[key]["collectible"])
                    collectible[key] = json[key];
                else
                    nonCollectible[key] = json[key];
            });

            setCards(collectible);
            setNonCollectible(nonCollectible);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <Container fluid className="card-gallery">
            <FilterCards cards={cards} setCards={setCardsDict} />
            <Row>
                <h1>Card Gallery</h1>
            </Row>
            <Row>
                {Object.keys(cards).map((key) => 
                    {   
                        return(
                            <Col xs={3} className={cards[key]["isFiltered"] ? "hidden" : "show"}>
                                <Card imgUrl={cards[key]["assets"][0]["gameAbsolutePath"]}></Card>
                            </Col>
                        )
                    })     
                }
            </Row>
        </Container>
    )
}

export default DeckBuilder;