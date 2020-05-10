import React, { useState, FunctionComponent } from 'react'
import {
    Container, Row, Col, Button
    , Carousel, CarouselItem, CarouselIndicators
    , CarouselCaption, CarouselControl
} from 'reactstrap'

type CItem = {
    src: string,
    altText: string,
    caption: string
}

interface MC {
    items: CItem[]
}

const MyCarousel = props => {
    const [displayStatus, setDisplayStatus] = useState("none");
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const Toggle = () => setDisplayStatus(prev => prev == "none" ? "block" : "none");

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = props.items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} style={{width: "100%"}}/>
                <CarouselCaption captionText={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Container className="my-carousel">
            <Row className="my-carousel__toggle">
                <Button onClick={Toggle}>View</Button>
            </Row>
            <Row style={{display: displayStatus, position: "fixed"}} className="my-carousel__carousel">
                <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}>
                    <CarouselIndicators items={props.items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Row>
        </Container>
    );
}

MyCarousel.defaultProps = {
    items: [],
}

export default MyCarousel;