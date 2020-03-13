import React from 'react';
import NavBar from './components/NavBar';
import Hamburger from './components/Hamburger';
import Home from './pages/home';
import TopPlayers from './pages/top-players';
import CardStatistics from './pages/card-statistics';
import CardGallery from './pages/card-gallery';
import DeckBuilder from './pages/deck-builder';
import DeckLibrary from './pages/deck-library';
import About from './pages/about';
import NotFound from './pages/not-found';
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
                    <Route exact path="/" component={Home} />
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
