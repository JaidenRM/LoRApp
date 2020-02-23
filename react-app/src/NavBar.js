import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className={this.props.className}>
                <li>Home</li>
                <li>Top Players</li>
                <li>Deck Builder</li>
                <li>Card Gallery</li>
                <li>Decks Submitted</li>
                <li>Card Statistics</li>
                <li>About</li>
            </ul>
        );
    }
}

export default NavBar;