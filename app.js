import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    console.log(req.body);
    console.log("Hello World!");
    console.log("Hello World!");
    res.send("Hello World!");
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));