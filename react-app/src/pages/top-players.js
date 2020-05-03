import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PaginatedTable from '../components/PaginatedTable.tsx';

const TopPlayers = (props) => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetchLeaderboard();
    }, []);
    
    const fetchLeaderboard = async () => {
        try {
            const res = await fetch('/api/riotLoR/leaderboards');
            const json = await res.json();
            //console.log(json);

            setLeaderboard(json.players);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <h1>Top Players</h1>
            <Row>
                <Col>
                    <PaginatedTable 
                        tableData={leaderboard}
                        visibleRows={10} />
                </Col>
            </Row>
        </Container>
    )
}

export default TopPlayers;