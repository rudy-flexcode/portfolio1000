import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../component/carousel.css';

interface CarouselProps {
  // Les éléments à afficher dans le carrousel
  items: {
    id: number;
    image: string;
   
    
  }[];
  // Durée entre les transitions automatiques (en ms)
  autoPlayInterval?: number;
  // Hauteur personnalisée (optionnelle)
  height?: string;
  // Activer/désactiver le défilement automatique
  autoPlay?: boolean;
  // Pause au survol
  pauseOnHover?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlayInterval = 5000,
  height = '400px',
  autoPlay = true,
  pauseOnHover = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Gestion du défilement automatique
  const resetTimeout = useCallback(() => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    resetTimeout();
    
    autoPlayRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoPlayInterval);

    return () => {
      resetTimeout();
    };
  }, [activeIndex, autoPlayInterval, items.length, resetTimeout, autoPlay, isPaused]);

  // Navigation vers la diapositive précédente
  const goToPrevious = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  }, [items.length]);

  // Navigation vers la diapositive suivante
  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  // Gestion des événements tactiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    containerRef.current?.addEventListener('keydown', handleKeyDown);
    
    return () => {
      containerRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  // Fonctions pour mettre en pause le défilement automatique
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div 
      className="carousel-container"
      style={{ height }}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Images carousel"
    >
      <div 
        className="carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="carousel-item"
            aria-roledescription="slide"
          
            aria-hidden={activeIndex !== index}
          >
            <img 
              src={item.image} 
             
              loading={index === 0 ? "eager" : "lazy"} // Optimisation de chargement
            />
          
              <div className="carousel-caption">
              
             
              </div>
            &rbrace;
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={goToPrevious}
        className="carousel-button prev-button"
        aria-label="Diapositive précédente"
        type="button"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="carousel-button next-button"
        aria-label="Diapositive suivante"
        type="button"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicateurs */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
            aria-current={index === activeIndex}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;