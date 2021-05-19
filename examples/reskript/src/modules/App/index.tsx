import {VFC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Welcome from '../Welcome';

const App: VFC = () => {
    return (
        <Switch>
            <Route path="/welcome" component={Welcome} />
            <Redirect to="/welcome" />
        </Switch>
    );
};

export default App;
