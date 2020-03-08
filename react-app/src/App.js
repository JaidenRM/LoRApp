import React from 'react';
import NavBar from './NavBar';
import Hamburger from './Hamburger';
import TopPlayers from './top-players';
import CardStatistics from './card-statistics';
import CardGallery from './card-gallery';
import DeckBuilder from './deck-builder';
import DeckLibrary from './deck-library';
import About from './about';
import NotFound from './not-found';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';


class App extends React.Component {
    render() {
        return(
            <Router>
                <Hamburger/>
                <Switch>
                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route path="/top-players" component={TopPlayers} />
                    <Route path="/statistics" component={CardStatistics} />
                    <Route path="/card-gallery" component={CardGallery} />
                    <Route path="/deck-builder" component={DeckBuilder} />
                    <Route path="/deck-library" component={DeckLibrary} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
