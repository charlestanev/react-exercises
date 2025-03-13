import React from 'react';
import { Trash } from 'lucide-react';

const ClearList = ({ clearItems, items }) => {
    if (items.length === 0) return null;

    return (
        <button
            onClick={clearItems}
            className="bg-red-500 hover:bg-red-600 text-white w-full p-3 mt-4 rounded-lg shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2"
        >
            <Trash className="w-5 h-5" />
            Clear All Items
        </button>
    );
};

export default ClearList;
