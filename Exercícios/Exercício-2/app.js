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

entradaDeDados.question('informe o seu sexo [f - m]: ', function (sexoProfessor) {
    let sexoProf = sexoProfessor;
    if (sexoProf == '') {
        console.log("erro!!!: é obrigatorio informar o sexo do Professor!!")
    } else if (sexoProf == 'f') {
        entradaDeDados.question('Digite o nome da professora: ', function (nomeProfessora) {
            let nomeProf = nomeProfessora;
            if (nomeProf == '') {
                console.log("erro!!!: é obrigatorio informar o nome da Professora!!")
            }else if (sexoProf == 'm') {
        entradaDeDados.question('Digite o nome do professor: ', function (nomeProfessor) {
            let nomeProf = nomeProfessor;
            if (nomeProf == '') {
                console.log("erro!!!: é obrigatorio informar o nome do Professor!!")
            }
        })
    }
        })
    }

    entradaDeDados.question('informe o sexo do aluno [f - m]: ', function (sexoAluno) {
        let sexAluno = sexoAluno;
        if (sexAluno == '') {
            console.log("erro!!!: é obrigatorio informar o sexo do aluno!!")
        } else if (sexAluno == 'f') {
            entradaDeDados.question('Digite o nome da aluna: ', function (nomeAluna) {
                let nome = nomeAluna;
                if (nome == '') {
                    console.log("erro!!!: é obrigatorio informar o nome da aluna!!")
                } else if (sexAluno == 'm') {
                    entradaDeDados.question('Digite o nome do aluno: ', function (nomeAluno) {
                        let nome = nomeAluno;
                        if (nome == '') {
                            console.log("erro!!!: é obrigatorio informar o nome do aluno!!")
                        }
                    })
                }
            })
        }

        entradaDeDados.question('Digite o nome do curso: ', function (nomeCurso) {
            let curso = nomeCurso;

            if (curso == '') {
                console.log("erro!!!: é obrigatorio informar o nome do curso!!")
            }

            entradaDeDados.question('Digite o nome da disciplina: ', function (nomeDisciplina) {
                let disciplina = nomeDisciplina;

                if (disciplina == '') {
                    console.log("Erro!!!: é obrigatorio informar o nome da disciplina!!")
                }
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

                                    if (avaliacao == 'Aprovado') {
                                        if (sexAluno == 'f') {
                                            console.log(" Aprovada")
                                            console.log("Relatório da aluna:")
                                            console.log("a aluna " + nome + "foi aprovada na disciplina" + disciplina)
                                            console.log("curso: " + curso)
                                            if (sexoProf == 'f') {
                                                console.log("professora: " + nomeProf)
                                                console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            } else if (sexoProf == 'm') {
                                                console.log("professor: " + nomeProf)
                                                console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            }
                                        } else if (sexAluno == 'm') {
                                            console.log("Aprovado")
                                            console.log("Relatório do aluno:")
                                            console.log("o aluno " + nome + "foi aprovado na disciplina" + disciplina)
                                            console.log("curso: " + curso)
                                            if (sexoProf == 'f') {
                                                console.log("professora: " + nomeProf)
                                                console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            } else if (sexoProf == 'm') {
                                                console.log("professor: " + nomeProf)
                                                console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            }
                                        }
                                    }

                                    if (avaliacao == 'Reprovado') {
                                        if (sexAluno == 'f') {
                                            console.log("Reprovada")
                                            console.log("Relatório da aluna:")
                                            console.log("a aluna " + nome + "foi reprovada na disciplina" + disciplina)
                                            console.log("curso: " + curso)
                                            if (sexoProf == 'f') {
                                                console.log("professora: " + nomeProf)
                                                console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            } else if (sexoProf == 'm') {
                                                console.log("professor: " + nomeProf)
                                                console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            }

                                        } else if (sexAluno == 'm') {
                                            console.log("Aprovado")
                                            console.log("Relatório do aluno:")
                                            console.log("o aluno " + nome + "foi aprovado na disciplina" + disciplina)
                                            console.log("curso: " + curso)
                                            if (sexoProf == 'f') {
                                                console.log("professora: " + nomeProf)
                                                console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            } else if (sexoProf == 'm') {
                                                console.log("professor: " + nomeProf)
                                                console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4)
                                                console.log("media final: " + resultadoMedia)
                                            }
                                        }


                                    }





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
                                            else {
                                                let resultadoExame = console.log(CalculoMedia.novaMedia(resultadoMedia, notaExame))
                                                let novaSituacao = console.log(CalculoMedia.novaSituacao(newMedia))

                                                if (novaSituacao == 'Aprovado em exame') {
                                                    if (sexAluno == 'f') {
                                                        console.log("Aprovada em exame")
                                                        console.log("Relatório da aluna:")
                                                        console.log("a aluna " + nome + "foi aprovada na disciplina" + disciplina)
                                                        console.log("curso: " + curso)
                                                        if (sexoProf == 'f') {
                                                            console.log("professora: " + nomeProf)
                                                            console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        } else if (sexoProf == 'm') {
                                                            console.log("professor: " + nomeProf)
                                                            console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        }
                                                    } else if (sexAluno == 'm') {
                                                        console.log("Aprovado em exame")
                                                        console.log("Relatório do aluno:")
                                                        console.log("o aluno " + nome + "foi aprovado na disciplina" + disciplina)
                                                        console.log("curso: " + curso)
                                                        if (sexoProf == 'f') {
                                                            console.log("professora: " + nomeProf)
                                                            console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        } else if (sexoProf == 'm') {
                                                            console.log("professor: " + nomeProf)
                                                            console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        }
                                                    }

                                                } else {
                                                    if (sexAluno == 'f') {
                                                        console.log("Relatório da aluna:")
                                                        console.log("a aluna " + nome + "foi reprovada na disciplina" + disciplina)
                                                        console.log("curso: " + curso)
                                                        if (sexoProf == 'f') {
                                                            console.log("professora: " + nomeProf)
                                                            console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        } else if (sexoProf == 'm') {
                                                            console.log("professor: " + nomeProf)
                                                            console.log("notas da aluna: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        }
                                                    } else if (sexAluno == 'm') {
                                                        console.log("Relatório do aluno:")
                                                        console.log("O aluno " + nome + "foi reprovado na disciplina" + disciplina)
                                                        console.log("curso: " + curso)
                                                        if (sexoProf == 'f') {
                                                            console.log("professora: " + nomeProf)
                                                            console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        } else if (sexoProf == 'm') {
                                                            console.log("professor: " + nomeProf)
                                                            console.log("notas do aluno: " + nota1 + nota2 + nota3 + nota4 + nota5)
                                                            console.log("media final: " + resultadoMedia)
                                                            console.log("media final do exame: " + resultadoExame)
                                                        }

                                                    }

                                                }
                                            }
                                        })
                                    }
                                    entradaDeDados.close()
                                }

                            })

                        })
                    })
                })

            })
        })
    })
})












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
