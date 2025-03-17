
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const WebDevSection = () => {
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
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS showcasing my projects and skills.',
      tags: ['React', 'Tailwind CSS', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      title: 'E-commerce Platform',
      description: 'A scalable e-commerce solution with product management, cart functionality, and secure checkout.',
      tags: ['Next.js', 'Stripe', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      title: 'MappleHost Dashboard',
      description: 'User dashboard for MappleHost service with analytics, user management, and service controls.',
      tags: ['React', 'Node.js', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <section id="web" className="py-20" ref={sectionRef}>
      <div className="hiro-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            Web Development
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Creating beautiful, responsive websites with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold mb-4">Web Development Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              { name: 'HTML5', level: 90 },
              { name: 'CSS3/SCSS', level: 85 },
              { name: 'JavaScript', level: 80 },
              { name: 'TypeScript', level: 75 },
              { name: 'React', level: 85 },
              { name: 'Next.js', level: 70 },
              { name: 'Tailwind CSS', level: 90 },
              { name: 'UI/UX Design', level: 80 }
            ].map((skill, index) => (
              <div 
                key={skill.name}
                className="w-full sm:w-5/12 glass-card p-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-hiro-light-purple">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-hiro-purple to-hiro-light-purple rounded-full"
                    style={{ 
                      width: `${skill.level}%`,
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
    </section>
  );
};

export default WebDevSection;
