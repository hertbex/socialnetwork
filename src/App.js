import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import React from "react";
import {useRouteMatch} from "react-router-dom";


function App() {
    let match = useRouteMatch();
    return (
        <Router>
            <div className={"container"}>
                <Header/>
                <Navbar/>
                <main>
                    <Switch>
                        <Route path={"*"} component={<Profile/>}/>
                        <Route path={`${match.path}/:dialogId`}>
                        <Messages/>
                        </Route>
                        <Route path={"/profile"} component={<Profile/>}/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
