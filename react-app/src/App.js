import React from 'react';
import Menu from './components/Menu';
import {
    pathIds, pageRoutes
} from './routes.tsx';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


class App extends React.Component {
    render() {
        return(
            <Router>
                <Menu className="nav menu"/>
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
