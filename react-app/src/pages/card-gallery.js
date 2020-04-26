import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../components/Card.tsx';
import FilterCards from '../components/FilterCards';
import Sidebar from '../components/Sidebar';

const CardGallery = (props) => {
    const [cards, setCards] = useState({});
    const [nonCollectible, setNonCollectible] = useState({});
    const setCardsDict = c => setCards(c);

    //for single use API call
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
            <Sidebar>
                <FilterCards cards={cards} setCards={setCardsDict} />
            </Sidebar>
            <Row className="card-gallery__title">
                <h1>Card Gallery</h1>
            </Row>
            <Row className="card-gallery__cards">
                {Object.keys(cards).map((key, index) => 
                    {   
                        return(
                            <Col 
                                xs={6} sm={4} md={3} 
                                className={cards[key]["isFiltered"] ? "hidden" : "show"}
                            >
                                <Card imgUrl={cards[key]["assets"][0]["gameAbsolutePath"]}
                                    className="card-gallery__cards_card"></Card>
                            </Col>
                        )
                    })     
                }
            </Row>
        </Container>
    )
}

export default CardGallery;