import './Post.css'
import elonMini from '../../images/elon_mini.jpg'
export default function Post(props){
    return(<div className={"post"}>
        <img src={elonMini}/>
        <p>Elon Musk</p>
        <p>{props.message}</p>
    </div>)
}