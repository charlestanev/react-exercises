import React from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-3 p-4">
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add an item..."
                className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg flex-grow shadow-sm focus:ring focus:ring-blue-400 transition-all"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-all">
                Add
            </button>
        </form>
    );

};

export default AddItem;
