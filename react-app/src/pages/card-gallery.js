import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const CardGallery = (props) => {
    const [cards, setCards] = useState([""]);

    useEffect(() => {
        fetch("/api/cards")
            .then(res => res.json())
            .then(data => {
                let imgUrls = [];
                
                for(var i = 0; i < data.imgs.length; i++) {
                    imgUrls.push(data.imgs[i]);
                }

                setCards(imgUrls);
            })
    }, []);
    
    function GenerateXCardsInARow(numOfCols, startIndex) {
        let cols = [];

        for(var i = 0; i < numOfCols; i++) {
            cols.push( 
                <Col>
                    <img src={cards[startIndex+i]}></img>
                </Col>
            );
        }

        return <Row>{cols}</Row>
    }

    return (
        <Container fluid className="card-gallery">
            <Row>
                <h1>Card Gallery</h1>
            </Row>
                {cards.map((imgUrl, index) => 
                    {
                        let elem = null;
                        let leftover = cards.length % 4;
                        
                        //hmmm cant tell if this is working yet due to number of cards == 420
                        if(cards.length - index <= leftover){
                            if(index == cards.length-1) {
                                elem = GenerateXCardsInARow(leftover, cards.length - leftover); 
                            }
                        }
                        else if(index != 0 && index % 4 == 0)
                        {
                            elem = GenerateXCardsInARow(4, index-4); 
                        }

                        return elem;
                    })
                        
                })}
        </Container>
    )
}

export default CardGallery;