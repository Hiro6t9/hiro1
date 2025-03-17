
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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

  const aboutItems = [
    { label: 'Name', value: 'Hiro' },
    { label: 'Age', value: '16' },
    { label: 'Hobbies', value: 'Web Development, Minecraft server and plugin development, learning' },
    { label: 'Discord', value: 'Hiro.de' },
  ];

  const discordServers = [
    { name: 'Minecraft', value: 'COINMC' },
    { name: 'Hosting', value: 'MappleHost' },
  ];

  return (
    <section id="about" className="py-20" ref={sectionRef}>
      <div className="hiro-container">
        <div className="text-center mb-10">
          <h2 className={`section-heading ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            About Me
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className={`glass-card p-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Personal Info</h3>
            <div className="space-y-4">
              {aboutItems.map((item, index) => (
                <div 
                  key={item.label}
                  className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-lg font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`glass-card p-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Discord Servers</h3>
            <div className="space-y-6">
              {discordServers.map((server, index) => (
                <div 
                  key={server.name}
                  className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-hiro-purple/20 flex items-center justify-center mr-3">
                      <span className="text-hiro-purple font-bold">{server.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{server.name}</p>
                      <p className="text-sm text-muted-foreground">{server.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              <h4 className="text-lg font-bold mb-3">Skills & Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "UI/UX Design", "Minecraft", "Plugin Development", "Discord Bots", "App Development"].map((skill, index) => (
                  <span 
                    key={skill}
                    className="bg-hiro-purple/10 text-hiro-light-purple px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
