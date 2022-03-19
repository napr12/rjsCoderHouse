import LiA from "./LiA/LiA"
import Svg from "./Svg/Svg"
const NavBar = () =>{
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><Svg/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
        <LiA text="Inicio" />
        <LiA text="Juegos"/>
        <LiA text="Sistemas operativos"/>

        </ul>
      </div>
    </div>
  
  </nav>

)
}

export default NavBar