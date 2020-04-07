import React, { useState, useEffect } from 'react';
import { 
    Container, Row, Col, 
    //Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button, Input
} from 'reactstrap';
import ActiveButton from './ActiveButton';

const FilterCards = (props) => {
    //set defaults first! async method! render occurs before the return!
    const [keywords, setKeywords] = useState({"keywords": [{"name": "", "nameRef": "", "description": ""}]});
    const [regions, setRegions] = useState({"regions": [{"name":"", "nameRef": "", "iconAbsolutePath": "", "abbreviation": ""}]});
    const [rarities, setRarities] = useState({"rarities": [{"name":"", "nameRef": ""}]});
    const [isOpen, setIsOpen] = useState(true);
    const [filter, setFilter] = useState({});

    //const UpdateCards = () => props.setCards(props.cards);
    const toggleOpen = () => setIsOpen(prevState => !prevState);
    const setCards = (c) => props.setCards(c);
    const UpdateFilter = (type, amount, isAdd) => {

        if(isAdd) {
            if(type in filter)
                filter[type].push(amount);
            else
                filter[type] = [amount];
        }
        else {
            filter[type].splice(filter[type].indexOf(amount), 1);
            //remove type from dict if it is empty
            if(filter[type].length == 0)
                delete filter[type];    
        }

        setFilter(filter);
        UpdateCards(props.cards);
    }

    const UpdateCards = (cardDict) => {
        let newDict = {...cardDict};
        Object.keys(newDict).map((cardCode) => {
            let isShow = true;
            
            Object.keys(filter).map((type) => {
                filter[type].forEach(f => {
                    if(newDict[cardCode][type] == f){
                        isShow = true;
                        return;
                    }
                    else
                        isShow = false;
                })
            })

            newDict[cardCode]["isFiltered"] = !isShow;
            //newDict[cardCode] = cardDict[cardCode];
        })
        setCards(newDict);
        //set new cardDict
    }

    useEffect(() => {
        fetchGlobals();
    }, [])

    const fetchGlobals = async () => {
        try {
            const resp = await fetch('api/cards/globals');
            const json = await resp.json();
        
            setKeywords(json["keywords"]);
            setRegions(json["regions"]);
            setRarities(json["rarities"]);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <Container className={`filter_wrapper ${isOpen ? "show" : "hidden"}`} >
            <Row className="filter">
                <Col>
                    <Row className="filter__header">
                        <Col className="filter__header_title">
                            <h1>Filters</h1>
                        </Col>
                        <Col xs="auto" className="filter__header_close" onClick={toggleOpen}>
                            &times;
                        </Col>
                    </Row>
                    <Regions regions={regions} filter={UpdateFilter} />
                    <Costs filter={UpdateFilter} />
                    <Types filter={UpdateFilter} />
                    <Rarities rarities={rarities} filter={UpdateFilter} />
                    <Keywords keywords={keywords} filter={UpdateFilter} />
                </Col>
            </Row>
        </Container>
    );
}

//hmmm look at this whole props/state thing with parents
//want the json dicts to be in the parent
const Regions = (props) => {
    const membersToCall = ["iconAbsolutePath", "name"];

    const Filter = (type, amount, isAdd) => props.filter(type, amount, isAdd);

    return (
        <Row className="filter__regions">
            <Col>
                <Row>
                    <h2>Regions</h2>
                </Row>
                <Row>
                    {Object.keys(props.regions).map((region) => {
                        return(
                            <Col xs={4}>
                                <ActiveButton type={"region"} val={props.regions[region]["name"]} onClick={Filter}>
                                    {membersToCall.map((member, index) => {
                                        let val = props.regions[region][member];
                                        return index == 0 ? <img src={val}/> : val;
                                    })}
                                </ActiveButton>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

const Costs = (props) => {
    const classNm = "filter__costs";
    const numValues = ["0", "1", "2", "3", "4", "5", "6", "7+"];
    const stats = ["Cost", "Attack", "Health"];

    const Filter = (type, amount, isAdd) => props.filter(type, amount, isAdd);

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
                                    { numValues.map((num) => {
                                        return(
                                            <Col xs={1}>
                                                <ActiveButton type={stat.toLowerCase()} val={num} onClick={Filter}>
                                                    {num}
                                                </ActiveButton>
                                            </Col>
                                        )}) 
                                    }
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

    const Filter = (type, amount, isAdd) => props.filter(type, amount, isAdd);
    
    return (
        <Row className="filter__types">
            <Col>
                <Row>
                    <h2>Types</h2>
                </Row>
                <Row>
                    {cardTypes.map((type) => {
                        return ( 
                            <Col xs={4}>
                                <ActiveButton type="type" val={type} onClick={Filter}>
                                    {type}
                                </ActiveButton>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

const Rarities = (props) => {
    const membersToCall =  ["name"];
    
    const Filter = (type, amount, isAdd) => props.filter(type, amount, isAdd);

    return (
        <Row className="filter__rarities">
            <Col>
                <Row>
                    <h2>Rarities</h2>
                </Row>
                <Row>
                    {Object.keys(props.rarities).map((rarity) => {
                        return(
                            <Col xs={4}>
                                <ActiveButton type="rarity" val={rarity} onClick={Filter}>
                                    {membersToCall.map((member) => props.rarities[rarity][member])}
                                </ActiveButton>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

const Keywords = (props) => {
    //dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState("Select a keyword...");

    const Filter = (type, amount, isAdd) => props.filter(type, amount, isAdd);
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