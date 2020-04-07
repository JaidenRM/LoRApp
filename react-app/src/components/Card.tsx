import React from 'react';

interface CardProps {
    attack: number;
    health: number;
    name: string;
    description: string;
    region: string;
    keywords: string[];
    imgUrl: string;
    className: string;
}

const Card = (props : CardProps) => {
    
    return <img className={props.className} src={props.imgUrl} />
}


export default Card;