// var express = require ('express');
// var app = express();
// var sql = require ('mssql');
// var cors= require ('cors');
// var config = require ('./config')

// const port = process.env.port||4004;
// app.listen(port);
// app.use(cors());

// sql.connect(config,function (err) {
//     if (err) console.log('Error:',err);
//     else console.log('Connected');
// });

// var request = new sql.Request();

// app.get('/',(req,res)=> {
//     request.query("Select * from Product", ((err, record)=> {
//         if (err) console.log('Error:',err);
//         res.send(record.recordsets[0]);
//     }));
// });


var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var sql = require("mssql");
var configFile = require('./config');
const port = process.env.PORT || 4004;
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
});

var request = new sql.Request();
let checkKey = [],
        keyValue = ''
app.get('/', function (req, res) {
    var sqlQuery = "select * from Product";
    request.query(sqlQuery, function (err, recordset) {
        if (err) console.log(err);
        data = recordset.recordsets[0];
        // console.log(data);
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
        console.log(data);
        res.send(data);
    })
})