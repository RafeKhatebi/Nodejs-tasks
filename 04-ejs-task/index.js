import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/ejs");

app.get("/", (req, res) => {
    res.render("index", { items: ["Apple", "Banana", "Cherry"] });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
