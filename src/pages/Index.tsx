import { useState, useEffect } from 'react';
import Header from '../components/Header';
import IntroAnimation from '../components/IntroAnimation';
import AboutSection from '../components/AboutSection';
import DiscordSection from '../components/DiscordSection';
import { ThemeProvider } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';
import WelcomeAnimation from '../components/WelcomeAnimation';
import BackgroundMusic from '../components/BackgroundMusic';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleAnimationComplete = () => {
    setShowIntro(false);
    setShowWelcome(true);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    // Disable scrolling during intro animation
    document.body.style.overflow = 'hidden';

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      {showIntro && <IntroAnimation onAnimationComplete={handleAnimationComplete} />}
      {!showIntro && showWelcome && <WelcomeAnimation onAnimationComplete={handleWelcomeComplete} />}

      <div className="min-h-screen dark:bg-hiro-black bg-gradient-to-b from-white to-gray-100 dark:from-hiro-black dark:to-hiro-dark-gray">
        <Header />
        
        <main id="home" className="pt-20">
          <AboutSection />
          <div className="section-separator" />
          <DiscordSection />
        </main>

        <footer className="py-10 border-t border-white/5">
          <div className="hiro-container text-center">
            <p className="text-gradient font-bold text-xl mb-2">Hiro</p>
            <p className="text-muted-foreground">
              Web Developer | Minecraft Developer | Discord Bot Developer
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hiro. All rights reserved.
            </div>
          </div>
        </footer>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-hiro-purple text-white shadow-lg hover:bg-hiro-dark-purple transition-all duration-300 animate-fade-in"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
      
      <BackgroundMusic />
    </ThemeProvider>
  );
};

export default Index;
