import React from 'react';
import Item from './Item';

const Content = ({ items, handleCheck, handleDelete, handleEdit }) => {
    return (
        <main className="p-4">
            {items.length ? (
                <ul>
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
                <p className="text-gray-500 text-center">No items in the list.</p>
            )}
        </main>
    );
};

export default Content;
