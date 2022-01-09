import Chatlist from '../Chatlist/Chatlist'
import './Messages.css'
import state from "../../state.js"
import { Route, Routes } from "react-router-dom";
import Dialog from '../Dialog/Dialog'
let chats = state.chats
let dialogs = state.dialogs
export default function Messages() {
    return (
        <div className={"messages"}>
            <div><Chatlist chats={chats} /></div>
            <div>
                <Routes>
                    <Route path="/"  element={<h3>Please select dialog.</h3>}/>
                    <Route path="/:dialogId" element={<Dialog dialogs={state.dialogs}/>} />
                </Routes>

            </div>
        </div>
    )
}