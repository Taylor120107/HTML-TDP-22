//DOM Manipulation

const title = document.createElement("h1");//creates h1 tag

title.innerText = "Lets manipulate the DOM";//adding the text inbetween tag

document.body.appendChild(title);//h1 will go in to body tag

const div = document.getElementById("myDiv");// finding element within id

console.log("target div:", div);//prints details of tag

const newButton = document.createElement("button");//creates button element

newButton.innerText ="Press me";//update text of inner element
div.prepend(newButton);//adds button to existing div


//event handling
const greet = () => console.log("hello world");//instruction for new button

newButton.onClick = greet;//button now has function added
newButton.addEventListener("click",greet);

const newPara = document.createElement("p");
newPara.innerText = "new paragraph insertion";
document.body.appendChild(newPara);

const newHead = document.createElement("h1");
newHead.innerText = "Something interesting";
document.body.appendChild(newHead);

const newPara2 = document.createElement("p");
newPara2.innerText = "new paragraph insertion";
document.body.appendChild(newPara2);
document.body.removeChild(newPara2);

const newButton2 = document.createElement("button")
newButton2.innerText="Hooray!";
document.body.prepend(newButton2);


const makePara = () => {
    const newPara3 = document.createElement("p");
    newPara3.id = "para3ID"
    newPara3.innerText="Longer way?";
    document.body.appendChild(newPara3);
}
makePara()

const updatePara = () => {
    const existingPara = document.getElementById("paraId");
    console.log(existingPara);
    const newText = document.getElementById("paraText").value;
    console.log(newText);
    existingPara.innerText = newText;
}

const deletePara = () => {
    const existPara = document.getElementById("paraId");
    existPara.remove();
}



