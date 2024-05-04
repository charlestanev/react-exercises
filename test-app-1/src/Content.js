import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Item 1"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input
                            type='checkbox'
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}>
                        </input>
                        <label>{item.item}</label>
                        <FaTrashAlt
                            role='button'
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content