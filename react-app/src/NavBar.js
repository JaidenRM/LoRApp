import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';
import App from './App';
import TopPlayers from './top-players';
import CardStatistics from './card-statistics';
import CardGallery from './card-gallery';
import DeckBuilder from './deck-builder';
import DeckLibrary from './deck-library';
import About from './about';
import NotFound from './not-found';
import Index from './index';
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