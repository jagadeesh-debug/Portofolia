import  BotImage from './bot.jpg';
import './about.css'
function About() {
    return (
        <div style={{
            // border:'2px solid black',
            //height: '30em',
            //width: '50rem'
        }}>
            <div className='d1'>
            <center>
            <h3 style={{fontSize:'3rem'}}>About</h3>
            </center>
            <div className='k'>
                <img src={BotImage} alt="Alien" className='ll1'/>
            <p className='j'>
               <ul className='hS'>
                <li>I am a friend of Nikhil who say the hello in a perfect manner</li>
                <li>Sampreeth is friend of mine who encourage me</li>
                <li>Nischal(gym bro)#manOfSteel he will kick you if u dont allow me </li>
                <li>Idiot is always in search of someone whom she dont know</li>
                <li>chaitanya is a front_end developer who helps me in ui</li>
                <li>Jagruthi is a back_end developer who helps in server side scripting</li>
               </ul>
            </p>
            </div>
        </div>
        </div>
    );
}
export default About;
