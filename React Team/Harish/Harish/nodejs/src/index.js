const express = require("express");
const app = express();
var cors = require('cors');
const mssql = require("mssql");

const port = process.env.PORT || 9000
app.use(cors());

const configuration={
    user:"sa",
    password:"pftec",
    server:"CHETPDT011\\SQLEXPRESS2014",
    database:"Tech-Stack"
}

app.get("/name",function(req,res){
   mssql.connect(configuration,function(err){
       if(err)throw err;
      let request = new mssql.Request();
      request.query(`select ProductName from Products_Details`,function(err,recordSet){
         if(err)throw err;
            res.send(recordSet.recordsets[0])
      })
   })
})


app.get("/",function(req,res){
    mssql.connect(configuration,function(err){
        if(err)throw err;
       let request = new mssql.Request();
       request.query(`select * from Products_Details`,function(err,recordSet){
          if(err)throw err;
             res.send(recordSet.recordsets[0])
       })
    })
 })
 

app.listen(port,()=>{
    console.log("listening in ",port)
})