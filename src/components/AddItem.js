import React from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="p-4 flex gap-2">
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add an item..."
                className="border p-2 flex-grow"
            />
            <button type="submit" className="bg-green-500 text-white p-2">Add</button>
        </form>
    );
};

export default AddItem;
