
import { useEffect, useState } from 'react';
import { Motion, spring } from "react-motion";

interface WelcomeAnimationProps {
  onAnimationComplete: () => void;
}

const WelcomeAnimation = ({ onAnimationComplete }: WelcomeAnimationProps) => {
  const [animationState, setAnimationState] = useState<'initial' | 'active' | 'fadeOut' | 'complete'>('initial');

  useEffect(() => {
    // Start animation immediately
    setAnimationState('active');
    
    // Start fade out after 2.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setAnimationState('fadeOut');
    }, 2500);

    // Complete animation after fade out animation is done
    const completeTimer = setTimeout(() => {
      setAnimationState('complete');
      onAnimationComplete();
    }, 4500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  if (animationState === 'complete') return null;

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 bg-hiro-black ${
        animationState === 'fadeOut' ? 'animate-fade-out' : ''
      }`}
      style={{ 
        animationDuration: '2s',
        animationFillMode: 'forwards'
      }}
    >
      <div className="welcome-text text-center">
        <span className="block tracking-widest">WELCOME TO</span>
        <span className="block text-7xl md:text-9xl font-extrabold mt-2">MY WEBSITE</span>
      </div>
      
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full w-full p-8">
          {/* Development & coding images */}
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Coding" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Code" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1559978137-8c560d91e9e1" alt="Minecraft" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479" alt="Minecraft landscape" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206" alt="Dark coding" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713" alt="Code close-up" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479" alt="Minecraft blocks" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Code on laptop" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713" alt="Programming" className="object-cover w-full h-full hover:scale-110 transition-transform duration-5000" />
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5 opacity-30">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-hiro-purple rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeAnimation;
