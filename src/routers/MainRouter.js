import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AboutScreen } from '../components/AboutScreen';
import { HomeScreen } from '../components/HomeScreen';
import { ContactScreen } from '../components/ContactScreen';

export const MainRouter = () => {

    return (
        <>
            <Router>
                <div className="container container-fluid">
                    <nav className="nav__main">

                        <ul className="nav__ul">




                            <Link to="/">
                                <button className="nav__button">
                                    <i className="nav__icon fas fa-home"></i>                            </button>
                            </Link>

                            <Link to="/about">
                                <button className="nav__button">
                                    <i className=" nav__icon fas fa-id-card-alt"></i>                                </button>
                            </Link>

                            <Link to="/contact">
                                <button className="nav__button">
                                    <i className=" nav__icon far fa-envelope"></i>                            </button>
                            </Link>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <AboutScreen />
                        </Route>
                        <Route path="/contact">
                            <ContactScreen />
                        </Route>
                        <Route path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                </div>
            </Router>

        </>
    );
}