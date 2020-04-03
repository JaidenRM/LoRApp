import React from 'react';

interface CardProps {
    attack: number;
    health: number;
    name: string;
    description: string;
    region: string;
    keywords: string[];
    imgUrl: string;
}

const Card = (props : CardProps) => {
    
    return <img src={props.imgUrl} />
}


export default Card;