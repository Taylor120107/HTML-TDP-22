const router = require(`express`).Router();

const {nameModel}= require("../db");

let group = ["Luke","Thom","Fauzia","Mimi","Shakeel","Michael"];

router.get(`hello`, (req,res) => res.send("Hello,Hello"));

router.get("/getAll", (req,res) => res.send(group));


router.post(`/newName`,(req,res) =>{
    const name = req.body.name; 
    group.push(name); 
    res.status(201).send(`${group} added successfully`);
});

router.put(`/replace/:id`, (req,res,next)=> {
    const newName = req.query.name;
    const old = group[req.params.id];
    group[req.params.id]=newName;
    res.send(`successfully replaced ${old} with ${group[req.params.id, 1]}`);
    next();
});

router.delete(`/delete/:id`, (req,res) => { res.send(group.splice(req.params.id, 1));});

module.exports= router;