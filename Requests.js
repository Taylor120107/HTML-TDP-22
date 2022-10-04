axios.get("http://localhost:8080/duck/readAll")

axios.post("http://localhost:8080/duck/readAll")
.then(res=> console.log(res))
.catch(err => console.error(err));

axios.post("http://localhost:8080/duck/readAll")
const reqBody={
    name="donald"
    habitat="disneyworld"

}

//status codes
//100-199- info
//200-299-good
//300-399 redirect
//400-499-error/bad request
//500-599-internal server error

//request-methods
//get-read-fetch data
//post-create-send new data
//put-update-replaces
//patch-update-partial
//delete-delete-remove data

//array functions
//type of iteration or loop
//array reqd i.e nums

for(let num of nums){
    console.log(num);
}
//for each- shortcut of enhanced loop
// this iterates though functions and performs operation for each value

//.filter shows values that meet a crtieria

const even = nums.filter(num=> num%2 ===0);

//.map converts each value to something else
//array will stay the same length
//.reduce- will reduce array down to a single value
//comes in min/max/sum

