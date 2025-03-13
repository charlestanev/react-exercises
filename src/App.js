import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';
import ClearList from './components/ClearList';
import initialItems from './data';

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('shoppingList')) || initialItems;
  });

  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    document.title = "Grocery List";
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    if (!item.trim()) return;
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id, checked: false, item }]);
    setNewItem('');
  };

  const handleCheck = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    const editedItem = prompt("Edit item:", items.find(item => item.id === id)?.item);
    if (editedItem !== null) {
      setItems(items.map(item =>
        item.id === id ? { ...item, item: editedItem } : item
      ));
    }
  };

  const clearItems = () => {
    if (window.confirm("Are you sure you want to clear all items?")) {
      setItems([]);
    }
  };

  return (
    <div className="App min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <Header title="Grocery List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={(e) => { e.preventDefault(); addItem(newItem); }} />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit} />
      <ClearList clearItems={clearItems} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
