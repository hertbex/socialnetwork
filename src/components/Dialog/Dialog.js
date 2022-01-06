import Message from '../Message/Message'
import './Dialog.css'
import { NavLink } from 'react-router-dom'
export default function Dialog(props){
    return(
        <div className={"dialog"}>
            {/* <NavLink to={"/dialogs/1"}>Иван Иванов </NavLink> */}
            {props.messages.map((message)=><Message name={message.name} text={message.text}/>)}
            <textarea/>
            <button>Send</button>
        </div>
    )
}