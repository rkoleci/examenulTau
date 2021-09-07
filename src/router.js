import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Header from './common/Header'
import Exams from './components/Exams'
import Auth from './components/Auth'

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route component={Auth} exact path="/auth" />
                <Route component={Exams} exact path="/exams" />
            </Switch>
        </Router>
    )
}

export default AppRouter