
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40
                border border-white/10 hover:border-white/20
                text-foreground hover:text-hiro-purple hover:shadow-md hover:shadow-hiro-purple/20"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
