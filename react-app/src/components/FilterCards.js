import React, { useState, useEffect } from 'react';
import { 
    Container, Row, Col, 
    //Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button, Input
} from 'reactstrap';
import { CreateLayoutWithObjectMembers, CreateLayoutWithObjects } from '../helpers.tsx';
import ActiveButton from './ActiveButton';

const FilterCards = (props) => {
    //set defaults first! async method! render occurs before the return!
    const [keywords, setKeywords] = useState({"keywords": [{"name": "", "nameRef": "", "description": ""}]});
    const [regions, setRegions] = useState({"regions": [{"name":"", "nameRef": "", "iconAbsolutePath": "", "abbreviation": ""}]});
    const [rarities, setRarities] = useState({"rarities": [{"name":"", "nameRef": ""}]});
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen(prevState => !prevState);

    useEffect(async () => {
        const resp = await fetch('/api/cards/globals');
        const json = await resp.json();
        
        setKeywords(json["keywords"]);
        setRegions(json["regions"]);
        setRarities(json["rarities"]);
    }, [])

    return (
        <Container className={`filter ${isOpen ? "show" : "hidden"}`}>
            <Row className="filter__header">
                <Col className="filter__header_title">
                    <h1>Filters</h1>
                </Col>
                <Col xs="auto" className="filter__header_close" onClick={toggleOpen}>
                    &times;
                </Col>
            </Row>
            <Regions regions={regions} />
            <Costs />
            <Types />
            <Rarities rarities={rarities} />
            <Keywords keywords={keywords} />
        </Container>
    );
    
}

//hmmm look at this whole props/state thing with parents
//want the json dicts to be in the parent
const Regions = (props) => {
    const membersToCall = ["name", "iconAbsolutePath"];

    return (
        <Row className="filter__regions">
            <Col>
                <Row>
                    <h2>Regions</h2>
                </Row>
                {CreateLayoutWithObjectMembers(props.regions, membersToCall, 3, <ActiveButton/>)}
            </Col>
        </Row>
    )
}

const Costs = (props) => {
    const classNm = "filter__costs";
    const numValues = ["0", "1", "2", "3", "4", "5", "6", "7+"];
    const stats = ["Mana", "Attack", "Health"];
    
    return (
        <Row className={classNm}>
            <Col>
                <Row>
                    <h2>Costs</h2>
                </Row>
                {stats.map((stat) => {
                    return (
                        <Row>
                            <Col>
                                <Row className={classNm + "_" + stat}>
                                    {stat}
                                </Row>
                                <Row className={classNm + "_" + stat + "_filter"}>
                                    { numValues.map((num) => <Col><ActiveButton>{num}</ActiveButton></Col>) }
                                </Row>
                            </Col>
                        </Row>
                    )
                })}
            </Col>
        </Row>
    )
}

const Types = (props) => {
    const cardTypes = ["Champion", "Follower", "Spell"]
    
    return (
        <Row className="filter__types">
            <Col>
                <Row>
                    <h2>Types</h2>
                </Row>
                {CreateLayoutWithObjects(cardTypes, 4, <ActiveButton/>)}
            </Col>
        </Row>
    )
}

const Rarities = (props) => {
    const membersToCall =  ["name"];
    
    return (
        <Row className="filter__rarities">
            <Col>
                <Row>
                    <h2>Rarities</h2>
                </Row>
                {CreateLayoutWithObjectMembers(props.rarities, membersToCall, 4, <ActiveButton/>)}
            </Col>
        </Row>
    )
}

const Keywords = (props) => {
    //dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState("Select a keyword...");
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const selectMe = (text) => setSelected(text);

    return (
        <Row className="filter__keywords">
            <Col>
                <Row>
                    <h2>Keywords</h2>
                </Row>
                <Row>
                    <Col>
                        <Input type="select" name="select" id="selKeywords">
                            <option value="-1">Select a keyword...</option>
                            { Object.keys(props.keywords).map((index) => {
                                let name = props.keywords[index]["name"];
                                return(
                                    <option value={index}>
                                        {name}
                                    </option>
                                )})
                            }
                        </Input>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
                    {/* <Dropdown isOpen={dropdownOpen} toggle={toggle} active={true}>
                            <DropdownToggle caret>
                                {selected}
                            </DropdownToggle>
                            <DropdownMenu>
                                { Object.keys(props.keywords).map((index) => {
                                    let name = props.keywords[index]["name"];
                                    return(
                                        <Option>
                                            <div onClick={selectMe(name)}>{name}</div>
                                        </Option>
                                    )})
                                }
                            </DropdownMenu>
                        </Dropdown> */}
export default FilterCards;