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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = "Grocery List";
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

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
    <div className="App min-h-screen flex flex-col items-center p-6 md:p-0 bg-gradient-to-b from-blue-200 to-blue-500 dark:from-gray-900 dark:to-gray-800 transition-all">
      <Header title="Grocery List" darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 mt-6 transition-all">
        <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={(e) => { e.preventDefault(); addItem(newItem); }} />
        <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit} />
        <ClearList clearItems={clearItems} items={items} />
      </div>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
