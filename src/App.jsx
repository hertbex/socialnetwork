import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

function App(props){

    return (
        <Router>
            <div className={"container"}>
                <Header/>
                <Navbar/>
                <main>
                    <Routes>
                        <Route path={"*"} element={<Profile posts={props.state.posts}/>}/>
                        <Route path={"/messages/*"} element={<Messages chats={props.state.chats} dialogs={props.state.dialogs}/>}/>
                        <Route path={"/profile"} element={<Profile posts={props.state.posts}/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
