
import { useEffect, useRef, useState } from 'react';
import { Globe, Code, MessageSquareCode, BookText } from 'lucide-react';

interface Language {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  description: string;
}

const LanguagesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const programmingLanguages: Language[] = [
    {
      name: "JavaScript / TypeScript",
      icon: <Code className="text-hiro-light-purple" />,
      proficiency: 90,
      description: "Frontend & backend development, React ecosystem"
    },
    {
      name: "Java",
      icon: <Code className="text-hiro-light-purple" />,
      proficiency: 85,
      description: "Minecraft plugins, server development"
    },
    {
      name: "Python",
      icon: <Code className="text-hiro-light-purple" />,
      proficiency: 75,
      description: "Automation, data processing, Discord bots"
    },
    {
      name: "HTML/CSS",
      icon: <Code className="text-hiro-light-purple" />,
      proficiency: 95,
      description: "Frontend design, responsive layouts"
    }
  ];

  const spokenLanguages: Language[] = [
    {
      name: "English",
      icon: <Globe className="text-hiro-light-purple" />,
      proficiency: 90,
      description: "Fluent"
    },
    {
      name: "German",
      icon: <Globe className="text-hiro-light-purple" />,
      proficiency: 100,
      description: "Native"
    }
  ];

  return (
    <section id="languages" className="py-20" ref={sectionRef}>
      <div className="hiro-container">
        <div className="text-center mb-12">
          <h2 className={`section-heading ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            Languages
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Communication is key to great development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className={`glass-card p-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} 
            style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquareCode className="text-hiro-purple" size={28} />
              <span className="text-gradient">Programming Languages</span>
            </h3>
            <div className="space-y-6">
              {programmingLanguages.map((lang, index) => (
                <div 
                  key={lang.name}
                  className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-hiro-purple/20 flex items-center justify-center mr-3">
                        {lang.icon}
                      </div>
                      <span className="font-semibold">{lang.name}</span>
                    </div>
                    <span className="text-hiro-light-purple font-bold">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full bg-hiro-purple/10 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-hiro-purple to-hiro-light-purple h-2.5 rounded-full"
                      style={{ 
                        width: `${lang.proficiency}%`,
                        transition: 'width 1s ease-in-out',
                        animationDelay: `${400 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{lang.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spoken Languages */}
          <div className={`glass-card p-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} 
            style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookText className="text-hiro-purple" size={28} />
              <span className="text-gradient">Spoken Languages</span>
            </h3>
            <div className="space-y-6">
              {spokenLanguages.map((lang, index) => (
                <div 
                  key={lang.name}
                  className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-hiro-purple/20 flex items-center justify-center mr-3">
                        {lang.icon}
                      </div>
                      <span className="font-semibold">{lang.name}</span>
                    </div>
                    <span className="text-hiro-light-purple font-bold">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full bg-hiro-purple/10 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-hiro-purple to-hiro-light-purple h-2.5 rounded-full"
                      style={{ 
                        width: `${lang.proficiency}%`,
                        transition: 'width 1s ease-in-out',
                        animationDelay: `${500 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{lang.description}</p>
                </div>
              ))}
            </div>

            <div className={`mt-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Globe size={18} className="text-hiro-purple" /> 
                Language Learning
              </h4>
              <p className="text-muted-foreground">
                Currently exploring new languages to expand my communication skills further.
                I believe that understanding different languages helps in creating more accessible and inclusive applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
