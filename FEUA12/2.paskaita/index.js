const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/",(req, res) => {
    res.send("Sklandziai");
});

const brand = ["Beantley", "Audi", "BMV"];

app.get("/brand", (req, res) => {
    res.send(brand);

});

// /brands/B => ["BMV"];
// /brands/g => [];
// /brands/b =>
// dinaminis route
app.get("/brands/:firstLetter", (req, res) => {
    // grazinti visus brandus kurie prasideda duota raide
    // const firstLetter = req.params.firstLetter; old way/another way
    const { firstLetter } = req.params; // su dvitaskiu einantys parameterai;
    console.log(firstLetter);
  
    const filteredBrands = brands.filter(
      (brand) => brand[0].toLowerCase() === firstLetter.toLowerCase()
    );
  
    res.send(filteredBrands);
  });
  
  // POST API kuris prideda brandą į masyvą
  app.post("/brands", (req, res) => {
    const { brand } = req.body; // siunciamas body is frontend, butinai turi but objektas ar masyvas
    brands.push(brand);
    res.send(brands);
  });
  



//paleidziamas portas
app.listen(port,() => {
    console.log(`App is listening  on the port ${port}`);
}); 

