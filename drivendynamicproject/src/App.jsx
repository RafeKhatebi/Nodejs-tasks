import Header from "./Header"
import Card from "./Card"
import data from "./data"

export default function App() {

    const entryElements = data.map((entry) => {
        return (
            <Card
                key={entry.key}
                {...entry}
            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}