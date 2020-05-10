import React, { FunctionComponent, useState } from 'react'
import {
    Container, Row, Col
} from 'reactstrap'
import { FirstUpper } from '../helpers.tsx'

/* 
    Base show a dropdown of current and assoc. cards?
    Show card info below
*/


interface CS {
    cards: CardInfo[]
}

const CardStats: FunctionComponent<CS> = props => {
    const [ddlInd, setDDLIndex] = useState(0);

    const HandleDDLChange = val => {
        
        let ind = Number(val);

        if(Number.isNaN(ind))
            ind = 0;
        
        setDDLIndex(ind);
    }
    const SafeDDLInd = Math.min(ddlInd, Math.max(props.cards.length - 1, 0));
    //This needs to occur earlier for it to work...
    // useEffect(() => {
    //     setDDLIndex(0);
    // }, [props.cards]);

    return (
        <Container className="card-stats">
            <Row className="card-stats__ddl">
                <Col>
                    <select onChange={e => HandleDDLChange(e.target.value)} className="form-control">
                        {props.cards.map((c, i) => <option value={i}>{c.name}</option>)}
                    </select>
                </Col>
            </Row>
            
                {Object.keys(props.cards[SafeDDLInd]).map(key =>
                    <Row className="card-stats__info">
                        {key == "fullImg" ?
                            <Col xs="auto" className={`card-stats__info_${key}`}>
                                <label>Full Image</label>:&nbsp;
                                <span><a target="_blank" href={props.cards[SafeDDLInd][key]}>Click here</a></span>
                            </Col> 
                            :
                            <Col xs="auto" className={`card-stats__info_${key}`}>
                                <label>{FirstUpper(key)}</label>:&nbsp;
                                <span>{props.cards[SafeDDLInd][key]}</span>
                            </Col>
                        }
                    </Row>
                )}
            
        </Container>
    )
}

CardStats.defaultProps = {
    cards: [{
        name: null,
        fullImg: null,
        artist: null,
        flavour: null,
        cost: NaN,
        attack: NaN,
        health: NaN,
        type: null,
        rarity: null
    }]
}

export default CardStats;