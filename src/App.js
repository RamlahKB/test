import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import Header from './Components/Scripts/Header';
import Login from './Components/Scripts/Login';
import Home from './Components/Scripts/Home';
import Task from './Components/Scripts/Tasks';
import User from './Components/Scripts/User';
import NewPass from './Components/Scripts/NewPass';
import PriRoute from './Components/PriRoute';

function App() {
    const Main = withRouter(({location})=>{
        return(
            <div>
                { location.pathname !== '/login' && <Header/>}
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <PriRoute exact path='/' component={Home} />
                    <PriRoute exact path='/task' component={Task} />
                    <PriRoute exact path='/user' component={User} />
                    <PriRoute exact path='/newPass' component={NewPass} />
                </Switch>
            </div>
        )
    });
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Main />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
