import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

// TODO ->

const PrivateRoute = () => {}

const PublicRoute = () => {}

export default AppRouter;