/***************************************************************************
 * Objetivo: fazer um sistema de cadastro de notas do aluno e a media final*
 * data: 04/08/23                                                          *
 * autor: Jessica Pereira dos Santos                                       *
 * versão: 1.0                                                             *
 ***************************************************************************/

/* var- permite criar uma variavel de escopo global, ou seja, irá existir em todo o projeto
   let- permite criar uma variavel de escopo local (bloco), ou eja, irá existir apenas dentro
    daquele bloco
    const- permite criar uma constante que pode ser de escopo local ou global, sempre utilizamos 
    em situações onde não havera mudança de conteudo  */

/* operadores de comparação 
    ==  Comparação de conteúdo entre duas variaveis
    <   menor
    >   maior
    <=  menor ou igual
    >=  maior ou igual
    !=  diferente 
    ===  comparação de conteúdos iguais e tipos de dados iguais 
    !==  comparação de contaúdos diferentes e tipos de dados iguais 
    !==  comparação de contaúdos iguais e tipos de dados diferentes
    
operadores logicos 
    E        AND  &&
    OU       OR   ||
    NEGAÇÃO  NOT  !

conversão de string para numero
        parseInt() - converte uma string para numeros inteiros 
        parseFloat() - converte uma string para numros reais
        number() - converte uma string para numero inteiro ou real conforme a necessidade 

        toFixed() - permite ajustar quantidade de casas decimais    
        toUpperCase() - converte os caracteres em maiusculo
        toLowerCase() - converte os caracteres em minusculo  
    */
// import da biblioteca de entrada de dados via teclado 
var readline = require('readline');

// criando um objeto entradaDeDados para digitação com o usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// entrada de dados do aluno 
entradaDeDados.question('Digite o nome do aluno que deseja cadastrar: ', function (nomeAluno) {
    let aluno = nomeAluno;
        console.log(' Bem vindo ao cadastro do aluno(a) ' + aluno);

    // entrada de notas do aluno 
    entradaDeDados.question('Digite a nota do primeiro bimestre: ', function (primeiraNota) {
        let nota1 = primeiraNota.replace(",",".");

        entradaDeDados.question('Digite a nota do segundo bimestre: ', function (segundaNota) {
            let nota2 = segundaNota.replace(",",".");

            entradaDeDados.question('Digite a nota do terceiro bimestre: ', function (terceiraNota) {
                let nota3 = terceiraNota.replace(",",".");

                entradaDeDados.question('Digite a nota do quarto bimestre: ', function (quartaNota) {
                    let nota4 = quartaNota.replace(",",".");



                    if(nota1 =='' || nota2 == '' || nota3 == '' || nota4 == ''){

                        console.log('ERRO é obrigatório informar todas as notas !!!')

                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

                        console.log('é obrigatório a entrada de dados somente com numeros!')
                        
                    }else if(nota1 > 10 || nota1< 0 || nota2> 10 || nota2< 0 || nota3> 10 || nota3< 0 ||nota4> 10 ||nota4< 0){

                        console.log('As notas informadas tem que ser maiore que 0 e menores que 10')
                          
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
                             console.log('As notas foram registradas com sucesso!');
                             console.log("A média do aluno(a) é:" + media.toFixed(1).replace('.',','));
                    }


                    entradaDeDados.close();
                })
            })
        })
    })
});
