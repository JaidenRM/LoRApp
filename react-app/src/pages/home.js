import React from 'react';
import {
    Container, Row, Col,
    Jumbotron
} from 'reactstrap';
import Heading from '../components/Heading';
import ScrollTo from '../components/ScrollTo';


const Home = (props) => {

    return (
        <Container fluid className="home">
            <section className="section-first">
                <Jumbotron>
                    <Row className="h-100">
                        <Col md="3">
                            <Heading text={"Legends of Runeterra"} 
                                textStyle="acronym" className="heading-sidetitle"/>
                        </Col>
                        <Col className="text-center m-auto">
                            <Heading text={"JaidenRM's LoR Data Dump"}
                                className="heading-website" />
                        </Col>
                    </Row>
                </Jumbotron>
            </section>
            <ScrollTo scrollTo="section-second"></ScrollTo>
            <section className="section-second">
                <Jumbotron>
                    <Row>
                        <p>
                            Welcome to the site. I made this as a little project as I've been
                            excited for the release of this game. I've been an avid Hearthstone
                            player since release and have been looking for another card game to
                            get into. And I have not been disappointed so far! I also player
                            League of Legends so this was a natural fit for me.
                        </p>
                        <p>
                            This gave me the inspiration to come up with a project for learning
                            ReactJS, hence this website. I hope you enjoy it.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </Row>
                </Jumbotron>
            </section>
            <ScrollTo scrollTo="section-third"/>
            <section className="section-third"></section>
        </Container>
    )
}

export default Home;