
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Start playing the audio when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set initial volume to 20%
      
      // Need to play it on user interaction due to browser autoplay policies
      const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play().catch(error => {
            console.error("Audio play failed:", error);
          });
        }
        document.removeEventListener('click', playAudio);
      };
      
      document.addEventListener('click', playAudio);
    }
    
    return () => {
      document.removeEventListener('click', () => {});
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef}
        src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3" 
        loop
        preload="auto"
      />
      
      <button 
        onClick={toggleMute}
        className="fixed bottom-8 left-8 p-3 rounded-full bg-hiro-purple text-white shadow-lg hover:bg-hiro-dark-purple transition-all duration-300 z-50"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
};

export default BackgroundMusic;
