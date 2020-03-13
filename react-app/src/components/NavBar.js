import React from 'react';
import ReactDOM from 'react-dom';
import '../css/NavBar.css';
import TopPlayers from '../pages/top-players';
import CardStatistics from '../pages/card-statistics';
import CardGallery from '../pages/card-gallery';
import DeckBuilder from '../pages/deck-builder';
import DeckLibrary from '../pages/deck-library';
import About from '../pages/about';
import NotFound from '../pages/not-found';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
                <div className={this.props.className}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/top-players">Top Players</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/card-gallery">Card Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="/deck-builder">Deck Builder</NavLink>
                        </li>
                        <li>
                            <NavLink to="/deck-library">Deck Library</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>

                </div>
        );
    }
}

export default NavBar;