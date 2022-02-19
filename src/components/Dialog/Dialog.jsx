import Message from '../Message/Message'
import './Dialog.css'
import { NavLink, useParams } from 'react-router-dom'
import React from "react";
import {sendMessageAC} from "../../data/state";
import {connect} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";
function Dialog(props){
    const params = useParams()
    const textarea = React.createRef()
    function sendMessage(){
        props.dispatch(sendMessageAC(textarea.current.value, "Elon Musk", params.dialogId))
        textarea.current.value = ""
    }
    return(
        <div><NavLink to={"/dialogs/1"} key={"NavLink"}>Иван Иванов </NavLink>
            <TransitionGroup component={"div"} className={"dialog"} key={"TransitionGroup"}>
                {props.dialogs[params.dialogId].map((message) =>
                    <CSSTransition timeout={2000} classNames="message" key={props.key}>
                        <Message name={message.name} text={message.text} key={message.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
            <textarea ref={textarea} key={"textarea"}/>
            <button onClick={sendMessage} key={"button"}>Отправить</button>
        </div>
        
    )
}
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default connect(null, mapDispatchToProps)(Dialog)