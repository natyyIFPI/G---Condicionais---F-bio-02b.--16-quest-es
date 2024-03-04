/*Uma fruteira está vendendo frutas com a seguinte tabela de preços:
 Até 5 Kg Acima de 5 Kg
 Morango R$ 2,50 por Kg R$ 2,20 por Kg
 Maçã R$ 1,80 por Kg R$ 1,50 por Kg
 Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
 ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
 morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.*/

import { question } from "readline-sync";

function main(){

const morangoKg = parseInt(question(`Informe o valor em KG de morangos : `))
const maçaKg = parseInt(question(`Informe o valor em KG maça :  `))

//verificar KG morango

let preçomorango;

if(morangoKg <= 5 ){

  preçomorango = morangoKg * 2.00
  promt(` VALOR TOTAL MORANGO DE 2.00 : ${preçomorango.toFixed(2)} reais`)
    
}else if ( morangoKg > 5 ){

    preçomorango = morangoKg * 2.20
    promt(`VALOR TOTAL MORANGO DE 2.20 : ${preçomorango.toFixed(2)} reais`)
}


//verificar KG maça

let preçomaça;

if( maçaKg <= 5 ){ 

  preçomaça = maçaKg * 1.80
   promt(`VALOR TOTAL MAÇA DE 1.80 : ${preçomaça.toFixed(2)} reais`)

}else if( maçaKg > 5 ){

    preçomaça = maçaKg * 1.50
    promt(`VALOR TOTAL MAÇA DE 1.50 : ${preçomaça.toFixed(2)} reais`)
}

//VERIFICAR O TOTAL E DESCONTO

const valortotalfrutas = preçomorango + preçomaça
const totaldeKg = morangoKg + maçaKg

promt(`===============================`)
promt(`VALOR TOTAL A PAGAR : ${valortotalfrutas} reais`)


let desconto;

if( totaldeKg >= 8 || valortotalfrutas >= 25 ){

   desconto = calcularDesconto(valortotalfrutas,10)
   promt(`COM DESCONTO DE 10 % : ${desconto} reais`)
}






}

main()

function promt(texto){

    return console.log(texto)
}

function calcularDesconto(n1,n2){

    return n1 - (n1 * (n2 / 100))
}





