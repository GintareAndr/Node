const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/",(req, res) => {
    res.send("Sklandziai");
});

const brand = ["Toyota", "Audi", "BMV"];

app.get("/brand", (req, res) => {
    res.send(brand);

});




//paleidziamas portas
app.listen(port,() => {
    console.log(`App is listening  on the port ${port}`);
}); 
