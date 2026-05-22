import Card from "./components/Card"
import fluffykins from './assets/images/fluffykins.png'

function App() {
  return (
    <div className="cards">
      <Card name="New MEOW" img={fluffykins} alt="image" phone=" +93 798987789" email="fluffykins003@gmail.com" />
      <Card name="New MEOW" img={fluffykins} alt="image" phone=" +93 798987789" email="fluffykins003@gmail.com" />
    </div>
  )
}

export default App