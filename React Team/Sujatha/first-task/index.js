var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var sql=require('mssql');
var configFile=require('./config');
var cors = require('cors');
var port=process.env.port || 5001;

app.listen(port,err=>{
    if(err)console.log('err');
    else{
        console.log(`Running Port is ${port}`);
    }
});
app.use(bodyparser.json());
app.use(cors());
var config=configFile;
sql.connect(config, function(err){
    if(err){
        console.log('err');
    }
    else{
        console.log('Connected');
    }
});
var request = new sql.Request();
let checkKey = [],
    keyValue = ''
var data;
app.get('/',(req,res)=>{
    console.log('Welcome');
    var sqlQuery = 'select * from ProductDetail';
    request.query(sqlQuery, function(err, record){
        if(err){
            console.log('err');
        }
            // res.send(record.recordsets[0]);
            data = record.recordsets[0]
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
//writerFile.writeData(data);
console.log(data)
        res.send(data);
    });
});