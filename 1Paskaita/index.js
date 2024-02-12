const express = requred("express");
const app = express ();
const port = 3000;
app.get("/",(req, res)=> {
    res.send("Labas pasauli");
});

const cars = [audi, vw, bmv];

app.get("/cars", (req, res) => {
    res.send(cars);
});

app.listen(port, () => {
    console.log(`App is listening on the port ${port}`);
});
