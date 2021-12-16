import './Message.css'
export default function Message(props){
    return(
    <div className={"message"}>
                <p className={"name"}>{props.name}</p>
                <p className={"message__text"}>{props.text}</p>
    </div>
    )
}