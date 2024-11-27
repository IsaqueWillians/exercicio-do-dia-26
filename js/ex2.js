var nota1 = parseFloat(prompt("escreva o valor da nota 1"));
var nota2 = parseFloat(prompt("escreva o valor da nota 2"));

var media = (nota1 + nota2) / 2;

if(media < 4){
    alert("reprovado jumento");
}
else if((media >= 4) && (media <= 7)){
    alert("recuperação");
}
else if(media >= 11){
    alert("ganhou um biscoito");
}
else{("aprovado")}