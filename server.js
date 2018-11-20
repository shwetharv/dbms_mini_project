const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
var cors = require('cors');
var login = require('./login');
const bcrypt = require('bcrypt');
var saltRounds=8;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'rohan',
    password: 'chaliyan',
    database: 'mobile'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });
  
app.get('/api/phones/',(req , res)=>{
    const phones =[
        {id:1, pbrand:'OnePlus', pname:'5T', pprice:"32,000"},
        {id:2, pbrand:'OnePlus', pname:'6 Avengers Edition', pprice:"42,000"},
        {id:3, pbrand:'Iphone', pname:'XS', pprice:"52,000"},
        {id:4, pbrand:'Samsung', pname:'Galaxy J7', pprice:"12,000"}
    ]

    res.json(phones);
    }); 

app.post('/signup',function(req,res){
  let response= req.body;
  console.log(response);
  let myPlaintextPassword=response.password;
  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    let sql =`INSERT INTO user(uname,password,uemail) VALUES (?,?,?)`;
    let creds=[response.uname,hash,response.email];
    connection.query(sql, creds, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      res.json(results);
      });
  });
});

app.get('/api/phones/all/', function(req, res){
        let sql = `SELECT * FROM phone`;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
    });
        
    });
app.get('/api/phones/:id', function(req, res){
        let sql = `SELECT * FROM phone WHERE id=`+ req.params.id ;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
    });
app.listen(port, ()=> console.log(`Server stated on port ${port}`));