import React from 'react';

const Item = ({ item, handleCheck, handleDelete, handleEdit }) => {
    return (
        <li className="p-2 border-b flex justify-between items-center">
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
                className="mr-2"
            />
            <span className={`flex-grow ${item.checked ? "line-through" : ""}`}>
                {item.item}
            </span>
            <button onClick={() => handleEdit(item.id)} className="text-yellow-500 mx-2">✏️</button>
            <button onClick={() => handleDelete(item.id)} className="text-red-500">🗑</button>
        </li>
    );
};

export default Item;
