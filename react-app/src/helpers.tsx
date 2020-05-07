import React from 'react';
import { Row, Col } from 'reactstrap';
import { isNullOrUndefined } from 'util';

//Given a collection of objects, spread them over rows with x cols
// and in each col call each of the objects members that are given
const image_members =  ["iconAbsolutePath"]

export const CreateLayoutWithObjectMembers = (objCol, membersCol, numOfCols, component, componentProps) => {
    let rows = [];
    let cols = [];

    for(var i = 0; i < objCol.length; i++) {
        let innerElem = membersCol.map((member) => {
            return <Col>{image_members.includes(member) ? <img src={objCol[i][member]}/> : objCol[i][member]}</Col>
        });
        
        cols.push(
            <Col>
                {isNullOrUndefined(component) ? innerElem : React.cloneElement(component, componentProps, innerElem)}
            </Col>
        )
    
        if((i+1 % numOfCols == 0 && i != 0)
            || (i == objCol.length - 1 && cols.length > 0)) {
            rows.push(<Row>{cols}</Row>);
            cols = [];
        }

    }

    return rows;
}

export const CreateLayoutWithObjects = (objCol, numOfCols, component, componentProps = {}) => {
    let rows = [];
    let cols = [];

    for(var i = 0; i < objCol.length; i++) {
        cols.push(
            <Col>
                {isNullOrUndefined(component) ? objCol[i] : React.cloneElement(component, componentProps, objCol[i])}
            </Col>
        )
    
        if((i+1 % numOfCols == 0 && i != 0)
            || (i == objCol.length - 1 && cols.length > 0)) {
            rows.push(<Row>{cols}</Row>);
            cols = [];
        }

    }

    return rows;
}

export function SortCard(card1, card2) {
    if(card1["region"] < card2["region"])
        return -1;    
    if(card1["region"] > card2["region"])
        return 1;

    if(Number(card1["cost"]) < Number(card2["cost"]))
        return -1;
    if(Number(card1["cost"]) > Number(card2["cost"]))
        return 1;

    if(card1["name"] < card2["name"])
        return -1;
    if(card1["name"] > card2["name"])
        return 1;

    return 0;
}

function GenerateCarouselItem(card) {
    return {
        src: card["assets"][0]["fullAbsolutePath"],
        altText: "Flavour",
        caption: card["flavorText"]
    }
}

export function GenerateCarouselItems(cards, cardCode) {
    if(!cards || !cardCode) return [];
    
    let card = cards[cardCode];
    let items = [];

    if(card) items.push(GenerateCarouselItem(card));
    card["associatedCardRefs"].map(cc => {
        let assCard = cards[cc];
        if(assCard) items.push(GenerateCarouselItem(assCard));
    })

    return items;
}

function GenerateCardStat(card: Card) {
    let cs:CardInfo = {
        name: null,
        fullImg: null,
        artist: null,
        flavour: null,
        cost: NaN,
        attack: NaN,
        health: NaN,
        type: null,
        rarity: null
    };

    if(card) {
        cs.name = card.name;
        cs.fullImg = card.assets[0].fullAbsolutePath;
        cs.artist = card.artistName;
        cs.flavour = card.flavorText;
        cs.cost = card.cost;
        cs.attack = card.attack;
        cs.health = card.health;
        cs.type = card.type;
        cs.rarity = card.rarity;
    }

    return cs;
}

export function GenerateCardStats(cards:Record<string, Card>, cardCode:string) {
    let cDict:CardInfo[] = [];
    let card:Card = cards[cardCode];

    cDict.push(GenerateCardStat(card));
    
    if(!cards || !cardCode) return cDict;
    card.associatedCardRefs.map(code => 
        cDict.push(GenerateCardStat(cards[code]))
    );

    return cDict;
}