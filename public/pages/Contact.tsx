import {Link} from 'react-router-dom'
import "../pages/contact.css"


function Contact() {
    return (
        
        <div className='contact'>
             <Link className='button-85' to='/'>accueil</Link>
        <h1 className='h1contact'>Contact</h1>
       
       <p className='pcontact'>rudydev974@gmail.com</p>


        </div>
    )
}
export default Contact