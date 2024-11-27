var idade = parseInt(prompt("Digite sua idade: "));
var CNH = parseInt(prompt("Possui CNH? Digite '1' se possui e digite '2' se não possui"));
var CE = parseInt(prompt("Possui alguma condição especial? digite '1' se tiver e digite '2' se não tiver"));

if(idade >= 18 && CNH === 1){
    alert("EStá apto para dirigir")}

else if (CE === 1){
alert("Está apto dirigir")
}else{
    alert("Não esta apto");
}