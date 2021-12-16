import './Post.css'
import elonMini from '../../images/elon_mini.jpg'
import likeImg from '../Post/img/like.png'
export default function Post(props){
    return(<div className={"post"}>
        <div className={"post_author"}>
        <img src={elonMini}/>
        <p>Elon Musk</p>  
        <button className={"like"}><img src={likeImg}/></button>
        <p className={"likeCounter"}>0</p>
        </div>
        <p>{props.message}</p>
        
    </div>)
}
