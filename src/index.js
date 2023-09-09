import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Componant/Navbar/Navbar'
import Fotter from './Componant/Fotter/Fotter'
import Button from './Componant/Button/Button'
import Home from './View/About/Home/Home'
import Card from './View/About/Card/Card'
import About from './View/About/About/About'
import './index.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 < Navbar/>
 <div className="card-container">  
   <Card className="card"/>
   
   <Card className="card" />
   <Card className="card"/>
   <Card className="card"/>
   <Card className="card" />
 </div>
 < Fotter />
 <Button/> 
 </>
);

