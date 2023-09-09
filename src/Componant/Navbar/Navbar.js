import { Link } from "react-router-dom"
import"./Navbar.css"
export default function Navbar () {
    return (
     <div className="main-navbar">
        <div className="nav-heading">
             <p className="heading">MY Portfolio</p>
        </div>
        <div className="navbar-cont">
           <Link to="/" className="nav-cont">Home</Link>
           <Link to="/Skill" className="nav-cont">Skill</Link>
           <Link to="/Project" className="nav-cont">Projects</Link>
           <Link to="/About" className="nav-cont">About</Link>
           <Link to="/Contact" className="nav-cont">Contact</Link>

        </div>

      </div>


       

    )

}