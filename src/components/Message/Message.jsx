import './Message.css'
import { CSSTransition } from 'react-transition-group';
import {useState} from "react";
export default function Message(props){
    const [inProp, setInProp] = useState(false);
    return(
    <CSSTransition in={inProp} timeout={200} classNames="message">
    <div className={"message"}>
                <p className={"name"}>{props.name}</p>
                <p className={"message__text"}>{props.text}</p>
    </div>
    </CSSTransition>
    )
}