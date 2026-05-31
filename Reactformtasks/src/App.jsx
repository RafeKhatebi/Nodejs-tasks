export default function App() {
    return (
        <div className="App">
            <h1>React Form </h1>
            <form action="" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="enter your name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="enter your email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="enter your password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}