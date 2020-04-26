import React, { useState, useEffect } from 'react'
import { Jumbotron } from 'reactstrap'
import constructionImg from '../images/under-construction.jpg'

const UnderConstruction = () => { 
    //TODO: 
        // fix up initial values
        // think about the calc for this, seems off..
    const [dimensions, setDimensions] = useState({"height": "auto", "width": "auto"});

    // useEffect(() => {
    //     const resizeHandler = () => {
    //         let hwDict = {"height": "auto", "width": "auto"};
                
    //         if(window.innerHeight > window.innerWidth)
    //             hwDict["width"] = "100%";
    //         else
    //             hwDict["height"] = "100%";

    //         setDimensions(hwDict);   
    //     }
    //     window.addEventListener("resize", resizeHandler);

    //     return () => {
    //         window.removeEventListener("resize", resizeHandler);
    //     }

    // });

    return (
        <Jumbotron>
            <img src={constructionImg} style={{width: "100%"}}/>
        </Jumbotron>
    )
}

export default UnderConstruction;