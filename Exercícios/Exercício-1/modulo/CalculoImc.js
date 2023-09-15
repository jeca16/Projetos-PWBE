/******************************************************************************
* Objetivo:criar um programa que calcule o IMC e informe a situação da pessoa *
* data: 15/09/23                                                              *
* autor: Jessica Pereira dos Santos                                           *
* versão: 1.0                                                                 * 
******************************************************************************/

const calcularImc = function(valorPeso, valorAltura){
    let peso = String(valorPeso).replace(',','.');
    let altura = String(valorAltura).replace(',','.');
    let resultado;

    if(peso =='' || altura == '')
        console.log('ERRO!!: É  OBRIGATORIO A ENTRADA DE TODOS OS VALORES')
    else if (isNaN(peso) || isNaN(altura))
        console.log('ERRO!!: É OBRIGATORIO A ENTRADA APENSA DE NÚMEROS')
    else{
        peso = Number(peso)
        altura = Number(altura)
        resultado = peso / (altura * altura)
        console.log('Seu IMC é ' + resultado)

        if(resultado < 18,5)
            console.log('Você está abaixo do peso')
        else if(resultado > 18,5 && resultado < 24,9)
            console.log('Você está com peso normal')
        else if(resultado > 25 && resultado < 29,9)
            console.log('Você está acima do peso')
        else if( resultado > 30 && resultado < 34,9)
            console.log('Você está com obesidade I')
        else if (resultado > 35 && resultado < 39,9)
            console.log('Você está com obesidade II')
        else if (resultado > 40)
            console.log('Você está com obesidade III')
    }
   
}

console.log(calcularImc('53','1,57'))

// module.exports ={
//         calcularImc
//     }