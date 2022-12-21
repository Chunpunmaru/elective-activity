import NavBar from "../components/NavBar";
import Hollow from "../images/hollow.png";
import Persona from "../images/p4.png";
import Stardew from "../images/stardew.png";
import Tocs from "../images/tocs.png";
import Undertale from "../images/undertale.png";

export default function Games() {
  return (
    <>
      <NavBar/>
      <h1 className="h1-title">My Top 5 Games</h1>

      <div className="box">

      <div className="box-1">
        <div className="sub-box1">
        <img src={Hollow} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Hollow Knight</h1>
        <p1>This game is my first metroidvania game and also ruined all the other metroidvania games for me. Every time I look at other metroidvania games it looks very slow and just a sub par to Hollow Knight.</p1>
        </div>
      </div>

      <div className="box-2">
        <div className="sub-box2">
          <h1>Persona 4</h1>
          <p1>Best one of the best JRPG while also having the best soundtrack.</p1>
          </div>
        <div className="sub-box1">
          <img src={Persona} className="top-pic"/>
        </div>
      </div>

      <div className="box-3">
        <div className="sub-box1">
        <img src={Stardew} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Stardew Valley</h1>
        <p1>I had only played 1 Harvest Moon on the GBA and did not really understand it well. Stardew Valley is heavily inspired in Harvest Moon while also not being completly rip-off version of it. Stardew is one of the comfiest games out there and a game that you can just play on the side while watching youtube or anime since the game is not that intense.</p1>
        </div>
      </div>

      <div className="box-4">
        <div className="sub-box2">
          <h1>Trails of Cold Steel</h1>
          <p1>This JRPG is very long, I mean VERY LONG. This game world building is insane and one of the reason why this game is so long, I only fished 3 parts out of the 9+ games this series have and it alreay took me 400 hours. Still this is still a very solid JRPG and very underated one.</p1>
          </div>
        <div className="sub-box1">
          <img src={Tocs} className="top-pic"/>
        </div>
      </div>

      <div className="box-5">
        <div className="sub-box1">
        <img src={Undertale} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Undertale</h1>
        <p1>Don't get fooled on the graphics of this game. This is one of the best indie games out there and have one of the most iconic video game soundtrack the megalovania.</p1>
        </div>
      </div>

      </div>
    </>
    
  )
}
