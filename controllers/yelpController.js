const keys = require('dotenv').config();
const mongoose = require('mongoose');
const yelp = require('yelp-fusion');

// File Imports:
const db = require('../models');

const client_Id = (process.env.CLIENT_ID || keys.parsed.Client_ID);
const yelpAPI = process.env.YELP_API || keys.parsed.API_Key;
const client = yelp.client(yelpAPI);

const yelpController = {
    findAll: function (req, res) {
        // res.send('route worked')
        client.search({
            term: "",
            location: "chicago, il",
            // limit: 20
        }).then(response => {
            console.log("woohoo!");
            console.log(response);
            console.log(response.jsonBody.businesses[0].name);
            res.json(response.jsonBody.businesses);
        }).catch(e => {
            console.log(e)
        });
    },

    // findAllEats: (req, res) => {
    //     db.Eat.find({
    //     }).then(dbEats => {
    //         res.err(err => {
    //             res.err(err)
    //         })
    //     })
    // },
    findById: (req, res) => {
        db.Eat.findOne({
            id: req.params.id
        })
            .then(singleEat => {
                res.json(singleEat)
            })
            .catch(err => {
                res.err(err)
            })
    },
    addEat: (req, res) => {
        res.send(`${req.params.id}`)
    },
    updateEat: (req, res) => {
        res.send(`${req.params.id}`)
    },
    deleteById: (req, res) => {
        res.send(`${req.params.id}`)
    }
}

module.exports = yelpController;