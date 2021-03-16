import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Book from './Book';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><App/></Route>
                <Route exact path="/book"></Route>
                <Route exact path="/book/:id"><Book/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
