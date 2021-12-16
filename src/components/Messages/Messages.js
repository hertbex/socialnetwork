import Chatlist from '../Chatlist/Chatlist'
import './Messages.css'
import state from "../../state.js"
import Dialog from '../Dialog/Dialog'
let chats = state.chats
let dialogs = state.dialogs
export default function Messages(){
    return(
        <div className={"messages"}>
        <div><Chatlist chats={chats}/></div> 
        <div><Dialog messages={dialogs[0]}/></div>
        </div>
    )
}