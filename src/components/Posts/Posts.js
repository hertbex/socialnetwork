import './Posts.css'
import Post from "../Post/Post";
import state from "../../state.js"
import React from 'react'
import renderTree from '../../render';
let posts = state.posts
let input = React.createRef()
let button = React.createRef()
function addPost(){
    let post = {message:input.current.value, author:"Elon Musk", id:++state.postsLastId}
    console.dir(post)
    posts.unshift(post)
    input.current.value = ""
    renderTree()
    // alert(input.current.value)
}
export default function Posts(){
    return(<div className={"posts"}>
        <h2>My posts</h2>
        <div className={"posting"}>
            <input ref={input} placeholder={"enter the post"}/>
            <button ref={button} onClick={addPost}>Add post</button>
        </div>
        {
        // [<Post/>, <Post/>]
        posts.map(
            (post)=><Post message={post.message} author={post.author} key={post.id}/>
            ) 
        }
        
    </div>)
}
