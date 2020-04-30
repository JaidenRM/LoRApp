import React from 'react';
import {
    Container, Row, Col,
    Jumbotron
} from 'reactstrap';
import Heading from '../components/Heading';
import ScrollTo from '../components/ScrollTo';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const Home = (props) => {
    const LoRTwitter = () => {
        return (
            <Row>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="PlayRuneterra"
                    options={{height: "60vh", width: "50vw"}}
                />
            </Row>
        )
    }
        
    const intro = 
        <Jumbotron>
            <Row>
                <Col>
                    Welcome to the site. I made this as a little project as I've been
                    excited for the release of this game. I've been an avid Hearthstone
                    player since release and have been looking for another card game to
                    get into. And I have not been disappointed so far! I also player
                    League of Legends so this was a natural fit for me.
                </Col>
            </Row>
            <Row>
                <Col>
                    This gave me the inspiration to come up with a project for learning
                    ReactJS, hence this website. I hope you enjoy it.
                </Col>
            </Row>
            <Row>
                <Col>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Col>
            </Row>
        </Jumbotron>
    
    const issues =
        <Jumbotron>
            <Row>
                <Col>
                    <h2>Known Issues</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    As this website is a solo project to learn something new
                    , done in my spare time, issues and bugs are bound to arise. 
                    I also may know about them but don't have the time or need to learn 
                    how to fix them. I thought I'd dedicate this section to listing the 
                    issues I am currently aware of. If you find an issue that I'm not aware 
                    of, feel free to reach out to me and I'll add it to the list or fix it ASAP.
                </Col>
            </Row>
            <Row>
                <Col>
                    List of issues:
                </Col>
            </Row>
            <Row xs={{offset: 2}}>
                <Col>
                    <ul>
                        <li>
                            Encoding of decks is not in order for factions/regions at
                            a specific mana cost
                        </li>
                        <li className="striked">
                            Card filter is only filtering on one filter, also some filters 
                            appear not to be working correctly
                        </li>
                        <li>
                            Probably mobile display issues, haven't tested too much
                        </li>
                    </ul>
                </Col>
            </Row>
        </Jumbotron>
    
    const todo =
        <Jumbotron>
            <Row>
                <Col>
                    In this section I am going to be laying out the 
                    upcoming list of features/improvements being added 
                    to this website. The website is still quite early in 
                    development, so plenty of features and improvements to 
                    come, as well as the game being rather new.
                </Col>
            </Row>
            <Row>
                <Col>Upcoming features:</Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li>
                            On click of card, show associated cards and small 
                            details like flavour
                        </li>
                        <li>
                            Tidy up the top players to include in a table with 
                            pagination and perhaps some search/filter
                        </li>
                        <li className="striked">
                            When loading the cards, they are not in an order, 
                            I will update this so they load in order according 
                            to the following chain. Faction -> cost -> name.
                        </li>
                        <li>
                            Add more animations/transitions to make the website 
                            look better, i.e.: slow load cards as you scroll.
                        </li>
                        <li>
                            Add the new expansion!!
                        </li>
                    </ul>
                </Col>
            </Row>
        </Jumbotron>
    
    const latestNews =
        <Jumbotron>
            <Row>
                <Heading 
                    text="NEW EXPANSION AND RELEASE"
                    className="heading-latest-news"
                />
            </Row>
            <Row>
                <h2>April 30th 2020</h2>
            </Row>
            <Row>
                <Col>
                    Legends of Runeterra is exiting beta with 135 new cards - including 
                    new champions, keywords and even a new region - as well as official 
                    support on iOS and Android devices. Teasing us with slow releases of 
                    YouTube cinematics of the existing regions and new champions coming to 
                    them - found
                    <a href="https://www.youtube.com/channel/UCMZ5vTV7dLz_yoWw4nOzDwg"> here</a> 
                    - they have started to, what would seem like, accelerate 
                    the reveal schedule as we edge closer to the release date. To keep up with 
                    the latest news, you can peek at their twitter timeline located just below
                    this.
                </Col>
            </Row>
            <Row>
                <Col>
                    <LoRTwitter/>
                </Col>
            </Row>
        </Jumbotron>

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
                {latestNews}
            </section>
            <ScrollTo scrollTo="section-third"/>
            <section className="section-third">
                {intro}
            </section>
            <ScrollTo scrollTo="section-fourth"/>
            <section className="section-fourth">
                {todo}
            </section>
            <ScrollTo scrollTo="section-fifth"/>
            <section className="section-fifth">
                {issues}
            </section>
        </Container>
    )
}

export default Home;