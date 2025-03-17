
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const MinecraftSection = () => {
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

  const projects = [
    {
      title: 'Mineverse',
      description: 'A flagship Minecraft server with custom plugins, game modes, and a thriving community.',
      tags: ['Java', 'Spigot API', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1632899365336-c81f9ecc4c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Economy Plugin',
      description: 'A comprehensive economy system for Minecraft servers with shops, bank accounts, and player markets.',
      tags: ['Java', 'Bukkit API', 'Player Data'],
      image: 'https://images.unsplash.com/photo-1611997608266-9f7bd1eb355c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'COINMC Server',
      description: 'A unique Minecraft experience with custom gameplay mechanics and server features.',
      tags: ['Server Administration', 'Plugin Development', 'Community Building'],
      image: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    }
  ];

  return (
    <section id="minecraft" className="py-20" ref={sectionRef}>
      <div className="hiro-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            Minecraft Development
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Creating memorable Minecraft experiences through custom servers and plugins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              delay={index * 100}
            />
          ))}
        </div>

        <div className={`mt-16 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Minecraft Development Journey</h3>
            
            <div className="relative ml-4 pl-6 border-l-2 border-hiro-purple/30">
              {[
                {
                  year: '2021',
                  title: 'Started Minecraft Development',
                  description: 'Began learning Java and the Spigot API to create custom Minecraft plugins'
                },
                {
                  year: '2022',
                  title: 'Launched First Server',
                  description: 'Created and launched my first public Minecraft server with custom plugins'
                },
                {
                  year: '2022',
                  title: 'Released Economy Plugin',
                  description: 'Developed and released a comprehensive economy plugin for Minecraft servers'
                },
                {
                  year: '2023',
                  title: 'COINMC Success',
                  description: 'Grew the COINMC server to a thriving community with unique gameplay features'
                }
              ].map((event, index) => (
                <div 
                  key={index} 
                  className={`mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="absolute -left-[10px] mt-1.5 w-5 h-5 rounded-full bg-hiro-purple"></div>
                  <p className="text-sm text-hiro-light-purple font-medium mb-1">{event.year}</p>
                  <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinecraftSection;
