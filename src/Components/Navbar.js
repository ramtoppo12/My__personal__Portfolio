import React from "react";
import logo from "../Images/logo.png";
import "./App.css"

function App(){
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

        
  <a className="navbar-brand text-white" href="#">
      <img src={logo} className="logo" alt="My logo"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Servies</a>
      </li><li className="nav-item">
        <a className="nav-link" href="#">Experiance</a>
      </li><li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li><li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li><li className="nav-item">
        <a className="nav-link" href="#">Help!</a>
      </li>
     
    </ul>
   
  </div>
  </div>
</nav>
        </>
    )
}
export default App;