import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Heading from '../components/Heading';

const About = props => {
    const LoRWiki = () => <a href="https://en.wikipedia.org/wiki/Legends_of_Runeterra">here</a>
    const GitHub = () => <a href="https://github.com/JaidenRM/">GitHub</a>
    const PersonalWebsite = () => <a href="https://jaidenrm.github.io/">Personal Website</a>
    const Email = () => <a href="mailto:jaidenreecemuscat@gmail.com">Email</a>
    const LinkedIn = () => <a href="https://au.linkedin.com/in/jaiden-muscat-3441981a0">LinkedIn</a>

    return(
        <Container className="about">
            <Row className="about__header">
                <Heading
                    text="ABOUT"
                    className="heading-about"/>
            </Row>
            <Row className="about__body about__body_intro">
                <Col>
                    This website has been created and designed by myself based 
                    around a card game created by Riot Games. The card game exists 
                    in the same universe as the highly successful MOBA - League of Legends. 
                    The wikipedia page to Legends of Runeterra is linked <LoRWiki/>
                </Col>
            </Row>
            <Row className="about__body about__body_languages">
                <Col>
                    The website main languages are Javascript for front-end and Python for 
                    back-end. The frameworks used in these languages are Flask for Python and 
                    React for Javascript. Some other front-end inclusions are Typescript and 
                    SASS. The reason I chose the languages/frameworks wasn't because how they 
                    worked together, it was because these were the frameworks and languages I 
                    was interested in learning/refreshing on.
                </Col>
            </Row>
            <Row className="about__body about__body_react">
                <Col>
                    Most of the features you see on the website were created by me through React 
                    components (Filter, Sidebar, Deck encoder etc..) because I wanted learn more 
                    about the framework and I am someone who prefers to learn by doing. Stuff I did 
                    import were the embedding of the twitter feed and reactstrap library (bootstrap 
                    for react basically). The way the pages work are that they are loaded through 
                    react-router and then render there React code along with any calls to the Python 
                    API I have integrated.
                </Col>
            </Row>
            <Row className="about__body about__body_new">
                <Col>
                    I've had a bunch of fun with this project but I am also excited to start a new one 
                    but I will make sure I have a baseline version of this first. I've slowly started 
                    expanding on my existing code (to include TypeScript) and may look at integrating 
                    Redux as I feel it would be a great tool in this project. I refrained from learning 
                    it because I wanted to learn vanilla React first. You can check out the code to this 
                    project at my GitHub and find me or contact me at the below resources.
                </Col>
            </Row>
            <Row className="about__body about__body_contact-me">
                <Col>
                    <ul>
                        <li><GitHub/></li>
                        <li><PersonalWebsite/></li>
                        <li><LinkedIn/></li>
                        <li><Email/></li>
                    </ul>
                </Col>
            </Row>
            <Row className="about__body about__body_end">
                <Col>
                    Thank you and have a wonderful day :)
                </Col>
            </Row>
        </Container>
    )
}

export default About;