const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const personSchema = require('../models/Person')

router.route('/').get((req, res) => {
    personSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

module.exports = router;