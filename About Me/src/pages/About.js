import NavBar from '../components/NavBar';
import Profpic from '../images/profile-pic.jpg'
export default function About() {
  return (
    <>
      <NavBar/>
      <div className='about-flex'>
        
        <div className='about-pic'>
          <img src={Profpic}/>
          <h1>Justin Louise Ferdes</h1>
        </div>
        <div className='about-stats'>
          <h1>Character Stats and Info</h1>
          <h3>Name: Justin Louise Ferdes &emsp; Age: 20 &emsp; Date of birth: February 1, 2002 &emsp; Nationality: Filipino</h3>
          <br></br>
          <h3>Family Members:</h3>
          <h5>Alma Ferdes</h5>
          <h5>Ferdinand Ferdes</h5>
          <h5>John Lennox Ferdes</h5>
          <br></br>
          <h3>Education:</h3>
          <h5>Currently Taking Bachelor Science of Computer Science</h5>
          <br></br>
          <h3>Something About myself</h3>
          <h5>I'm very much an indoor person and link to play games and watch anime. I take every chances I can to not go outside to the point that I have a streak that I have not been outside of the house for more than 5 months and just broke my steak recently because I HAVE now to go outside as face to face classes is now starting.</h5>
        </div>
      </div>
    </> 
  )
}
