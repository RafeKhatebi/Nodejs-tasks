const express = require("express");

const app = express();

app.use(express.json());

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 500
    }
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.json({
        success: true,
        product: newProduct
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
}); 