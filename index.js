var cadena="Hola mundo";
console.log(cadena);

var express = require('express');
var port = 3001;
var BASE_API_PATH="/api/v1";
var bodyParser = require('body-parser')

var contacts = [ 

    {"name" : "peter", "phone": 12345 }, 

    {"name" : "john", "phone": 6789} 

]; 

var app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => res.send("<html><h1>Este es mi servidor nuevo</h1></html>"));

app.get(BASE_API_PATH+"/contacts",(req,res) => {

    console.log(Date()+ " - GET /contacts");
    res.send(contacts);
});

app.post(BASE_API_PATH+"/contacts",(req,res) => {

    console.log(Date()+ " - POST /contacts");
    var contact=req.body;
    contacts.push(contact);
    res.sendStatus(201);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));