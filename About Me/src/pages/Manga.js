import NavBar from "../components/NavBar"
import OnePiece from "../images/OP.png";
import Kingdom from "../images/kingdom.png";
import Opm from "../images/opm.png";
import Kaguya from "../images/kaguya.png";
import Vagabond from "../images/vagabond.png";

export default function Manga() {
  return (
    <>
      <NavBar/>
      <h1 className="h1-title">My Top 5 Manga</h1>

      <div className="box">

      <div className="box-1">
        <div className="sub-box1">
        <img src={OnePiece} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>One Piece</h1>
        <p1>There is nothing to really say about this manga than it's One Piece, it is one of the greatest manga and one of the best story telling in manga.</p1>
        </div>
      </div>

      <div className="box-2">
        <div className="sub-box2">
          <h1>Kingdom</h1>
          <p1>If there is someone that can stand beside on one piece right now it's Kingdom. Kingdom is an action packed manga that is full of war battles in the setting of warring state period of china.</p1>
          </div>
        <div className="sub-box1">
          <img src={Kingdom} className="top-pic"/>
        </div>
      </div>

      <div className="box-3">
        <div className="sub-box1">
        <img src={Opm} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>One Punch Man</h1>
        <p1>The art of this manga is one the best out there and also is one of the best action manga out there.</p1>
        </div>
      </div>

      <div className="box-4">
        <div className="sub-box2">
          <h1>Kaguya-sama Love is War</h1>
          <p1>One of the best modern romance manga that did not take over 300 chapter just for the main character to confess then 5 chapters later is the ending chapter. Aka Akasaka did not only focused on the romance part, but also did really well on the comedy party of the manga and also had a great character development for the main character.</p1>
          </div>
        <div className="sub-box1">
          <img src={Kaguya} className="top-pic"/>
        </div>
      </div>

      <div className="box-5">
        <div className="sub-box1">
        <img src={Vagabond} className="top-pic"/>
        </div>
        <div className="sub-box2">
        <h1>Vagabond</h1>
        <p1>Reading this manga feels like walking in a exibition art. There every chapter in this manga have atleast 1 panel where the art is just so insane that it can be display in the art museum while also being one the best samura theme manga.</p1>
        </div>
      </div>
    </div>
    </>
  )
}
