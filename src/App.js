import React from 'react';
import './style.css';
import myImage from "./me1.png";

function App() {
  return ( 
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
    < h1 className="title red">My title</h1>
    <br/>
  <img src="/me.jpg" alt="" />;
  <img src={myImage} alt="" />;

   
  </div>    ) } 
       

export default App;
