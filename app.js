//1 Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

// const a = parseInt(prompt("Digite o número para variável A."))
// const b = parseInt(prompt("Digite o número para variável B."))
// const c = parseInt(prompt("Digite o número para variável C."))
// const somaAB = parseInt(a + b)
// const verificacao = somaAB > c ? "a soma é maior que o valor da variável C" : "a soma é menor que o valor da variável C"

// isNaN(a) || isNaN(b) || isNaN(c) ? alert("Digite números válidos.") : (alert(`A soma entre a variavel A e B é ${somaAB} e ${verificacao}`))
    
// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

// //Solicita o número para o usuário
// const numero = parseInt(prompt("Digite seu número."));

// //Verificação se é positivo ou negativo
// const validacaoPositivo = numero >= 0 ? `positivo` : `negativo`

// //Verificação se é par ou impar
// const validacaoParImpar = numero % 2 == 0 ? `par`: `impar`

// // Validação se é um número e sendo um número exibe o se é impar ou par, e postivio ou negativo.
// isNaN(numero) ? alert("Digite um número valido.") : alert(`O número escolhido é ${numero} ele é ${validacaoPositivo}, e ${validacaoParImpar}.`)

// 3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, 


// // Solicita o número para A
// const a = parseInt(prompt("Digite o número para variável A")) 

// // Solicita o número para B
// const b = parseInt(prompt("Digite o número para variável B"))

// //Para usar o "Return" em uma validação a fim de parar a validação é preciso usar dentro de uma function

// function validacao() {
//     let c; // Inicializei a variável C

//     if (isNaN(a) || isNaN(b)) {
//         alert('Digite um valor válido.')
//         return
//     } // Validação se é um número, caso não seja quebra no return

//     if (a === b) {
//         c = a + b
//     } else {
//         c = a * b
//     } // reatribuição do valor de C, para cada condicional
    
//     console.log(c) // Exibição de C
// }

// validacao(); // Chamando a função

//4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

// const numero = parseInt(prompt("Digite aqui o número.")) // Solicitando número

// function validacao() {
//     if (isNaN(numero)) {
//         alert('Digite um valor válido.')
//         return
//     } // Validação se é número

//     console.log("Antecessor: " + (numero - 1), "Número: " + numero, "Sucessor: " + (numero+1)) // lógica
// }

// validacao();

// 5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

// const salarioMinimo = Number(1293.20)
// const salarioUsuario = Number(prompt("Digite seu salário atual."))

// const qntSalarioMin = salarioUsuario/salarioMinimo

// console.log(qntSalarioMin.toFixed(2))

// 6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

// function validacao() {
//     const valor = Number(prompt("Digite qualquer valor"));
//     const reajuste = 0.05;
//     const valorNovo = valor + (valor*reajuste)

//     if (isNaN(valor)) {
//         alert('Digite um valor válido.')
//         return
//     } // Validação se é número

//     // console.log(`Seu valor é R$${valor.toString().replace('.',',')} com um reajuste de ${reajuste.toString().replace('.',',')} seria valor novo de: R$${ Separar variaveis

//     const valorFormatado = valor.toFixed(2).toString().replace('.',',');
//     const valorNovoFormatado = valorNovo.toFixed(2).toString().replace('.',',');

//     console.log(`Seu valor inicial é de R$${valorFormatado} com um reajuste de 5% o novo valor seria de R$${valorNovoFormatado}.`)
// }


// validacao()

// 8 - faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.

// function validacao() {
//     // coletando valores
//     const valor1 = parseInt(prompt("Digite um valor:"))
//     const valor2 = parseInt(prompt("Digite um valor:"))
//     const valor3 = parseInt(prompt("Digite um valor:"))
//     //inicializando array 
//     const valores = [];
//     //Lógica de validação de número
//     if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
//         alert('Digite um valor válido.')
//         return
//         } 
//         // lógica de validação se os números são diferentes
//         else if (valor1 != valor2 && valor2 != valor3 && valor1 != valor3) {
//             // lógica usando sort() para deixar em valores decrescentes
//             valores.push(valor1,valor2,valor3);
//             valores.sort((a,b)=> b-a)
//             console.log(valores)
//         } else {
//             alert("Digite valores diferentes.")
//         }
// }
// // validacao();

// 9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição -- Fazxer dps

// de acordo com a tabela abaixo:

// Fórmula do IMC = peso / (altura) ²

// Tabela Condições IMC

  

//  Abaixo de 18,5   | Abaixo do peso          

//  Entre 18,6 e 24,9 | Peso ideal (parabéns)  

//  Entre 25,0 e 29,9 | Levemente acima do peso

//  Entre 30,0 e 34,9 | Obesidade grau I 

//  Entre 35,0 e 39,9 | Obesidade grau II (severa)

//  Maior ou igual a 40 | Obesidade grau III (mórbida)

// 10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.


let continua = true; //Entrada de variavel para limitar o laço de repetição
const notas = []; // Entrada de variavel para array
const somaNotas = 0 // Entrada de variavel para somar as notas do array


while(continua) {
    // let nota = parseInt(prompt("Insira as notas das provas")); // trocar para const pois não vai ser reatribuida
    const nota = parseInt(prompt("Insira as notas das provas"));
    validacao(nota);
    const limite = prompt("Deseja continuar adicionando notas?");
    if (limite == "sim") {
        continua = true
    } else {
        continua = false
    }
} // Laço de repetição 

function validacao(x) {
    if(isNaN(x)) {
        alert("Digite um valor válido.")
        return
    } else {
        notas.push(x)
    }
} // Validação das notas inseridas se são números ou o usuário colocou dados errados

function calculaNotas(array) {
    let i = 0

    while ( i < array.length) {
        somaNotas += array[i]
        i++
    }
    return somaNotas
} // Função para calcular todas as notas do array

function calculaMedia(notasSomadas,array) {
    return Math.round(notasSomadas / array.length)
} // Função que calcula média das notas do usuário

calculaNotas(notas) // Chamada da função
console.log("A média desse aluno foi de: " + calculaMedia(somaNotas, notas)) // Chamada da função de média e exibição no console

