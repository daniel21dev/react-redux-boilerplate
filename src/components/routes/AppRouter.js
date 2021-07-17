import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Home } from '../Home';
import { Page2 } from '../Page2';


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/page2' component={ Page2 } />

                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}
