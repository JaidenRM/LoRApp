import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PaginatedTable from '../components/PaginatedTable';

const TopPlayers = (props) => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch('/api/riotLoR/leaderboards')
            .then(res => res.json())
            .then(data => setLeaderboard(data.players));
    }, []);
    
    return (
        <Container>
            <h1>Top Players</h1>
            <Row>
                <PaginatedTable/>
            </Row>
            <Row>
                <Col>
                    {
                        leaderboard.map((playerObj) => {
                            return (
                                <Row>
                                    <Col>
                                        {playerObj.name}
                                    </Col>
                                    <Col>
                                        {playerObj.rank}
                                    </Col>
                                </Row>
                            );
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default TopPlayers;