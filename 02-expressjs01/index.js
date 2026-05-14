import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var fullname = "";
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    console.log(import.meta.url);
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    fullname = req.body.name + " " + req.body.lastname;
    res.send(`<h1>Hello ${fullname}</h1> <br> <h2>Welcome Here!</h2>`);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});