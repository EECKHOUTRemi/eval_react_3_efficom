import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import Home from "../Home/Home";

export default function Layout(){

    return(
        <div className="layout">
            <div className='navbar'>
                <div className="left-bar bar">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/items'>Items</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}