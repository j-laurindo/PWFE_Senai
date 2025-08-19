let btn = document.querySelector("button");

function random(num){
    return Math.floor(Math.random() * (num + 1));
}

btn.addEventListener("click", () => {
    let cor =
    "rgb(" + random(255) + "," + random(255) 
    + "," + random(255) + ")";
    document.body.style.backgroundColor = cor;
});

// function bgChange(event){
//     let cor =
//     "rgb(" + random(255) + "," + random(255) 
//     + "," + random(255) + ")";

//     event.target.style.backgroundColor = cor
// }

// btn.addEventListener("click", bgChange)
  
let ele = document.querySelector("h1");
let novo = document.createElement("h1");
ele.appendChild(novo);
novo.innerText
console.log(ele.innerHTML);