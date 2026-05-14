import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

const pass = 123;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/home.html");
});
app.post("/check", (req, res) => {
    const value = req.body.password;

    if (Number(value) === pass) {
        res.redirect("/home")
    } else {
        res.send("Wrong password ❌");
    }

    console.log(req.body);
});
app.listen(port, () => {
    console.log(port);

})