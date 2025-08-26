/* -- FOR
let cats = ["Charlie", "Mia", "Aurora"];
let info = "Meus gatitos chamam: "

for(let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1){
        info += "and" + cats[i] + "."
    } else {
        info += cats[i] + ", ";
    }

    console.log("Contador: "+i);
    console.log("Gatos: "+cats[i])
}
console.log(info);
*/

/*
let cats = ["Charlie", "Mia", "Aurora"];
let info = "Meus gatitos chamam: "
let i = 0;

while(i < cats.length){
    if (i === cats.length - 1){
        info += "and " + cats[i] + "."
    } else {
        info += cats[i] + ", ";
    }

    console.log("Contador: "+i);
    console.log("Gatos: "+cats[i])
    i++
}
console.log(info)
*/

/*
let lista = ["mariany", "morais", 9, ["mao", "pe"]];
let texto = "texto";

console.log(lista);
console.log(texto.charAt(1));
console.log(texto[1])
*/

/*
function helo(n1, n2){
    console.log(n1 + n2);
}

helo(3,7);

let soma = function(n1, n2){
    return n1 + n2;
}
console.log(soma(3,7));
*/

/*
let sub = (n1, n2) => {
    return n1 - n2;
}
console.log(sub(3,7));
*/