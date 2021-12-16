import React from "react"; //importing react
import { Link } from "react-router-dom"
import "./NavBar.css"

class NavBar extends React.Component {
    render() {
        return (
            <div >
<nav class="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
                </nav>
            </div>
        )
    }
}

export default NavBar