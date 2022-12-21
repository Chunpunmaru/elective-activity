import NavBar from "../components/NavBar";
import Monogatari from "../images/monogatari.png";
import Oregairu from "../images/oregairu.png";
import Gintama from "../images/gintama.jpg";
import Konosuba from "../images/konosuba.jpg";
import Log from "../images/log.png";

export default function Anime() {
  return (
    <>
    <NavBar/>
    <h1 className="h1-title">My Top 5 Anime</h1>

    <div className="box">
      <div className="box-1">
        <div className="sub-box1">
        <img src={Gintama} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Gintama</h1>
        <p1>Regardless of not having a great animation and only have a good animation on serious moments, this is still one of the funniest anime I have ever seen</p1>
        </div>
      </div>
      <div className="box-2">
        <div className="sub-box2">
          <h1>Monogatari</h1>
          <p1>This is the epitome of I only understand 70% of it but it is still entertaining and for some reason at the end of arcs it suddenly all make sense </p1>
          </div>
        <div className="sub-box1">
          <img src={Monogatari} className="top-pic"/>
        </div>
      </div>
      
      <div className="box-3">
        <div className="sub-box1">
        <img src={Log} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Log Horizon</h1>
        <p1>Log Horizon is still one of the best isekai out of all the garbage the has came out for a decade and this anime have a very soft spot for me because I grew up playing MMO, and watching this gives me nostalgia on playing MMO's. </p1>
        </div>
      </div>
      <div className="box-4">
        <div className="sub-box2">
          <h1>Konosuba</h1>
          <p1>This anime may not be as funny as gintama, but for some reason Konosuba makes me feel comfy and I feel like I'm just hanging out with my friend.</p1>
        </div>
        <div className="sub-box1">
          <img src={Konosuba} className="top-pic"/>
        </div>
      </div>
      <div className="box-5">
      <div className="sub-box1">
        <img src={Oregairu} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Oregairu</h1>
        <p1>This looks like your another high school setting anime, but this anime is very interesting and deals a lot with social behaviours and society.</p1>
        </div>
      </div>
    </div>

    </>
    
  )
}
