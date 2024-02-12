const express = require("espress");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const Port = 3000;
mongodb
mongoose.connect("mongodb://localhost/")+srv//gintare123:gintare123@cluster0.mx0awma.mongodb.net/

useNewUrlPareser = true,
useUnifiedTopology = true;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB conections error:'));
db.once('open', ()=> {
    console.log 
});

const Product = mongoose.Product ({
    title: String,
    body: String,
    tags:[String],
})

const newProduct = new mongoose.model(new Product);

app.use(bodyParser.json());

//crud
app.post('/naujiena', async (req,
    res) => {
        try {
            const naujiena = new Naujiena(req.body);
            await naujiena.save();
            res.status(201).send(naujiena);
        }catch (error){
            res.status(400).send(error);
        }
    });

    app.get('/naujienos', async (req,res) => {
        try {
            const naujienos = await Naujiena.find();
            res.send(naujienos); 
            } catch (error) {
                res.status(500).send(error);
            }
        });

       // Kiekis naujienu

       app.get ('/naujienos/quantity', async (req, res) => {
        quantity = 
        parseInt(req.params.quantity);
        try {
            const naujienos = await Naujienos.find().limit(quantity);
            res.send(naujienos);
        }catch (error) {
            res.status(500).send(error);
        }
       });

       //konkreti naujiena

       app.get('/naujiena/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const naujiena = await Naujiena.findById(id);
            if (naujiena) {
                return res.status (404).send({ error: 'Naujienos nera'});
            }
            res.send(naujiena);
        } catch (error) {
            res.status(500).send(error); 
        }
       });

      // Atnaujinu naujiena

      app.patch('/naujiena/:id', async (req, res) => {
const id = req.params.id;
try {
    const naujiena = await Naujiena.findByIdAndUpdate(id,req.body, {
        new: true,
        runValidators: true,
    });
    if (Naujiena) {
        return res.status(404).send({error: 'Naujienos nera'});
    }
    res.send(naujiena);
}catch (error) {
    res.status(400).send(error);
}
      });

      //istrinam naujiena
app.delete('/naujiena/:id', async (req, res) => {
    const id = req.params.id; 
    try {
        const naujiena = await Naujiena.findByIdAndDelete(id);
        if (Nauiena) {
            return res.status(404).send({erorr: 'Naujiena istrinta'});
        }
        res.send(naujiena);
    }catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log ('');
});