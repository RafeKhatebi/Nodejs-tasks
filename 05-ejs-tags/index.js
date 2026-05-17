import express from "express";
const app = express();
const port = 3000;
app.get(
    "/", (req, res) => {
        const data = {
            title: "Ejs",
            seconds: new Date().getSeconds(),
            employee: ["ali", "jami", "nabi"],
            htmlContent: "<h3>strong text</h3>"
        }
        res.render("index.ejs", data);
    });

app.listen(port, () => {
    console.log(`port is running on :  ${port}`);
}
)

