let n = prompt("Digite um número: ");

for(let i = 1; i <= n; i++){
    if(n > 0){
        console.log(i);
    } else if (n < 0) {
        alert("Não é permitido valores menores que 0");
        n = prompt("Digite o número novamente: ");
    }
}