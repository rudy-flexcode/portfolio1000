import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div>
      <div className='but666'><Link className='button-85' to='/'>accueil</Link></div>
      <h1>Développeur Web Fullstack Junior</h1>
      <p>
        Passionné par le développement web et l'innovation, j'ai récemment complété avec succès un bootcamp intensif à la <strong>Wild Code School</strong> en 2024. Fort de cette expérience immersive, j'ai acquis une solide maîtrise des technologies de développement web modernes, me permettant de concevoir et de développer des applications web robustes et performantes.
      </p>
      <p><strong>Technologies et outils maîtrisés :</strong></p>
      <ul>
        <li><strong>Front-end :</strong> React avec Vite, TypeScript, JavaScript, Figma, Excalidraw</li>
        <li><strong>Back-end :</strong> Express, Node.js, MongoDB, Prisma, MySQL</li>
        <li><strong>Outils de collaboration et de versioning :</strong> Git, GitHub</li>
      </ul>
      <p>
        Au cours de mon parcours, j'ai eu l'opportunité de travailler sur des projets variés, allant de la conception de maquettes interactives à la mise en place d'architectures serveur optimisées. Mon approche est centrée sur l'utilisateur, cherchant à créer des interfaces intuitives et réactives qui améliorent l'expérience globale.
      </p>
      
      <p>
        Je suis constamment à la recherche de nouveaux défis et d'opportunités pour approfondir mes compétences et contribuer à des projets innovants. Mon objectif est de rejoindre une équipe dynamique où je pourrai mettre à profit mes connaissances techniques tout en continuant à apprendre et à évoluer dans le domaine du développement web.
      </p>
    </div>
  );
}

export default About;