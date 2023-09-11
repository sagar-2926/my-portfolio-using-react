import Navbar from "../../Componant/Navbar/Navbar";
import Fotter from "../../Componant/Fotter/Fotter";
import Card from "../../Componant/Card/Card";
import Image1 from "../../Componant/Card/project-1.png"
import Image2 from "../../Componant/Card/project-2.png"
import Image3 from "../../Componant/Card/project-3.png"
import "./Project.css"
export default function Projects (){
 return(
    <>
    < Navbar />
    <div className="project-card" >
       <Card Image={Image1} CardTitle={"Javascript project"} CardDescription={"You can use JavaScript to build projects as start with an easy JavaScript project idea for beginners"} liveDemo={"https://www.google.com"} githubUrl={"https://github.com/sagar-2926/javascript-project-1"}/>
       <Card Image={Image2} CardTitle={"Sweven Homes"} CardDescription={"Online service-based website for designing and decorating your homes with the dreamsight you harbor."} githubUrl={"https://github.com/sagar-2926/SwevenHomes-igcp1-first-group-project"}  /> 
       <Card Image={Image3} CardTitle={"Green hub Nursery"} CardDescription={"The Green Hub Project for Teens is a local community project serving Surrey & Hampshire and surrounding areas. "}githubUrl={"https://github.com/sagar-2926/Green-hub-Nursery"}/>
    </div>
    
    <Fotter />
    </>
 )

}