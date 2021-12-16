import Chatlist from '../Chatlist/Chatlist'
import './Messages.css'
import state from "../../state.js"
import Dialog from '../Dialog/Dialog'
import React from "react";
import {useParams} from "react-router-dom";

let chats = state.chats
let dialogs = state.dialogs
export default function Messages(){
    let { dialogId } = useParams();
    return(
        <div className={"messages"}>
        <div><Chatlist chats={chats}/></div> 
        <div><Dialog messages={dialogs[dialogId]}/></div>
        </div>
    )
}