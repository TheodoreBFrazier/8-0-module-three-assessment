import React from "react"; //importing react
import { Link } from "react-router-dom"
import "./NavBar.css"

class NavBar extends React.Component {
    render() {
        return (
            <div >
<nav class="nav-bar">
                <Link to="/">

                    <img className="home-logo"
 src = "https://cdn.dribbble.com/users/2518738/screenshots/5080246/media/06ccda0b7f50b239f56d9c38cd929a41.gif"   
 alt = "Image of a white porsche" />         
 
 </Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
                </nav>
            </div>
        )
    }
}

export default NavBar