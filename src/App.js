import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import Nav from "./components/nav";
import Details from "./components/Details";


export function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/:id" exact component={Details}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
