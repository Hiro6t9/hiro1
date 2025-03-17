
import { useEffect, useRef, useState } from 'react';

interface CommandProps {
  name: string;
  description: string;
  prefix: string;
  example: string;
}

const CommandCard = ({ name, description, prefix, example }: CommandProps) => {
  return (
    <div className="glass-card glass-card-hover p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-md bg-hiro-purple/20 flex items-center justify-center mr-3">
          <span className="text-hiro-purple font-bold">/</span>
        </div>
        <h4 className="font-bold">{name}</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="bg-black/20 p-2 rounded-md font-mono text-sm">
        <span className="text-hiro-light-purple">{prefix}</span>
        <span>{example}</span>
      </div>
    </div>
  );
};

const DiscordSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'roxy' | 'features'>('roxy');
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

  const commands = [
    {
      name: 'help',
      description: 'Displays all available commands and their usage',
      prefix: '!',
      example: 'help [command]'
    },
    {
      name: 'play',
      description: 'Plays a song or adds it to the queue',
      prefix: '!',
      example: 'play <song name or URL>'
    },
    {
      name: 'queue',
      description: 'Displays the current music queue',
      prefix: '!',
      example: 'queue'
    },
    {
      name: 'skip',
      description: 'Skips the current song',
      prefix: '!',
      example: 'skip'
    },
    {
      name: 'ban',
      description: 'Bans a user from the server',
      prefix: '!',
      example: 'ban <@user> [reason]'
    }
  ];

  const features = [
    'Music playback with queue system',
    'Moderation tools (ban, kick, mute)',
    'Welcome messages for new members',
    'Server statistics and analytics',
    'Role management and assignments',
    'Custom commands and responses',
    'Polls and voting system',
    'Reaction roles for self-service',
    'Game integrations and notifications'
  ];

  return (
    <section id="discord" className="py-20" ref={sectionRef}>
      <div className="hiro-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
            Discord Bot Development
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Creating powerful Discord bots to enhance server functionality
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-5/12">
            <div 
              className={`glass-card p-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-hiro-purple flex items-center justify-center mr-4 animate-pulse">
                  <span className="text-white font-bold">R</span>
                </div>
                <h3 className="text-2xl font-bold text-gradient">Roxy</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Roxy is a versatile Discord bot designed to enhance server functionality with moderation tools, music playback, custom commands, and more.
              </p>

              <div className="flex space-x-2 mb-6">
                <button
                  className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                    activeTab === 'roxy'
                      ? 'bg-hiro-purple text-white'
                      : 'bg-hiro-purple/10 text-hiro-light-purple hover:bg-hiro-purple/20'
                  }`}
                  onClick={() => setActiveTab('roxy')}
                >
                  Commands
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                    activeTab === 'features'
                      ? 'bg-hiro-purple text-white'
                      : 'bg-hiro-purple/10 text-hiro-light-purple hover:bg-hiro-purple/20'
                  }`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
              </div>

              {activeTab === 'roxy' ? (
                <div className="space-y-4">
                  {commands.slice(0, 3).map((command, index) => (
                    <CommandCard
                      key={command.name}
                      name={command.name}
                      description={command.description}
                      prefix={command.prefix}
                      example={command.example}
                    />
                  ))}
                </div>
              ) : (
                <div className={`space-y-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                  {features.slice(0, 6).map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-hiro-purple mr-3"></div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div 
              className={`glass-card p-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '300ms' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">Discord Development Skills</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  { name: 'Bot Development', value: 85 },
                  { name: 'Discord.js', value: 80 },
                  { name: 'Node.js', value: 75 },
                  { name: 'API Integration', value: 70 }
                ].map((skill, index) => (
                  <div key={skill.name} className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${400 + index * 100}ms` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-hiro-light-purple">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-hiro-purple to-hiro-light-purple rounded-full"
                        style={{ 
                          width: `${skill.value}%`,
                          transition: 'width 1s ease-in-out',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`bg-black/20 p-6 rounded-lg mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                <h4 className="text-lg font-bold mb-4 text-gradient">Bot Development Process</h4>
                <div className="space-y-4">
                  {[
                    { step: 'Planning', description: 'Define features, command structure, and bot functionality' },
                    { step: 'Development', description: 'Build the bot using Discord.js with Node.js backend' },
                    { step: 'Testing', description: 'Thoroughly test all commands and edge cases' },
                    { step: 'Deployment', description: 'Host the bot on a reliable server for 24/7 uptime' }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4">
                        <div className="w-6 h-6 rounded-full bg-hiro-purple/20 flex items-center justify-center">
                          <span className="text-hiro-purple font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium">{item.step}</h5>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
