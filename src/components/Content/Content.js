import './Content.css'
import elon from "../../images/elon.jpg"
import Posts from "../Posts/Posts";
import Messages from "../Messages/Messages";


export default function Content() {
    return (<main>
        <div className={"flex"}><img src={elon}/><p>Elon Musk</p></div>
        <Posts/>
        <Messages/>
    </main>)
}