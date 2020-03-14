import React from 'react';
import NavBar from './components/NavBar';
import Hamburger from './components/Hamburger';
import {
    pathIds, pageRoutes
} from './routes';
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
                    {
                        Object.values(pageRoutes)
                              .map((prop, key) =>
                                <Route
                                    path={prop.path}
                                    component={prop.component}
                                    exact={prop.exact || false}
                                    key={`route-${key}`}
                                />
                              )
                    }
                </Switch>
            </Router>
        );
    }
}

export default App;
