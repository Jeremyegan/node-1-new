const express = require('express');

const app = express();

const getProducts = require('./getProducts')

app.get('/api/products', getProducts.getProducts);

app.get('/api/products/:id', getProducts.getId);





const PORT = 5555
app.listen(PORT, () => console.log(`Here comes the sun ${PORT}`))

