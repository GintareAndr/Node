//• Sukurkite dinaminį GET route, kuris pagal kainos intervalą grąžins prekes, kurių kaina
//yra tarp nurodytų ribų (įskaitant jas). Parametrai turėtų būD perduodami URL kaip
//minPrice ir maxPrice. (du parametrai reikalingi)
//• Sukurkite POST route, kuris leis pridėD naują prekę prie duomenų sąrašo. Nauja prekė
//turėtų turėD id, name, category, price ir stock laukus. UžDkrinkite, kad naujoji prekė
//neturėtų to paDes id kaip jau esančios prekės.


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const products = [
  {
    "id": 1,
    "name": "iPhone 13",
    "category": "Telefonai",
    "price": 1100,
    "stock": 10
  },
  {
    "id": 2,
    "name": "Samsung Galaxy",
    "category": "Telefonai",
    "price": 800,
    "stock": 15
  },
  // Pridėkite daugiau prekių pagal poreikį
];

// Dinaminis GET route pagal kainos intervalą
app.get('/products', (req, res) => {
  const { minPrice, maxPrice } = req.query;

  // Patikriname, ar minPrice ir maxPrice parametrai yra pateikti
  if (!minPrice || !maxPrice) {
    return res.status(400).json({ error: 'Trūksta minPrice arba maxPrice parametrų.' });
  }

  // Filtruojame prekes pagal kainos intervalą
  const filteredProducts = products.filter(product => {
    const price = product.price;
    return price >= parseInt(minPrice) && price <= parseInt(maxPrice);
  });

  res.json(filteredProducts);
});

// POST route pridėti naują prekę
app.post('/products', (req, res) => {
  const { id, name, category, price, stock } = req.body;

  // Patikriname, ar visi laukai yra pateikti
  if (!id || !name || !category || !price || !stock) {
    return res.status(400).json({ error: 'Visi laukai turi būti pateikti.' });
  }

  // Patikriname, ar prekė su tokiu id jau egzistuoja
  const existingProduct = products.find(product => product.id === id);
  if (existingProduct) {
    return res.status(400).json({ error: 'Prekė su tokiu id jau egzistuoja.' });
  }

  // Pridedame naują prekę
  const newProduct = { id, name, category, price, stock };
  products.push(newProduct);

  res.json(newProduct);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveris paleistas: http://localhost:${PORT}`);
});