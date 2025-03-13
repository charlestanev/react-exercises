import React from 'react';
import { ShoppingCart, Sun, Moon } from 'lucide-react';

const Header = ({ title, darkMode, toggleTheme }) => {
    return (
        <header className="bg-blue-600 dark:bg-gray-800 text-white p-4 text-center shadow-md w-full flex justify-between items-center px-6">
            <div className="flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
            </div>

            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white dark:bg-gray-700 dark:text-white shadow-md transition-all hover:scale-105"
            >
                {darkMode
                    ? <Sun className="w-5 h-5 text-yellow-400" />
                    : <Moon className="w-5 h-5 text-gray-800" />
                }
            </button>
        </header>
    );
};

export default Header;
