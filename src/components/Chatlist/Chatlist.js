import Message from '../Message/Message'
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
                    <Message name={chat.name} text={chat.text} key={chat.id}/>
                )
            } )}
        </div>
    )
}