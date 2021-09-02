const sql = require("./db.js");
const request = require('request');

const Customer = function(customer) {
  this.Score = customer.Score;
  this.Shoots = customer.Shoots;
  this.Time = customer.Time;
};




Customer.getAll = result => {
  sql.then((connection)=>{
        // query database 
        connection.query("SELECT * FROM rfq_backoffice13_prod.products order by code_grupo, created_date DESC limit 200", (error, res) => {
        if (error) {
          console.log("error: ", error);
          result(null, error);
          return;
        }
        //console.log("WinnerInfo: ", res);
        result(null, res.rows);
      });

});  
};

Customer.getViewlayout = result => {
  sql.then((connection)=>{
        // query database 
        connection.query("SELECT * FROM rfq_backoffice13_prod.viewlayout where visible= 'true' and layoutid='7' ", (error, res) => {
        if (error) {
          console.log("error: ", error);
          result(null, error);
          return;
        }
        //console.log("WinnerInfo: ", res);
        result(null, res.rows);
      });

});  
};

Customer.filterItem = (req,result) => {
  if(req.data){
  sql.then((connection)=>{
        // query database 
        //console.log("id:"+ req.id)
       // console.log("data:"+ req.data)
        connection.query("SELECT * FROM rfq_backoffice13_prod.products where "+req.id+" like '%"+req.data+"%'",
        (error, res) => {
        if (error) {
          console.log("error: ", error);
          result(null, error);
          return;
        }
        //console.log("WinnerInfo: ", res);
     return result(null, res.rows);
      });

});
  }else{
   return result(null, null);
  }  
};



module.exports = Customer;