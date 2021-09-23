import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './common/Header'
import HeaderMobile from './common/Header/HeaderMobile'
import Exams from './components/Exams'
import Auth from './components/Auth'
import Common from './common'

const theme = createTheme({
    palette: {
        primary: {
            main: '#006C33'
        },
        secondary: {
            main: '#FF7901'
        },
        accent: {
            main: '#414142'
        },
        error: {
            main: '#f44336'
        }
    }
});

const AppRouter = () => {

    const isMobile = useMediaQuery('(max-width:450px)');

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                {!isMobile ? <Header /> :
                    <HeaderMobile />}
                <Switch>
                    <Route component={Auth} exact path="/auth" />
                    <Route component={Exams} exact path="/exercises" />
                </Switch>
                <Common.BottomSheet />
            </Router>
        </MuiThemeProvider>
    )
}

export default AppRouter