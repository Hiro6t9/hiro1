
import { useState, useEffect, lazy, Suspense } from 'react';
import Header from '../components/Header';
import IntroAnimation from '../components/IntroAnimation';
import AboutSection from '../components/AboutSection';
import DiscordSection from '../components/DiscordSection';
import LanguagesSection from '../components/LanguagesSection';
import { ThemeProvider } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';
import WelcomeAnimation from '../components/WelcomeAnimation';
import BackgroundMusic from '../components/BackgroundMusic';
import { Skeleton } from '@/components/ui/skeleton';

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Skeleton className="h-64 rounded-xl" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    </div>
  </div>
);

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

    // Preload images
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
        'https://images.unsplash.com/photo-1559978137-8c560d91e9e1'
      ];

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });

      // Mark as loaded
      setIsLoaded(true);
    };

    preloadImages();
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

      <div className="min-h-screen dark:bg-gradient-to-b dark:from-hiro-black dark:to-hiro-dark-gray bg-gradient-to-b from-white to-gray-100">
        <Header />
        
        <main id="home" className="pt-20">
          <Suspense fallback={<LoadingFallback />}>
            <AboutSection />
            <div className="section-separator" />
            <LanguagesSection />
            <div className="section-separator" />
            <DiscordSection />
          </Suspense>
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
            className="fixed bottom-8 right-8 p-3 rounded-full bg-hiro-purple text-white shadow-lg hover:bg-hiro-dark-purple transition-all duration-300 animate-fade-in backdrop-blur-sm"
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
