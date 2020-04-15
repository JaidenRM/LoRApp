import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../components/Card.tsx';
import FilterCards from '../components/FilterCards';
import Sidebar from '../components/Sidebar';
import DeckCreator from '../components/DeckCreator';
import BarChart from '../components/BarChart.tsx';

const DeckBuilder = (props) => {
    const [cards, setCards] = useState({});
    const [nonCollectible, setNonCollectible] = useState({});
    const [deck, setDeck] = useState([]);
    const [bCData, setBCData] = useState({});

    const AddToDeck = (cardCode, isAdd = true) => {
        let currDeck = [...deck];
        
        if(isAdd){
            let dupes = 0, champs = 0, factions = {};
            //check our curr decks stats
            currDeck.forEach(card => {
                if(card == cards[cardCode])
                    dupes += 1;
                if(card["supertype"] == "Champion")
                    champs += 1;
                factions[card["region"]] = 1;
            })
            //check we aren't violating any deck building constraints
            if( dupes >= 3 
                || (champs >= 6 && cards[cardCode]["supertype"] == "Champion")
                || (factions.keys >= 2 && !(cards[cardCode]["region"] in factions.keys)))
                    return;

            currDeck.push(cards[cardCode]);
        }  
        else {
            currDeck.splice(currDeck.indexOf(cards[cardCode]));
        }

        setDeck(currDeck);
        UpdateBarChart(currDeck);
    };

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
                <FilterCards cards={cards} setCards={setCards} />
                <DeckCreator deck={deck} barChart={<BarChart x_values={bCData}/>}/>
            </Sidebar>
            <Row>
                <h1>Card Gallery</h1>
            </Row>
            <Row className="card-gallery__cards">
                {Object.keys(cards).map((key) => 
                    {   
                        return(
                            <Col 
                                xs={6} sm={4} md={3}
                                className={cards[key]["isFiltered"] ? "hidden" : "show"}
                            >
                                <Card 
                                    imgUrl={cards[key]["assets"][0]["gameAbsolutePath"]}
                                    className="card-gallery__cards_card"
                                    cardCode={cards[key]["cardCode"]}
                                    onClick={AddToDeck}
                                ></Card>
                            </Col>
                        )
                    })     
                }
            </Row>
        </Container>
    )

    function UpdateBarChart(currDeck) {
        let BCDict = {};

        currDeck.forEach(card => {
            let cost = card["cost"];
            let region = card["region"];

            if(cost in BCDict) {
                if(region in BCDict[cost])
                    BCDict[cost][region] += 1;
                else
                    BCDict[cost][region] = 1;
            }
            else {
                let tmpDict = {};
                tmpDict[region] = 1;
                BCDict[cost] = tmpDict;
            }
        })

        //console.log(BCDict);
        setBCData(BCDict);
        //console.log(bCData);
    }
}

export default DeckBuilder;