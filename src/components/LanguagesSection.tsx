
import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  FileCode2, 
  Terminal, 
  Globe, 
  Laptop,
  Monitor,
  Boxes,
  Server,
  Library,
  Database,
  Layout
} from 'lucide-react';

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
      name: "React & React Ecosystem",
      icon: <Boxes className="text-hiro-light-purple" />,
      proficiency: 88,
      description: "React, React Router, Hooks, Context API"
    },
    {
      name: "Tailwind CSS",
      icon: <Layout className="text-hiro-light-purple" />,
      proficiency: 92,
      description: "Utility-first CSS framework for responsive designs"
    },
    {
      name: "Java",
      icon: <FileCode2 className="text-hiro-light-purple" />,
      proficiency: 85,
      description: "Minecraft plugins, server development"
    },
    {
      name: "Python",
      icon: <Terminal className="text-hiro-light-purple" />,
      proficiency: 75,
      description: "Automation, data processing, Discord bots"
    },
    {
      name: "HTML/CSS",
      icon: <Monitor className="text-hiro-light-purple" />,
      proficiency: 95,
      description: "Frontend design, responsive layouts"
    },
    {
      name: "Node.js & Express",
      icon: <Server className="text-hiro-light-purple" />,
      proficiency: 82,
      description: "Backend API development, server-side applications"
    },
    {
      name: "SQL & Database Design",
      icon: <Database className="text-hiro-light-purple" />,
      proficiency: 78,
      description: "Database management, query optimization"
    },
    {
      name: "UI Libraries",
      icon: <Library className="text-hiro-light-purple" />,
      proficiency: 88,
      description: "shadcn/ui, Material UI, Bootstrap"
    }
  ];

  return (
    <section id="languages" className="py-20" ref={sectionRef}>
      <div className="hiro-container">
        <div className="text-center mb-12">
          <h2 className={`section-heading ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            Programming Languages & Technologies
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            The tools I use to bring ideas to life
          </p>
        </div>

        <div className="glass-card p-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}" 
          style={{ animationDelay: '200ms' }}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="text-hiro-purple" size={28} />
            <span className="text-gradient">Skills & Technologies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmingLanguages.map((lang, index) => (
              <div 
                key={lang.name}
                className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${300 + index * 70}ms` }}
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
                      animationDelay: `${400 + index * 70}ms`
                    }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{lang.description}</p>
              </div>
            ))}
          </div>

          <div className={`mt-10 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Laptop size={18} className="text-hiro-purple" /> 
              <span className="text-gradient">This Website Stack</span>
            </h4>
            <p className="text-muted-foreground mb-4">
              This portfolio was built using modern web technologies for optimal performance and user experience:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React", 
                "TypeScript", 
                "Tailwind CSS", 
                "shadcn/ui", 
                "Vite", 
                "React Router",
                "Tanstack Query",
                "Lucide Icons"
              ].map((tech) => (
                <span 
                  key={tech}
                  className="bg-hiro-purple/10 text-hiro-light-purple px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
