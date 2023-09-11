import Navbar  from "../../../Componant/Navbar/Navbar";
// import Fotter from "../../../Componant/Fotter/Fotter";
// import Card from "../../../Componant/Card/Card";
import Sagar from './IMG_20220327_220311_464.jpg'
import "./Home.css"
export default function Home (){
return(
    <>
    <Navbar />
    <div className="card-container">
        <div className="card-text">
           <p className="text-A">
            HI,I am <span className="text-B"> Sagar Wandile </span> <br></br>
            A Passionate Web Developer from <span className="text-B">India</span> <br></br>
           <span className="text-B"> MERN Stack Developer </span>
           </p>
        </div>
        <div className="Homepage-img">
        <img className ="img-1" src={Sagar}/>
        </div>
    </div>
        
    </>
)

}