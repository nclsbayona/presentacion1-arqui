import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './home';
import User from './details';
const Webpages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path = "/person/:id" component = {User} />
            </Routes>
        </Router>
    );
};
export default Webpages;