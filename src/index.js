import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
// import Navbar from './Componant/Navbar/Navbar'
// import Fotter from './Componant/Fotter/Fotter'
//  import Button from './Componant/Button/Button'
import Home from './View/About/Home/Home'
// import Card from './View/About/Card/Card'
import About from './View/About/About/About'
import Skill from './View/Skill/skill';
import Project from './View/Project/Project';
import Contact from './View/Contact/Contact';
import './index.css';

const router = createBrowserRouter([
  {path: "/",
  element : <Home />,   
},
{
  path: "/Skill",
  element:<Skill />, 
},
{
  path :"/Project",
  element:< Project />, 
},
{ 
  path :"/About",
  element :< About />, 
},
{
  path :"/Contact",
  element :<Contact />
}


]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <RouterProvider router={router} />
 </>
);

