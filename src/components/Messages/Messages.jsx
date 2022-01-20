import Chatlist from '../Chatlist/Chatlist'
import './Messages.css'
import {Route, Routes} from "react-router-dom";
import Dialog from '../Dialog/Dialog'

export default function Messages(props) {
    return (
        <div className={"messages"}>
            <div><Chatlist chats={props.chats}/></div>
            <Routes>
                <Route path="/" element={<h3>Please select dialog.</h3>}/>
                <Route path="/:dialogId" element={<Dialog dialogs={props.dialogs}/>}/>
            </Routes>
        </div>
    )
}