import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
function App() {
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

  const [newItem, setNewItem] = useState('')

  const AddItem = (Item) => {
    const id = items.lenght ? items[items.lenght -1].id + 1 : 1;
    const myNewIetm = {id, checked: false, item};
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocerie list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer lenght={items.length} />
    </div>
  );
}

export default App;
