import React from 'react';

const ClearList = ({ clearItems }) => {
    return (
        <button onClick={clearItems} className="bg-red-500 text-white p-2 mt-4">
            Clear All Items
        </button>
    );
};

export default ClearList;
