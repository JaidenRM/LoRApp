import React, { useState } from 'react';
import { Button } from 'reactstrap';

//Button used for the FilterCards component
//Has methods used for this component in mind
const ActiveButton = (props) => {
    const [activated, setActivated] = useState(false);
    //plan:
        //pass the type and either get amount from here or pass it
        //set remove or add here passed on toggle
        //filters all the way back up to top parent that will then update the search/filter based on this change

    const toggle = () => {
        setActivated(prevState => {
            //execute this here bc we will miss the state updating if we are outside the callback
            props.onClick(props.type, props.val, !prevState);
            return !prevState;
        });
    };
    
return <Button onClick={toggle} className={`${activated ? "activated" : ""} active-button`}>{props.children}</Button>
}

export default ActiveButton;