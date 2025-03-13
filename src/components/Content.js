import React from 'react';
import Item from './Item';

const Content = ({ items, handleCheck, handleDelete, handleEdit }) => {
    return (
        <main className="p-4">
            {items.length ? (
                <ul className="space-y-2">
                    {items.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center animate-fadeIn">The list is currently empty. <br />Start adding your must-have items!</p>
            )
            }
        </main >
    );
};

export default Content;
