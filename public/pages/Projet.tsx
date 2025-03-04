import Carousel from '../component/Carousel';
import cat from '../photo/cat.png'
import reconnect from '../photo/reconnect.png'
import vroom from '../photo/vroom.png'
import film from '../photo/film.png'
import { Link } from 'react-router-dom'
const carousel = () => {
  const carouselItems = [
    {
      id: 1,
      image: reconnect,
      title: "Titre 1",
      description: "Description du premier slide"
    },
    {
      id: 2,
      image: cat,
      title: "Titre 2",
      description: "Description du deuxième slide"
    },
    {
      id: 3,
      image: vroom,
      title: "Titre 3",
      description: "Description du troisième slide"
    },
    {
        id: 4,
        image: film,
        title: "Titre 4",
        description: "Description du troisième slide"
      }
  ];

  return (
    <div className="app">
       <Link className='button-85' to='/'>accueil</Link> 
      <h1>Mes projets</h1>
      <Carousel 
        items={carouselItems} 
        autoPlayInterval={2000} 
        height="400px" 
      />
    </div>
  );
};
export default carousel;
