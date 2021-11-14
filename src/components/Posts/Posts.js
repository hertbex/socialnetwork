import './Posts.css'
import Post from "../Post/Post";

export default function Posts(){
    return(<div className={"posts"}>
        <h2>My posts</h2>
        <div className={"posting"}>
            <input placeholder={"enter the post"}/>
            <button>Add post</button>
        </div>
        <Post message={"text"} author={"Elon musk"}/>
        <Post message={"1234"} author={"Elan mask"}/>
        <Post message={"abcd"} author={"Elon maks"}/>
    </div>)
}