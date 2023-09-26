// switch

//let opcao = 4;

/*
let opcao = parseInt(prompt("Digite uma opção"));
let opcao = +prompt("Digite uma opção")

switch(opcao){
    case 1:
        document.write("Primeira Opção")
        break;
    case 2:
        document.write("Segunda Opção")
        break;
    case 3: 
        document.write("Terceira opção")
        break;
    default :
        document.write("nehuma das opções validas")
        break;

}
*/

// Incremento e decremento

let valor=7
console.log(valor)
valor = valor-1
console.log(valor);

let valor1=10
console.log(valor1)
valor1 +=3;
console.log(valor1)

//for (laço de repetição)

for (let i=0; i< 10; i++){
    console.log("Agora i vale" +i);
}

//for com array

let carros=["fusca","belina","Marea Turbo","Kombi","Gurgel","passat"]

for (let i=0; i< carros.length; i++){
    console.log(carros[i])
}

// for com of

for (let carro of carros){
    console.log(carro)
}

// while - sem o cont++ entra em um lup infinito
/*
let cont =0
while(cont<20){
    console.log("Passagem de numeros " +cont)
    cont++
}
*/
//do while

let valor2=0

do{
    console.log("Passagem" +valor2)
    valor2++
}while(valor2 <0)

//Função

function teste(num1,num2){
    return num1+num2
}
console.log(teste(11,6))

function avisar(){
    alert("Avisar")
    alert("Avisar parte 2")
}
avisar()