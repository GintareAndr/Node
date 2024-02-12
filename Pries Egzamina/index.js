const express = requred("express");
const app = express ();
const port = 3000;
app.get("/",(req, res)=> {
    res.send("Labas pasauli");
});

app.listen(port, () => {
    console.log(`App is listining on thi port ${port}`);
});
