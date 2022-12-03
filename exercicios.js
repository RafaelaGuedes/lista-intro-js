// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
 // num1 = Number(prompt("Escreve o primeiro número:"));
 // num2 = Number(prompt("Escreve o segundo número:"));
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Escreve a altura:"));
  let largura = Number(prompt("Escreve a largura:"));
  let area = altura*largura;
  //return console.log("A área do retângulo é "+area);
  return console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Insira o ano atual: "));
  let anoNasc = Number(prompt("Insira seu ano de nascimento:"));
  let idade = anoAtual-anoNasc;
  //return console.log(`Sua idade é ${idade} anos`);
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  //peso = Number(prompt("Insira seu peso:"));
  //altura = Number(prompt("Insira sua altura:"));
  let imc = (peso/(altura*altura));
  //return console.log("Seu IMC é"+imc);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Insira seu nome:");
  let idade = prompt("Insira sua idade");
  let email = prompt("Insira seu e-mail");
  //return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}.`);
  //console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}.`);
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor01 = prompt("Insira uma cor favorita:");
  let cor02 = prompt("Insira a segunda cor favorita:");
  let cor03 = prompt("Insira a terceira cor favorita:");
  let array = [cor01, cor02, cor03];
  return console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  //string = prompt("Qual o dia da semana de hoje?").toUpperCase();
  //console.log("String Maiscula:"+string);
  return (string.toUpperCase());
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  //custo = Number(prompt("Insira o custo do espetáculo:"));
  //valorIngresso = Number(prompt("Insira o valor do ingresso:"));
  let quantIngresso = custo/valorIngresso;
  //return console.log(`É necessário vender ${quantIngresso} ingressos.`)
  return quantIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  //string1 = prompt("Insira a primeira string:");
  //string2 = prompt("Insira a segunda string:");
  return (Number(string1.length) === Number(string2.length))
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  //array = prompt("Insira os elementos de um array:");
  return(array[0]);
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  //array = prompt("Insira os elementos de um array:");
  //let tamanho = Number(array.lenght);
  //let ultimo = array[1];
  //return console.log("Último elemento:"+array[array.length - 1]);
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //array = prompt("Insira os elementos de um array:");
  //return array.splice(array[0],array[array.length-1]);
  array.splice(array.length, 0, array.splice(0,1)[0]);
  array.splice(0, 0, array.splice(array.length-2,1)[0]);
  return (array);
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  //string1 = prompt("Insira a primeira string:").toLowerCase();
  //string2 = prompt("Insira a segunda string:").toLowerCase();
  //string1.toUpperCase().lenght;
  return (string1.length === string2.length);
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = prompt("Qual o ano atual:");
let anoNasc = prompt("Qual seu ano de nascimento:");
let anoRG = prompt("Qual o ano de emissão do RG:");

let idade = anoAtual - anoNasc;
let anoRen = anoAtual - anoRG;

if(idade<=20){
  console.log(anoRen>=5);
}else if(idade>20 && idade<=50){
  console.log(anoRen>=10);
}else if(idade>50){
  console.log(anoRen>=15);
}
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if( (ano%100!=0) && (ano%4==0) || (ano%400==0) ){
    return true;
  }else{
    return false;
  }
}


  // EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let idade = prompt("tem mais de 18?").toLowerCase();
let ensino = prompt("tem ensino médio completo?").toLowerCase();
let horario = prompt("tem disponibilidade de horários?").toLowerCase();

if(idade=="sim" && ensino=="sim" && horario=="sim"){
  console.log (true);
}else{
  console.log (false);
}
}