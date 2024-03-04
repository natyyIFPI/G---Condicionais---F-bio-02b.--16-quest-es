/*  O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
Até 5 Kg Acima de 5 Kg
File R$ 4,90 por Kg R$ 5,80 por Kg
Alcatra R$ 5,90 por Kg R$ 6,80 por Kg
Picanha R$ 6,90 por Kg R$ 7,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.*/

import { question } from "readline-sync";

function main(){

prompt(` =============== COMPRA DE CARNE NA PROMOÇAO ============`)

const tipocarne = question(`Informe a letra para o tipo de Carne (F - File , A - Alcatra , P - Picanha ) : `)
const quantidCarne = parseInt(question(` Informe a quantidade KG desejada : `))
const tipodepagamento = question(`Informe o tipo de pagamento (pix , cartao , especie ): `)


let preçototal;

if(tipocarne === `F`){

   if(quantidCarne <= 5 ){

      preçototal = quantidCarne * 4.90

   }else if(quantidCarne > 5 ){

    preçototal = quantidCarne * 5.80

   }
}else if(tipocarne === `A`){
    if(quantidCarne <= 5 ){

        preçototal = quantidCarne * 5.90

    }else if( quantidCarne > 5 ){

        preçototal = quantidCarne * 6.80
    }
}else if( tipocarne === `P`){

    if(quantidCarne <= 5 ){

        preçototal = quantidCarne * 6.90

    }else if( quantidCarne > 5 ){

        preçototal = quantidCarne * 7.80

    }

}

//desconto de 5%

let valortotalDesconto;
let valorapagar;

if(tipodepagamento === `cartao`){

    valortotalDesconto = calcularDesconto(preçototal,5)
    valorapagar = valortotalDesconto
}else{
     
    valortotalDesconto = `Nao teve desconto`
    valorapagar = preçototal
}




prompt (`
===============================
         CUPOM FISCAL

TIPO DE CARNE : ${tipocarne}
QUANTIDADE DE CARNE(KG) :${quantidCarne} Kg

PREÇO TOTAL : ${preçototal} reais
TIPO DE PAGAMENTO : ${tipodepagamento}
VALOR COM DESCONTO : ${valortotalDesconto} 

VALOR A PAGAR : ${valorapagar} reais

==============================`)







}

main ()

function prompt(texto){
    return console.log(texto)
}


function calcularDesconto(n1,n2){

    return n1 - (n1 * (n2 / 100))
}






