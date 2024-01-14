const express = require("express");
const {faker} = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Hola, nuevo end point de routing ");
});

app.get("/products", (req, res) =>{
  const products = [];
  const {size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageurl(),
    })
  }

  res.json(products);
});

//declarar solicitudes estaticas antes de dinamicas
app.get('/products/filter', (req,res) => {
  res.send('Yo soy un filter');
});

//solicitud dinamica
app.get("/products/:id", (req, res) => {
  const { id }= req.params;
  res.json({
      id,
      name: 'Product 2',
      price: 2000
    });
});

app.get('/users', (req, res) => {
  const { limit, offset }= req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});

app.get('/categories/:categoryId/products/:productId',(req,res) => {
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
})

app.listen(port, () =>{
  console.log("My port: " + port);
});
