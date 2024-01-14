const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Hola, nuevo end point de routing ");
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

routerApi(app);



