const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Company = require('../models/company');

router.post('/', (req, res) => {
    if (!req.body.name || !req.body.productionDate || !req.body.companyId) return res.status(400).send('Empty Field');
    Company.findById(req.body.companyId, (err, company) => {
        if (err) return res.status(500).send('something went wrong!');
        if (!company) return res.status(404).send('company not found!');

        const NEW_PRODUCT = new Product({
            name: req.body.name,
            type: req.body.type,
            productionDate: req.body.productionDate,
            companyId: req.body.companyId 
        });

        NEW_PRODUCT.save((err, product) => {
            if (err) return res.status(500).send('Something went wrong while SAVING product');
            return res.json(product);
        });
    });
});


router.get('/:companyId', (req, res) => {   //! using params

    Company.findById(req.params.companyId, (err, company) => {
        if (err) return res.status(500).send('Something went wrong! \n' +  err);
        if (!company) return res.status(404).send("Company Doesn't exist");

        Product.find({companyId: company._id}).populate('companyId', {name: 1}).exec((err, products) => {
            if (err) return res.status(500).send('Something went wrong! \n' +  err);

            return res.json(products)
        });
    });
});



module.exports = router;