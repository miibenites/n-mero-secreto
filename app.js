alert("Boas-Vindas ao Jogo do Número Secreto");
let numeroSecreto = 4;
let chute;

while( chute!= numeroSecreto){ 
    chute = prompt("Escolha um número entre 1 e 10?");
if(chute== numeroSecreto){
    console.log(`Isso aí!!! Você descobriu o número secreto ${numeroSecreto}`)
}
else{
    if(numeroSecreto> chute){
        alert(`O número secreto é maior que ${chute}`)
    } else{
        alert(`O número secreto é menor que ${chute}`)
    }
}
}