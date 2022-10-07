const express = require("express");

const app = express ();

const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.get(`/hello`, (req,res) => res.send(`Hello Hello`));

let group = ["Luke","Thom","Fauzia","Mimi","Shakeel","Michael"];

app.get(`/getAll`, (req,res) => res.send(group));

app.get(`/get/:id`, (req,res) => res.send(group[req.params.id]));

app.use(express.json());

app.post(`/newName`, (req,res) => { 
    const name = req.body.name; 
    group.push(name); 
    res.status(201).send(`${group} added successfully`);
});

app.put(`/replace/:id`, (req,res,next)=> {
    const newName = req.query.name;
    const old = group[req.params.id];
    group[req.params.id]=newName;
    res.send(`successfully replaced ${old} with ${group[req.params.id, 1]}`);
    next();
});

app.delete(`/delete/:id`, (req,res) => { res.send(group.splice(req.params.id, 1));});


//error handling



const server = app.listen(1207,() => {console.log(`server has started succesfully on port number ${server.address().port}`)});



