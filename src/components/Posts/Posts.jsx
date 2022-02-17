import './Posts.css'
import Post from "../Post/Post";
import React from 'react'
// import store, {ADD_POST, addPostAC} from '../../data/state.js'
// import renderTree from '../../render';
import {connect} from "react-redux";
import {addPostAC} from "../../data/state";
// store.setRenderTree(renderTree)
function Posts(props){

    const input = React.createRef()
    const button = React.createRef()
    function addPost(){
        // store.dispatch(addPostAC(input.current.value,"Elon Musk"))
        props.dispatch(addPostAC(input.current.value, "Elon Musk"))
        input.current.value = ""
        // alert(input.current.value)
    }
    console.log(props)
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

const mapStateToProps = state => {
    return{
        posts: state.postReducer.posts
    }
}
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
    })

export default connect(mapStateToProps, mapDispatchToProps)(Posts)