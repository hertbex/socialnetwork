import Message from '../Message/Message'
import './Dialog.css'
import { NavLink, useParams } from 'react-router-dom'
import React from "react";
import {sendMessageAC} from "../../data/state";
import {connect} from "react-redux";
function Dialog(props){
    const params = useParams()
    const textarea = React.createRef()
    function sendMessage(){
        props.dispatch(sendMessageAC(textarea.current.value, "Elon Musk", params.dialogId))
        textarea.current.value = ""
    }
    return(
        <div className={"dialog"}>
             <NavLink to={"/dialogs/1"}>Иван Иванов </NavLink>
            {props.dialogs[params.dialogId].map((message)=><Message name={message.name} text={message.text} key={message.id}/>)}
            <textarea ref={textarea}/>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default connect(null, mapDispatchToProps)(Dialog)