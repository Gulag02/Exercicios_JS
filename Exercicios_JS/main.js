/* ---------------------------------------------------------------------------------------------------*/
/*↓ Exercicio 1 ↓ */
/* let nome = prompt("Qual é seu nome ? ");
alert("Bem vindo, " + nome);

alert(nome + " digite dois numeros")


let n1 = parseInt(prompt("Digite o primeiro numero : "));
let n2 = parseInt(prompt("Digite o segundo numero : "));

alert (n1+n2); */

/*↑ Exercicio 1 ↑ */

/* ---------------------------------------------------------------------------------------------------*/
/*↓ Exercicio 2 ↓ */

//pedir para o usuario digitar um numero                                    
//converter em numero inteiro                                    
//pedir para o usuario digitar outro numero                        
//converter em numero inteiro                        
//mostrar a subtração concatenando com o texto "a subtração é: ..."   
/* let s1 = parseInt(prompt("Digite um numero : "));
let s2 = parseInt(prompt("Digite outro numero"));

alert("A subtração é : " + (s1-s2)); */

//mostrar a multiplicação concatenando com o texto "a multiplicação é: ..." 
/* let m1 = parseInt(prompt("Digite um numero : "));
let m2 = parseInt(prompt("Digite outro numero : "));

alert("O resultado da multipicação é : " + (m1*m2)); */

//mostrar a divisão concatenando com o texto "a divisão é: ..." 
/* let d1 = parseInt(prompt("Digite um numero : "));
let d2 = parseInt(prompt("Digite outro numero :"));

alert("O resultado da divisão é : " + (d1/d2));   */

//mostrar a soma concatenando com o texto "a soma é: ..."
/* let n1 = parseInt(prompt("Digite o primeiro numero : "));
let n2 = parseInt(prompt("Digite o segundo numero : "));

alert (n1+n2);  */

/*↑ Exercicio 2 ↑ */
/* ---------------------------------------------------------------------------------------------------*/
/*↓ Exercicio 3 ↓ */

/* Calcular média */

/* let nota1 = parseFloat(prompt("Digite sua primeira nota : "));
let nota2 = parseFloat(prompt("Digite sua segunda nota : "));
let nota3 = parseFloat(prompt("Digite sua terceira nota : "));
let nota4 = parseFloat(prompt("Digite sua quarta nota : "));

let media =(nota1+nota2+nota3+nota4)/4;

alert("Sua média é : " + media); */

/*↑ Exercicio 3  ↑*/
/* ---------------------------------------------------------------------------------------------------*/
/*↓ Exercicio 4 ↓ */

/* Perdir para o usuario digitar dois numeros e mostrar um boolean indicando se a média é maior que 5 */

/* let digito1 = parseFloat(prompt("Digite um numero : "));

let digito2 = parseFloat(prompt("Digite outro numero : "));

let media = (digito1+digito2)/2;

alert("A media é maior que 5? ")
alert(media > 5) */

/*↑ Exercicio 4  ↑*/
/* ---------------------------------------------------------------------------------------------------*/
/*↓ Exercicio 5 ↓ */
/* 
let digito1 = parseFloat(prompt("Digite um numero : "));

let digito2 = parseFloat(prompt("Digite outro numero : "));

let media = (digito1+digito2)/2;

alert("A media é maior que 5? ")
alert(media > 5)

if(media>5){
    alert("Parabens você está aprovado")
}else{
    alert("Estude mais na proxima vez !!!")
} */


/*↑ Exercicio 5  ↑*/
/* ---------------------------------------------------------------------------------------------------*/

/*↓ Exercicio 6  ↓ */
/* fazer jogador 1 digitar um numero
fazer o jogador 2 digitar outro numero
se forem iguais EMPATE 
Sortear um numero de 0 a 1 
se o numero sorteado for 0, ganha quem escolheu o numero menor
se o numero sorteado for 1, ganha quem escolheu o numero maior */

let jogador1 = parseInt(prompt("Jogador 1 digite um numero : "))
let jogador2 = parseInt(prompt("Jogador 2 digite outro numero : "))
let sorteio = parseInt(Math.random() * 2)


if (jogador1 === jogador2) {
    alert("Empate!!!")
}else if (jogador1 < jogador2) {
    alert("Jogador 1 ganhou!")
}else if (jogador2 > jogador1) {
    alert("jogador 2 ganhou!")
}









/*↑ Exercicio 6  ↑*/


