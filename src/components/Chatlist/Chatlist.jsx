import Message from '../Message/Message'
import {NavLink} from 'react-router-dom';
import './Chatlist.css'
import {useState} from "react";
import DraggableListItem from "../DraggableListItem/DraggableListItem";
export default function Chatlist(props){
    const [chats, setChats] = useState(props.chats);
    const [dragStartIndex, setdragStartIndex] = useState(null);
    // get index of draged item
    const onDragStart = (index) => setdragStartIndex(index)
    // update list when item dropped
    const onDrop = (dropIndex) => {
        // get draged item
        const dragItem = chats[dragStartIndex]

        // delete draged item in list
        let list = [...chats]
        list.splice(dragStartIndex, 1)

        // update list
        if (dragStartIndex < dropIndex) {
            setChats([
                ...list.slice(0, dropIndex - 1),
                dragItem,
                ...list.slice(dropIndex - 1, list.length)
            ])
        } else {
            setChats([
                ...list.slice(0, dropIndex),
                dragItem,
                ...list.slice(dropIndex, list.length)
            ])
        }
    }
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
            {chats.map( (chat,index)=>{
                return(
                    <DraggableListItem
                        key={chat.id}
                        index={index}
                        onDragStart={(index) => onDragStart(index)}
                        onDrop={(index) => onDrop(index)}
                    >
                        {
                            <NavLink to={"/messages/" + chat.id} >
                                <Message name={chat.name} text={chat.text}/>
                            </NavLink>
                        }
                    </DraggableListItem>
                    
                )
            } )}
            <DraggableListItem
                key={chats.length}
                index={chats.length}
                draggale={false}
                onDrop={(index) => onDrop(index)}
            />
        </div>
    )
}