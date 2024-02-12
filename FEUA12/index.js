const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req, res) => {
    res.send("Skalndziai");
});

const cars = ["audi", "bmw", "vw"];

app.get("/cars", (req, res) => {
    res.send(cars);
});

const student = [{id: 1, name: "Gintare", lastname: "Andriune", age: "37"}];
app.get("/student", (req, res) => {
    res.send(student);
});


app.listen(port,() => {
    console.log(`App is listening  on the port ${port}`);
}); 
