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

// 10 e 11- Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.


//  let continua = true; //Entrada de variavel para limitar o laço de repetição
//  const notas = [];  //Entrada de variavel para array
//  let somaNotas = 0  //Entrada de variavel para somar as notas do array

//  while(continua) {
//      const nota = parseInt(prompt("Insira as notas das provas"));
//      validacao(nota);
//      const limite = prompt("Deseja continuar adicionando notas?").toLowerCase();
//      if (limite == "sim") {
//          continua = true
//      } else {
//          continua = false
//      }
//  } // Laço de repetição 

//  calculaNotas(notas) // Chamada da função
//  const media = calculaMedia(somaNotas, notas)
//  const apvRep = situacao(media)

//  function validacao(x) {
//      if(isNaN(x)) {
//          alert("Digite um valor válido.")
//          return
//      } else {
//          notas.push(x)
//      }
//  }  //Validação das notas inseridas se são números ou o usuário colocou dados errados

//  function calculaNotas(array) {
//      let i = 0

//      while ( i < array.length) {
//          somaNotas += array[i]
//          i++
//      }
//      return somaNotas
//  } // Função para calcular todas as notas do array

//  function calculaMedia(notasSomadas,array) {
//      return Math.round(notasSomadas / array.length) 
//  } // Função que calcula média das notas do usuário

//  function situacao(media) {
//     return media >= 7 ? "aprovado." : "Reprovado"
//  }

//  console.log("A média desse aluno foi de: " + media + ". E está " + apvRep) // Chamada da função de média e exibição no console

//12 Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

// const valorProduto = Number(prompt("Qual valor do produto?"));
// let valorFinal = 0

// function formaPag() {
//     const formaDePag = Number(prompt("Forma de pagamento: 1- À vista em pix ou dinheiro 2- À vista no cartão de crédito 3- Parcelado no cartão em 2x 4- Parcelado no cartão em 3+"))
//     if (formaDePag == 1){
//         let desconto = valorProduto * 0.15
//         valorFinal = valorProduto - desconto
//         console.log(valorFinal)
//     } else if (formaDePag == 2) {
//         desconto = valorProduto * 0.10
//         valorFinal = valorProduto - desconto
//         console.log(valorFinal)
//     } else if (formaDePag == 3) {
//         valorFinal = valorProduto/2
//         console.log(`Valor do produto é, R$${valorProduto} parcelado em 2x de R$${valorFinal}`)
//     } else if (formaDePag == 4) {
//         const parcelas = Number(prompt("Deseja parcelar em quantas vezes?"))
//         const juros = valorProduto*0.10
//         valorFinal = (valorProduto + juros)/parcelas
//         console.log(`Valor do produto é R$${valorProduto} parcelado em ${parcelas} de R$${valorFinal.toFixed(2)}`)
//     }
// }

// formaPag();

// 13  Faça algoritmo que leia o nome e a idade de uma peso e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. 

// const nome = prompt("Qual seu nome?");
// const idade = Number(prompt("Qual sua idade?"))
// maiorOuMenor(idade);

// function maiorOuMenor(idade) {
//     const maiorOuMenos = idade >= 18 ? "maior" : "menor"
//     return console.log(`${nome} é ${maiorOuMenos} de idade.`)
// }

// 14 Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

// let a = prompt("Qual valor de A")
// let b = prompt("Qual valor de B")

// let temp = a // so atribuir outra variavel ao valor de A
// a = b
// b = temp

// console.log(a,temp)

// 15Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.

// const ano = prompt("Qual ano de nascimento?")
// const anosVividos = 2024 - ano
// const mesesVividos = anosVividos * 12
// const diasVividos = (mesesVividos*30) + 5

// console.log(anosVividos,mesesVividos,diasVividos)

// 16 Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.

// const lado1 = Number(prompt("Qual tamanho do primeiro lado"))
// const lado2 = Number(prompt("Qual tamanho do segundo lado"))
// const lado3 = Number(prompt("Qual tamanho do terceiro lado"))

// if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2)  {
//     alert("Esse triangulo pode ser formado")

//     if (lado1 == lado2 && lado2 ==lado3) {
//         alert("Triangulo equilátero")
//     }

//     else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
//         alert("Triangulo Isósceles")
//     }

//     else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
//         alert("Triangulo escaleno")
//     }

// } else {
//     alert("Não pode ser formado")
// }

//18 - Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Francisco seja maior que Sara.

// let alturaFrancisco = 150
// let alturaSara = 110
// let tempo = 0

// let saraMenor = true

// while (saraMenor) {
//     if (alturaSara > alturaFrancisco) {
//         saraMenor = false
//     } else {
//         alturaFrancisco+= 2
//         alturaSara += 3
//         tempo +=1
//     }
//     console.log(tempo)
// }
// console.log(`É preciso de ${tempo} anos para que Sara seja maior que Francisco`)

// function squareDigits(num){
//     const arrayNum = num.toString().split('');
//     let arrSquared = []
  
//     for(let i = 0;i < arrayNum.length;i++) {
//       const digit = Number(arrayNum[i])
//       const squared = Math.pow(digit,2)
//       arrSquared.push(squared.toString())
//   }
//     const squaredConcatenados = arrSquared.join('');
//     const numeroFinal = Number(squaredConcatenados)
//     return numeroFinal  
//   }

//   console.log(squareDigits(412))

// function XO(str) {
  
//   const strSeparada = str.split('')
//   let contadorX = 0
//   let contadorO = 0
  
//   strSeparada.forEach(letra => {
//     if (letra === 'x') {
//        contadorX++
//     } else if(letra === 'o') {
//       contadorO++
//     }
//   })
  
// //   if (contadorX == contadorO) {
//     return true
//   } else if (contadorX != contadorO ) {
//     return false
//   }

//   if (contadorX == 0 && contadorO == 0) {
//     return true
//   }
  
// }

// console.log(XO("assa"))

// function XO(str) {
  
//   const strSeparada = str.toLowerCase().split('')
//   let contadorX = 0
//   let contadorO = 0
  
//   strSeparada.forEach(letra => {
//     if (letra === 'x') {
//        contadorX++
//     } else if(letra === 'o') {
//       contadorO++
//     } 
//   })
  
//   if (contadorX == contadorO) {
//     return true
//   } else if (contadorX != contadorO) {
//     return false
//   }    
  
// }

// const idadePai = 55
// const idadeFilho = 30

// const idadeFilhoDobro = idadeFilho * 2

// const anos = idadePai - idadeFilhoDobro
 

// if (anos > 0) {
//   console.log(anos)
// } else if (anos <= 0) {
//   console.log (-(anos))
// }

// const x = "8 j 8 mBliB8g imjB8B8 jl B"const array = x.split('')console.log(array)const novoArray = array.filter(elemento => elemento != ' ')const sss = novoArray.join('')console.log(sss)

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// const friend = friends => friends.filter(friend => friend.length == 4);

// Write a function to split a string and convert it into an array of words.

// function stringToArray(string){
//     return string.split(' ');
//   }


// function howMuchILoveYou(nbPetals) {
//     const msg = {
//       1: "I love you",
//       2: "a little",
//       3: "a lot",
//       4: "passionately",
//       5: "madly",
//       6: "not at all"
//     }
// let numero = nbPetals % 6;
// if (numero === 0) numero = 6; // Caso seja multiplo de 6

// return msg[numero];
// }

// console.log(howMuchILoveYou(282))

// const a = [2,3,10]
// const b = [19,24,9]
// const x = []
// let mult = a[0] * a[1] *a[2]
// let mult2 = b[0] * b[1] * b[2]


// // console.log(mult - mult2)
// function check(a, x) {
//     for (let elemento of a) {
//      if(elemento === x) {
//         return true
//      }
//     }
//   }
//   console.log(check ([2,3,4], 3))

// const word = ["RafaELa"]
// const wordSeparada = word.toString().split('')

// console.log(wordSeparada)

// const wordSeparadaMaiuscula = word.toString().toUpperCase().split('')
// console.log(wordSeparadaMaiuscula)

// const novoArray = []

// for(let i =0; i<wordSeparada.length; i++) {
// if(wordSeparada[i] === wordSeparadaMaiuscula[i]) {
//    novoArray.push(i);
// }}

// console.log(novoArray)
// aaa

function finalGrade (exam, projects) {
   let notaFinal
   
   if (exam > 90 || projects > 10) {
     notaFinal = 100
   } else if( exam > 75 || projects >= 5) {
     notaFinal = 90
   } else if (exam > 50 || projects >= 2) {
     notaFinal = 75
   } else if (exam < 50 || projects < 2) {
     notaFinal = 0
   }
   
   return notaFinal
 }