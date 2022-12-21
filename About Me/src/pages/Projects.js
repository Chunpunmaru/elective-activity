import NavBar from "../components/NavBar";
import Dental from "../images/dental.png";
import Travel from "../images/travel.png";
import Dental2 from "../images/dental2.png";


export default function Projects() {
  return (
    <>
    <NavBar/>
    <h1 className="h1-title">Projects</h1>

    <div className="box">
      <div className="box-1">
        <div className="sub-box1">
        <img src={Dental} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Dental Reservation Front-End</h1>
        <p1>This is my first front-end website I made back when I was 1st year college and also serve as a project for Sir Reynaldo.</p1>
        </div>
        </div>

        <div className="box-2">
        <div className="sub-box2">
          <h1>Dental Reservation System</h1>
          <p1>My first group project, this is an php web application for dental Reservation. </p1>
          </div>
        <div className="sub-box1">
          <img src={Dental2} className="top-pic"/>
        </div>
      </div>

      <div className="box-3">
        <div className="sub-box1">
        <img src={Travel} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Travel With Us</h1>
        <p1>My another PHP website, a website use for reserving vacation spots within the Olongapo City and Zambales.</p1>
        </div>
        </div>

    </div>
    </>   
  )
}
