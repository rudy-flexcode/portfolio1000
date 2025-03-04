import './App.css'
import photo2 from '../public/photo/photo2.jpg'
import moitransp from '../public/photo/moitransp.png'
import express from "../public/photo/express.png"
import git from "../public/photo/git.png"
import node from "../public/photo/node.png"
import react from "../public/photo/react.png"
import github from "../public/photo/github.png"
import js from "../public/photo/js.png"
import ts from "../public/photo/ts.png"
import { Link } from 'react-router-dom'
function App() {
 

  return (
    <>
    
      <header className='header'>
        <img 
          src={moitransp} 
          alt="Logo"
          className="logo" 
        />
        <h1 className="h1">Développeur web</h1>
      </header>

      <main>
      <img 
          src={photo2} 
          alt=""
          className="photo2" 
        />
       
       
     
       <div className='but'>
        <Link className='button-85' to="/projet">Projets</Link>
        <Link className='button-85' to="/contact">Contact</Link>
        <Link className='button-85' to="/about">A propos</Link>
       </div>
      
        <h2 className='h2'>Salut ...</h2>

        <p className='p'>Moi c'est rudy, de l'ile de la Réunion .</p>
        <p className='p2'>Développeur web fullstack junior passionné par la création d'expériences numériques intuitives et performantes. </p>
      </main>
       
      <div className='framework'>
        <img src={github} alt="" />
        <img src={git} alt="" />
        <img src={express} alt="" />
        <img src={node} alt="" />
        <img src={ts} alt="" />
        <img src={react} alt="" />
        <img src={js} alt="" />
      </div>
     
        
     <footer>
        <p className='p3'>© 2025 Rudy - Tous droits réservés</p>
     </footer>
      
      
   
    </>
  )
}

export default App
