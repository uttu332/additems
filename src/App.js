import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const onRemoveItem = (itemToRemove) => {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };
  return (
    <>
      <div className="top-list">
        <p>Shopping List</p>
      </div>
      <div className="shopping-list">
        <h2>Items to buy</h2>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Add an Item"
            name="item"
            required
          ></input>
          <button className="add">Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
const Item = ({ onRemoveItem, item }) => {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        X
      </button>
    </li>
  );
};
export default App;
