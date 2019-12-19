const express = require('express');
const app = express();
const mysql = require('mssql')
const config = require('./dbconfig')
const cors = require('cors')
app.listen(5000);
app.use(cors())
mysql.connect(config, (err) => {
    if (err) console.log('Error -> ', err);
    else {
        console.log('Connected');
    }
})
var req = new mysql.Request();
let checkKey = [],
    keyValue = '',
    data = []
app.get('/', (reqest, res) => {
    req.query("SELECT * FROM ProductDetail", ((err, recordset) => {
        if (err) {
            console.log('Err -> ', err)
        } else {
            data = recordset.recordsets[0];
            // console.log(data);
            data.map(productDetails => {
                for (keyValue in productDetails) {
                    checkKey.push(keyValue)
                }
                if (checkKey.includes('product_default')) {
                }
                else {
                    productDetails.product_default = 1;
                }
            })
            res.send(data);
        }
    }))
})
