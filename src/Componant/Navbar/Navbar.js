import"./Navbar.css"
export default function Navbar () {
    return (
     <div className="main-navbar">
        <div className="nav-heading">
             <p className="heading">MY Portfolio</p>
        </div>
        <div className="navbar-cont">
           <a href="/" className="nav-cont">Home</a>
           <a href="/Skill" className="nav-cont">Skill</a>
           <a href="/Project" className="nav-cont">Projects</a>
           <a href="/About" className="nav-cont">About</a>
           <a href="/Contact" className="nav-cont">Contact</a>

        </div>

      </div>


       

    )

}