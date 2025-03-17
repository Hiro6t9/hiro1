
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AppDevSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const appProjects = [
    {
      title: 'MappleHost Mobile',
      description: 'Mobile app for MappleHost service allowing users to manage their hosting services on the go.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      features: ['Server management', 'Performance monitoring', 'Billing and payments', 'Support tickets']
    },
    {
      title: 'GameTracker',
      description: 'App to track gaming statistics, achievements, and leaderboards for multiple platforms.',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      features: ['Cross-platform tracking', 'Achievement hunting', 'Friend leaderboards', 'Game recommendations']
    },
    {
      title: 'StudyBuddy',
      description: 'Productivity app designed for students to organize study schedules and track progress.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      features: ['Task management', 'Study timer', 'Progress tracking', 'Subject organization']
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === appProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? appProjects.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section id="app" className="py-20" ref={sectionRef}>
      <div className="hiro-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            App Development
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Creating intuitive and powerful mobile applications
          </p>
        </div>

        <div 
          className={`relative glass-card p-6 md:p-10 mb-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          <div ref={carouselRef} className="overflow-hidden relative">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {appProjects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-hiro-purple mr-3"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="hiro-button mt-4">
                        View Project
                      </button>
                    </div>
                    
                    <div className="order-1 md:order-2 flex items-center justify-center">
                      <div className="relative w-64 h-[420px] bg-black/40 rounded-3xl overflow-hidden shadow-xl border-8 border-black/60">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide} 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {appProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === index 
                    ? 'bg-hiro-purple w-6' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient">App Development Process</h3>
            
            <div className="space-y-6">
              {[
                {
                  step: 'Research & Planning',
                  description: 'Understand user needs, define features, and create app wireframes',
                  icon: '📝'
                },
                {
                  step: 'Design & Prototyping',
                  description: 'Create UI/UX designs and interactive prototypes for testing',
                  icon: '✏️'
                },
                {
                  step: 'Development',
                  description: 'Build the app using modern frameworks and best practices',
                  icon: '💻'
                },
                {
                  step: 'Testing & Deployment',
                  description: 'Quality assurance testing and app store deployment',
                  icon: '🚀'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-hiro-purple/20 flex items-center justify-center text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.step}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Technologies</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'React Native', level: 80 },
                { name: 'Flutter', level: 70 },
                { name: 'Firebase', level: 85 },
                { name: 'UI/UX Design', level: 75 },
                { name: 'App Testing', level: 70 },
                { name: 'App Store Deployment', level: 80 }
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-hiro-light-purple">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-hiro-purple to-hiro-light-purple rounded-full"
                      style={{ 
                        width: `${tech.level}%`,
                        transition: 'width 1s ease-in-out',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevSection;
