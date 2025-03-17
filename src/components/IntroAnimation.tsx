
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const IntroAnimation = ({ onAnimationComplete }: IntroAnimationProps) => {
  const [animationState, setAnimationState] = useState<'initial' | 'nameShown' | 'complete'>('initial');

  useEffect(() => {
    // Show name
    const nameTimer = setTimeout(() => {
      setAnimationState('nameShown');
    }, 500);

    // Complete animation
    const completeTimer = setTimeout(() => {
      setAnimationState('complete');
      onAnimationComplete();
    }, 3000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  if (animationState === 'complete') return null;

  return (
    <div 
      className={`intro-animation ${
        animationState === 'nameShown' ? 'animate-fade-out' : ''
      }`}
      style={{ 
        animationDelay: '2.5s',
        animationFillMode: 'forwards'
      }}
    >
      <div className="intro-text">
        Hiro
      </div>
    </div>
  );
};

export default IntroAnimation;
