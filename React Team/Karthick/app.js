var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var sql = require("mssql");
var configFile = require('./config');
const port = process.env.PORT || 3456;
var cors = require('cors');
app.listen(port, err => {
    if (err) console.log(err);
    else {
        console.log("Running in ", port);
    }
});
app.use(cors());
app.use(bodyParser.json());

var config = configFile;

sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    }
    else{
        console.log('Connected');
    }
});

var request = new sql.Request();
let checkKey = [],
        keyValue = '',
        data=[]
app.get('/', function (req, res) {
    var sqlQuery = "select * from Product_Detail_Master";
    request.query(sqlQuery, function (err, recordset) {
        if (err) console.log(err);
        data = recordset.recordsets[0];
		data.map(productDetails=>{
		for (keyValue in productDetails) {
                        checkKey.push(keyValue)
                    }
                    if(checkKey.includes('product_default')){
                    
                    }
                    else{
                        productDetails.product_default = 1;
                    }
        })
        res.send(data);
    })
})