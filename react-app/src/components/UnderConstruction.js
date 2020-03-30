import React, { useState, useEffect } from 'react'
import constructionImg from '../images/under-construction.jpg'

const UnderConstruction = () => { 
    //TODO: 
        // fix up initial values
        // think about the calc for this, seems off..
    const [dimensions, setDimensions] = useState({"height": "auto", "width": "auto"});

    useEffect(() => {
        const resizeHandler = () => {
            let hwDict = {"height": "auto", "width": "auto"};
                
            if(window.innerHeight > window.innerWidth)
                hwDict["width"] = "95vw";
            else
                hwDict["height"] = "95vh";

            setDimensions(hwDict);   
        }
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }

    });

    return <img src={constructionImg} style={{height: dimensions["height"], width: dimensions["width"]}}/>

}

export default UnderConstruction;