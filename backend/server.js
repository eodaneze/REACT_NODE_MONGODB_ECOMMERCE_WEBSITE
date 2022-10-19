import express from "express";
import data from "./data.js";
const app = express();
app.get('/api/products', (req, res) => {
    res.send(data.products)
});
app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug);
    if(product){
        res.send(product)
    }else{
        res.send(404).send({message: 'Product Not Found'});
    }
    
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
})