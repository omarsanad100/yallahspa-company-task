import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center h-8 w-8 rounded-full transition-colors cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground"
    >
      <Sun className="absolute h-[1.5rem] w-[1.5rem] transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </button>
  );
};

export default ModeToggle;
