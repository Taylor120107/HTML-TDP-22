`use strict`;

function getUsers() {
axios.get("https://reqres.in/api/users")
    .then(res => console.log(res))
    .catch(err => console.error(err));
}
console.log("Yo");
axios.get("https://reqres.in/api/users/2");


function createUser(){
    const name = document.getElementById("nameId").value;
    const job = document.getElementById("jobId").value;
    console.log("name:",name);
    console.log("job:",job);
    axios.post("https://reqres.in/api/users", {
        name,
        job,
    }).then(res => console.log(res))
        .catch(err => console.error(err));
}

axios.post("https://reqres.in/api/register",{
    email:"eve.holt@reqres.in",
    password:`pistol`
   
})
.then((res)=> {console.log(res);
} ,(err) => {console.error(err);
});


axios.post("https://reqres.in/api/login",{
    email:"eve.holt@reqres.in",
    password:`cityslicka`
   
})
.then((res)=> {console.log(res);
} ,(err) => {console.error(err);
});
