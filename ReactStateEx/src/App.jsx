import { useState } from "react"

export default function App() {
  return (
    <div>
      <Itemlist />
    </div>
  )
}
function Itemlist() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");

  function addItem() {
    if (input.trim() === "") return; // prevent empty items
      setItem([...item, input]); // 
      setInput(""); //
  }
  return (
    <div>
      <h3>Shopping List</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)}
        placeholder="add an item " />
      <button onClick={addItem}>add item </button>
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}