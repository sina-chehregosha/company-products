const express = require('express');
const router = express.Router();
const Company = require('../models/company');


router.get('/', (req, res) => {


    Company.find({}, (err, allCompanies) => {
        if (err) return res.status(500).send('something went wrong!');
        res.render('../views/pages/companies.ejs', {allCompanies});
    })
    


})


router.post('/', (req, res) => {
    if (!req.body.name || !req.body.phoneNumber) {
        return res.status(400).send('Empty field!');
    };

    Company.findOne({name: req.body.name.trim().toLowerCase()}, (err, existCompany) => {
        if (err) return res.status(500).send('something went wrong!');
        if (existCompany) return res.status(406).send('Company already exist');

        const NEW_COMPANY = new Company({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber
        });

        NEW_COMPANY.save((err, company) => {
            if (err) return res.status(500).send('Something went wrong while SAVING new company');
            res.json(company);
        });
    });
});

module.exports = router;