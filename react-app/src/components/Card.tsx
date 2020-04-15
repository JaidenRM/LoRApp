import React from 'react';

interface CardProps {
    cardCode: string;
    attack: number;
    health: number;
    cost: number;
    name: string;
    description: string;
    region: string;
    keywords: string[];
    imgUrl: string;
    className: string;
    onClick(cardCode:string, isAdd?: boolean): void;
}

const Card = (props : CardProps) => {
    const GetCardCode = () => props.onClick(props.cardCode);

    return <img className={props.className} src={props.imgUrl} onMouseDown={GetCardCode} />
}


export default Card;