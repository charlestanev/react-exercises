import React from 'react';

const Footer = ({ length }) => {
    return (
        <footer className="bg-gray-700 text-white text-center p-4">
            <p>{length} {length === 1 ? "Item" : "Items"} in the list</p>
        </footer>
    );
};

export default Footer;
