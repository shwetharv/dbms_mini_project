const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
app.use(cors());
app.get('/api/phones/',(req , res)=>{
    const phones =[
        {id:1, pbrand:'OnePlus', pname:'5T', pprice:"32,000"},
        {id:2, pbrand:'OnePlus', pname:'6 Avengers Edition', pprice:"42,000"},
        {id:3, pbrand:'Iphone', pname:'XS', pprice:"52,000"},
        {id:4, pbrand:'Samsung', pname:'Galaxy J7', pprice:"12,000"}
    ]

    res.json(phones);
    }); 
app.listen(port, ()=> console.log(`Server stated on port ${port}`));