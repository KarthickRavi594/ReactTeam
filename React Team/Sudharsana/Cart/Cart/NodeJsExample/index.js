const express = require('express');
const app = express();
const mssql = require('mssql');
const configFile = require('./config');
const cors = require("cors");
const port = 5000;
app.listen(port)
app.use(cors())
mssql.connect(configFile, function (err) {
    if (err) throw err;
})
var request = new mssql.Request();
let checkKey = [],
    keyValue = ''
var data;
app.get('/', (req, res) => {
    request.query('select * from ProductDetails', function (err, record) {
        if (err) throw err;
        data = record.recordsets[0]
        // console.log(data);
        data.map(productDetails => {
            for (keyValue in productDetails) {
                checkKey.push(keyValue)
            }
            if (checkKey.includes('product_default')) {} else {
                productDetails.product_default = 1;
            }
        })
        console.log(data)
        res.send(data);
    })
})