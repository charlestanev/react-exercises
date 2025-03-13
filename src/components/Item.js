import React from 'react';
import { Trash2, Edit3, CheckSquare, Square } from 'lucide-react';

const Item = ({ item, handleCheck, handleDelete, handleEdit }) => {
    return (
        <li className="p-3 bg-gray-100 dark:bg-gray-700 flex justify-between items-center rounded-lg shadow transition-all hover:scale-105">
            <button onClick={() => handleCheck(item.id)} className="mr-2">
                {item.checked ? <CheckSquare className="text-green-500" /> : <Square className="text-gray-500" />}
            </button>
            <span className={`flex-grow ${item.checked ? "line-through text-gray-500" : "text-gray-800 dark:text-white"}`}>
                {item.item}
            </span>
            <button onClick={() => handleEdit(item.id)} className="text-yellow-500 mx-2 hover:scale-110 transition-all">
                <Edit3 />
            </button>
            <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:scale-110 transition-all">
                <Trash2 />
            </button>
        </li>
    );
};

export default Item;
