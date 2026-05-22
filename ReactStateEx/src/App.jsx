import { useState } from "react"
export default function App() {
  const [isGoingOut, setIsGoingOut] = useState(false);
  function changeMind() {
    setIsGoingOut(prev => !prev)
  }
  return (
    <div className="container">
      <label htmlFor="">Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it. </label>
      <button className="value"
        onClick={changeMind}>{isGoingOut ? "yes" : "No"}
      </button>
    </div >
  )
}
