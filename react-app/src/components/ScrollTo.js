import React from 'react';

const ScrollTo = (props) => {
    return (
        <div onClick={scrollTo} className="arrow">
            <div className="arrow-upper">
            </div>
            <div className="arrow-lower">
            </div>
        </div>
    )

    function scrollTo() {
        let targetElem = document.body;
        if(props.toId)
            targetElem = document.getElementById(props.scrollTo);
        else {
            let elem = document.getElementsByClassName(props.scrollTo);
            if(elem.length > 0)
                targetElem = elem[0];
        }

        let menu = document.getElementsByClassName("menu-layout")[0];
        window.scrollTo(0, targetElem.offsetTop - menu.offsetHeight);
    }
}

export default ScrollTo;