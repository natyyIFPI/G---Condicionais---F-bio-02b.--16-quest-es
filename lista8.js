/*Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e
a quantidade de hora é 220.
Salário Bruto: (5 * 220) : R$ 1100,00
(-) IR (5%) : R$ 55,00
(-) INSS ( 10%) : R$ 110,00
FGTS (11%) : R$ 121,00
Total de descontos : R$ 165,00
Salário Liquido : R$ 935,00*/

import { question } from "readline-sync";


function calcularDescontoIR(salarioB){

    if(salarioB <= 900){

        return 0;

    }else if(salarioB <= 1500){

        return salarioB * 0.05

    }else if(salarioB <= 2500){

        return salarioB * 0.1 

    }else{
        return salarioB * 0.02
    }
}


function prompt(texto){
    return console.log(texto)
}


function main(){

const valorhora = parseFloat(question(`Informe o valor por Hora : `))
const horastrabalhadas = parseFloat(question(`Informe o valor de horas trabalhadas : `))

const salariobruto = valorhora * horastrabalhadas
const descontoIR = calcularDescontoIR(salariobruto)
const descotoINSS = salariobruto * 0.1
const descontosindicato = salariobruto * 0.03
const fgts = salariobruto * 0.11

const totaldescontos = descontoIR + descotoINSS + descontosindicato
const salarioliquido = salariobruto - totaldescontos


prompt(`
=======================================

SALARIO BRUTO : R$ ${salariobruto.toFixed(2)} 
(-) IR (5%) : R$ ${descontoIR.toFixed(2)}
(-) INSS ( 10%) : R$ ${descotoINSS.toFixed(2)}
FGTS (11%) : R$ ${fgts.toFixed(2)}
Total de descontos : R$ ${totaldescontos.toFixed(2)}
Salário Liquido : R$ ${salarioliquido.toFixed(2)}

========================================


`)




}
main()

