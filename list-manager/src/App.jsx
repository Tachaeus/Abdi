import { useState } from "react"
import "./App.css"

function App() {
  const [items, setItems] = useState([]);

  const [listItem, setListItem] = useState("");

  const addListItem = (i) => {
    setListItem(i.target.value);
  }

  const addItem = () => {
    if (listItem.trim() === "") {
      return;
    }
    setItems([...items, listItem]);
    setListItem("");
  }

  return (
    <div className="App">
      <h3 className="heading">Dynamic List Manager</h3>
      <div className="entry">
      <input type="text" value={listItem} onChange={addListItem} placeholder="Enter an item" /><button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (<li key={item}>{item}</li>))
        }
      </ul>
    </div>
  )
}

export default App;
