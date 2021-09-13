import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './common/Header'
import HeaderMobile from './common/Header/HeaderMobile'
import Exams from './components/Exams'
import Auth from './components/Auth'

const AppRouter = () => {

    const isMobile = useMediaQuery('(max-width:450px)');

    return (
        <Router>
            {!isMobile ? <Header /> :
                <HeaderMobile />}
            <Switch>
                <Route component={Auth} exact path="/auth" />
                <Route component={Exams} exact path="/exams" />
            </Switch>
        </Router>
    )
}

export default AppRouter