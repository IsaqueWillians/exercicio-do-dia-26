var valorA = parseFloat(prompt("insira o valor de A"));
var valorB = parseFloat(prompt("insira o valor de B"));
var valorC = parseFloat(prompt("insira o valor de C"));

if (valorA == valorB && valorA == valorC ){
    alert("o triangulo é equilatero!!");
}
else if (valorA != valorB && valorC != valorB){
    alert("o triangulo é escaleno");
}else{
    alert("o triangulo é isoceles");
}