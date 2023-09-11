import "./Card.css";
import Button from './../../Componant/Button/Button'

export default function Card ({Image, CardTitle, CardDescription,liveDemo,githubUrl}) { 
    return (
        <>
        <div className="Project-card" >

          <div className="card-img">
          <img className="img" src={Image}/>
          </div>
          <div className="card-driscription">
            <p className="card-heading">
              {CardTitle}
             </p>
             <p className="card-heading-2">
               {CardDescription}
             </p>
          </div>
         <div className="Button-container">
          <a href={liveDemo}>
            <Button />
          </a>
          <a href={githubUrl}>
            <Button/>
          </a>
         </div>
          
        </div>
        </> 
)
      
}