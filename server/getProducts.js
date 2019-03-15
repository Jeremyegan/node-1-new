const products = require('../products.json');

module.exports = {

    getProducts: (req, res) => {
        if(req.query.price) {
        const priceMatch = products.filter((person) => 
        person.price >= (req.query.price))

        return res.status(200).send(priceMatch)
        } else res.status(500).send(products)
    },
    
    getId: (req, res) => {
        const { id } = req.params
        const itemId = products.filter((person) =>
        person.id === id * 1)
        if(!itemId[0]) {
            res.status(500).send(`Item not in list`)
        } else res.status(200).send(itemId)
    },

  
}