import Message from '../Message/Message'
import './Dialog.css'
import { NavLink, useParams } from 'react-router-dom'
export default function Dialog(props){
    const params = useParams()
    return(
        <div className={"dialog"}>
            {/* <NavLink to={"/dialogs/1"}>Иван Иванов </NavLink> */}
            {props.dialogs[params.dialogId].map((message)=><Message name={message.name} text={message.text}/>)}
            <textarea/>
            <button>Отправить</button>
        </div>
    )
}