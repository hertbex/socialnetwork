import Message from '../Message/Message'
import './Dialog.css'
import { NavLink, useParams } from 'react-router-dom'
import store, {SEND_MESSAGE} from "../../data/state";
import React from "react";
export default function Dialog(props){
    const params = useParams()
    const textarea = React.createRef()
    function sendMessage(){
        store.dispatch({type:SEND_MESSAGE,messageText:textarea.current.value, name:"Elon Musk", dialogId:params.dialogId})
        textarea.current.value = ""
    }
    return(
        <div className={"dialog"}>
            {/* <NavLink to={"/dialogs/1"}>Иван Иванов </NavLink> */}
            {props.dialogs[params.dialogId].map((message)=><Message name={message.name} text={message.text} key={message.id}/>)}
            <textarea ref={textarea}/>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    )
}