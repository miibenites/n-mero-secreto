alert("Boas-Vindas ao Jogo do Número Secreto");
let numeroSecreto = 4;
let chute;
let tentativas =1;

while( chute!= numeroSecreto){ 
    chute = prompt("Escolha um número entre 1 e 10?");
if(chute == numeroSecreto){

    break
    }
else{
    if(numeroSecreto> chute){
        alert(`O número secreto é maior que ${chute}`)

    } else{
        alert(`O número secreto é menor que ${chute}`)
    }
    } tentativas ++;
}

let palavraTentativa = tentativas > 1 ? "tentativas": "tentativa";
alert(`Isso aí!!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
    // if (tentativas>1){
    // alert(`Isso aí!!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
  // else{
    // alert(`Isso aí!!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);