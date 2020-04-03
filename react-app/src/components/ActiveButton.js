import React, { useState } from 'react';
import { Button } from 'reactstrap';

const ActiveButton = (props) => {
    const [activated, setActivated] = useState(false);

    const toggle = () => setActivated(prevState => !prevState);
    
return <Button onClick={toggle} className={`${activated ? "activated" : ""} active-button`}>{props.children}</Button>
}

export default ActiveButton;