import React from 'react';
import ReactDOM from 'react-dom';
import './Hamburger.css'

class Hamburger extends React.Component {

    render() {
        return(
            <div>
                <div className="top-line"></div>
                <div className="mid-line"></div>
                <div className="bot-line"></div>
            </div>
        );
    }
}

export default Hamburger;