import Message from '../Message/Message'
import {NavLink} from 'react-router-dom';
import './Chatlist.css'
export default function Chatlist(props){
    return(
        <div className={"Chatlist"}>
            {/* <div className={"Chat"}>
                <Message name={props.chats[0].name} text={props.chats[0].text}/>
            </div>
            <div className={"Chat"}>
                <Message name={props.chats[1].name} text={props.chats[1].text}/>
            </div>
            <div className={"Chat"}>
                <Message name={props.chats[2].name} text={props.chats[3].text}/>
            </div> */}
            {props.chats.map( (chat)=>{
                return(
                    <NavLink to={"/messages/" + chat.id} key={chat.id}>
                        <Message name={chat.name} text={chat.text}/>
                    </NavLink>
                )
            } )}
        </div>
    )
}