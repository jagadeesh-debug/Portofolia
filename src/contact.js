import './contact.css';
import Image from './k.jpg'
function Contact() {
    return (<div>
        <div className='hj'>
            <center>
            <h2 className='sp'>Contact Mee</h2></center>
            <div className='lj'>
                <p className='kk'>
                    At Present I am not giving my detials becuase i am not much aware of backend to make use of chat api </p>
                <img src={Image} alt='' className='lol' />
            </div>
        </div>
    </div>
    )
}
export default Contact;