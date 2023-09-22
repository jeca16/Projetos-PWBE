/***************************************************************************************************************
 * objetivo: Criar um sistema que gerencie as médias escolares de uma universidade                             *
 * data: 22/09/23                                                                                              *
 * autor: Jessica Pereira dos Santos                                                                           *
 * versão:1.0                                                                                                  *
 **************************************************************************************************************/

var CalculoMedia = require('./modulo/CalculoMedia.js')
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite a primeira nota: ', function (primNota) {
    let nota1 = primNota

    entradaDeDados.question('Digite a segunda nota: ', function (segunNota) {
        let nota2 = segunNota

        entradaDeDados.question('Digite a terceira nota: ', function (terNota) {
            let nota3 = terNota

            entradaDeDados.question('Digite a quarta nota: ', function (quarNota) {
                let nota4 = quarNota

                if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '')
                    console.log('ERRO!! é obrigatorio informar as quatro notas para calcular a media')
                else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
                    console.log('ERRO!! é obrigatorio informar apenas numeros')
                else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100)
                    console.log('ERRO!! É OBRIGATORIO INFORMAR NUMERO ATE 100')
                else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0)
                    console.log('ERRO!! Informe apenas numeros acima de 0')
                else {
                    let resultadoMedia = CalculoMedia.calcularMedia(nota1, nota2, nota3, nota4)
                    let avaliacao = console.log(CalculoMedia.situacao(resultadoMedia))

                if (avaliacao == 'está em exame') {
                    entradaDeDados.question('Digite a nota de exame', function (quinNota) {
                        let nota5 = quinNota;
                        if (nota5 == '')
                            console.log('ERRO!! é obrigatorio informar a nota para calcular a nova media')
                        else if (isNaN(nota5))
                            console.log('ERRO!! é obrigatorio informar apenas numero')
                        else if (nota5 > 100)
                            console.log('ERRO!! É OBRIGATORIO INFORMAR NUMERO ATE 100')
                        else if (nota5 < 0)
                            console.log('ERRO!! Informe apenas numero acima de 0')
                        else{
                            let notaExame = console.log(CalculoMedia.novaMedia(resultadoMedia, notaExame))

                        }
                    })
                }
                entradaDeDados.close()
                }

            })

        })
    })
})



// ● Nome do curso;
// ● Nome da disciplina;
// ● 4 Notas que podem ser entre 0 e 100;
// Requisitos do Sistema

// o Os valores digitados nas notas devem obrigatoriamente estar entre
// 0 e 100, caso algum valor estiver fora desta sequência o sistema
// deverá apresentar um erro;

// o Nenhuma entrada de dados poderá ficar sem preenchimento;

// o Para o sistema apresentar o status de aprovado do aluno a sua
// média deverá ser acima de 70.

// o Caso a média do aluno estiver abaixo de 50 ele estará reprovado;

// o Se a média estiver entre 50 e 69, o aluno estará de exame, e neste
// caso o sistema deverá solicitar a nota que o aluno teve no exame.

// o Para o aluno ser aprovado no exame, a nota do exame e a média
// anterior precisa ficar acima de 60, assim o aluno estará aprovado
// no exame.

// o Na exibição do Relatório do aluno as palavras aluno e professor,
// deverá ser exibida conforme o sexo informado.

// ▪ Ex: Se o sexo do professor for feminino, deverá aparecer
// professora, caso contrário deverá ser professor.

// ▪ Ex: Se o sexo do aluno for feminino, deverá aparecer aluna,
// caso contrário deverá ser aluno.




// A saída do sistema deverá obedecer a seguinte estrutura:
//  Relatório do aluno:
// O aluno [ xxxxxx ] foi [aprovado] na disciplina [ xxxxxxxx ].
// Curso: xxxxxxxx
// Professor: xxxxxxxx
// Notas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame
// Média Final: xxxxxx
// Média final do Exame: xxxx 
