const express = require('express');
const app = express();
 
app.use(express.json());
 
app.get('/',
    (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
 

    function addItem() {
        var a = document.getElementById("name");
        var catogory = document.getElementById("categoryId");
        var li = document.createElement("li");
        li.setAttribute('id', catogory.value);
        li.appendChild(document.createTextNode(catogory.value));
        a.appendChild(li);
    }
    
app.post('/',
    (req, res) => {
        const { name, categoryId, price, description } = req.body;
        
        res.send(
            {
                name:"Vanish",
                categoryId:"ObjectId",
                price,
                description,
            }
            
        );
    });
 
app.listen(3000,
    () => {
        console.log(
            'Our express server is up on port 3000'
        );
    });