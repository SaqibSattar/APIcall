const express = require('express');
const route = express.Router();
// const mongoose = require('mongoose');

var Text = require('./model/text');

route.get('/', (req, res) => {
    Text.find().select('_id msg').exec().then(doc => {
        var response = {
          count: doc.length,
          Data: doc.map(doc => {
            return {
              msg: doc.msg,
              _id: doc._id
            }
          })
        };
        console.log(response);
        res.status(200).json(response);
      }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      });
    });

    module.exports = route;