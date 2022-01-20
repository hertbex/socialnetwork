import './Navbar.css'
import {NavLink} from "react-router-dom";
import Friends from '../Friends/Friends';
export default function Navbar(){
    return(<nav>
    <NavLink to={"/profile"}>Profile</NavLink>
    <NavLink to={"/messages"}>Messages</NavLink>
    <NavLink to={"/users"}>Users</NavLink>
    <Friends/>
    </nav>)
}