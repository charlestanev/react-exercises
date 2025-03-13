import React from 'react';
import { ListChecks } from 'lucide-react';

const Footer = ({ length }) => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-700 text-white text-center p-3 shadow-md flex items-center justify-center gap-2">
            <ListChecks className="w-5 h-5" />
            <p>{length} {length === 1 ? "Item" : "Items"} in the list</p>
        </footer>
    );
};

export default Footer;
