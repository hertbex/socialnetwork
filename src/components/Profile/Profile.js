import './Profile.css'
import elon from "../../images/elon.jpg"
import Posts from "../Posts/Posts";


export default function Profile() {
    return (<>
        <div className={"profile"}><img src={elon}/><p>Elon Musk</p></div>
        <Posts/>
    </>)
}