
import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, image, tags = [], link, delay = 0 }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay based on the card's position
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`hiro-card p-6 h-full flex flex-col ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => link && window.open(link, '_blank')}
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-hiro-purple/10 text-hiro-light-purple px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
