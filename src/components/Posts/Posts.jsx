import './Posts.css'
import Post from "../Post/Post";
import React from 'react'
import store from '../../data/state.js'
import renderTree from '../../render';
// store.setRenderTree(renderTree)
export default function Posts(props){
    const input = React.createRef()
    const button = React.createRef()
    function addPost(){
        store.dispatch({type:"ADD_POST",postText:input.current.value, postAuthor:"Elon Musk"})
        input.current.value = ""
        // alert(input.current.value)
    }
    return(<div className={"posts"}>
        <h2>My posts</h2>
        <div className={"posting"}>
            <input ref={input} placeholder={"enter the post"}/>
            <button ref={button} onClick={addPost}>Add post</button>
        </div>
        {
        //     [
        //     (<Post message={"ghbdtn"} author={"Vladimir"} key={6}/>),     
        //     (<Post message={"ку"} author={"Alex"} key={7}/>),     
        // ]
        props.posts.map(
            (post)=><Post message={post.message} author={post.author} key={post.id}/>
            ) 
        }
        
    </div>)
}
