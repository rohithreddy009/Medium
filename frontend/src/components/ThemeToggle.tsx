import { useTheme } from '../contexts/ThemeContext'; 

export const ThemeToggle = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="p-2 rounded-md text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800">
            Toggle Theme
        </button>
    );
};
