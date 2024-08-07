const p1 = document.getElementById("p1");//p1 es solo el nombre que estoy asignando a la variable
const h2list = document.getElementsByClassName("subtitle");
const textInput = document.getElementById("username-input1");

const element1 = document.querySelector("#p1"); // # para id
const element2 = document.querySelector(".subtitle"); // . para clase

console.log(p1);
console.log(h2list);
console.log(textInput1);

//p1.textContent = "Texto dinámico"; // el texto puede ir cambiando, en este caso el Lorem Ipsum es lo que se modifica, o incluso podría quedar sin el Lorem Ipsum en html, mientras esté marcado con class o id.


textInput.addEventListener("input", (e) => {
    //console.log(e.target.value);
    p1.textContent = e.target.value; // para que el texto que metemos en input se imprima debajo
})
//datos caracteres individuales/ value , el texto completo que se introcuce

const p2 = document.getElementById("p2");//p1 es solo el nombre que estoy asignando a la variable
const h2list2 = document.getElementsByClassName("subtitle");
const textInput2 = document.getElementById("username-input2");

const elementA = document.querySelector("#p2"); // # para id
const elementB = document.querySelector(".subtitle"); // . para clase

console.log(p2);
console.log(h2list2);
console.log(textInput2);