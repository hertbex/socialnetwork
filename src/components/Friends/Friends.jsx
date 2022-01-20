import './Friends.css'
import bill from '../Friends/img/bill.png'
import petr from '../Friends/img/petr.png'
import arny from '../Friends/img/arny.png'
export default function Friends(){
    return(
    <div className={"friends"}>
        <div className={"friend"}>
            <img src={bill}></img>
            <p>Bill</p>
        </div>
        <div className={"friend"}>
            <img src={petr}></img>
            <p>Petr</p>
        </div>
        <div className={"friend"}>
            <img src={arny}></img>
            <p>Arny</p>
        </div>
    </div>)
}