////////////////////////////////////////////////////////////

// CODIFICA��O DO TIPO (CORE) DO GAME JAINECALCULOS!
// AUTOR: VALDINEY FRAN�A 
// VERS�O: 1.0
// DATA: 04/06/2013
// EMAIL: valdiney.2@hotmail.com
// GRUPO DE ESTUDOS EM INFORM�TICA: cssshark.wordpress.com

////////////////////////////////////////////////////////////

window.onload = function(){
 $(document).ready(function(){

/////////////////////////////////////
var vetor_acertos = [0];
var vetor_erros = [0];
////////////////////////////////////
// Bot�o confirmar inicia desabilitado
botaoConfirmar("none");
//////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// FUN��O DEFININDO O TEMPO PARA O DESAFIO
// 
///////////////////////////////////////////////////////////////////////////////////////////////////
function tempoParaDesafio(){
 var vetor_guardaOtempo = [0];
var intervalo_tempoDesafio = window.setInterval(function_intervalo,1000);
 function function_intervalo() {
  vetor_guardaOtempo[0]+=1;


document.getElementById('conometro').innerHTML = vetor_guardaOtempo[0];
var limite_deTempo = document.getElementById('select_tempo').value; // Determina a dura��o da prova
 if( vetor_guardaOtempo[0] == limite_deTempo ) {
  clearInterval(intervalo_tempoDesafio); // Para o conometro
var divApresentaRespostas = document.getElementById('divApresentaRespostas').style.display = "block";
  
  osCorretos.innerHTML = "Corretos: "+vetor_acertos[0];
  osErrados.innerHTML = "Errados: "+vetor_erros[0];

  } // end verifica se o tempo chegou no limite
 } // end function intervalo
} // end tempo para o desafio

///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// FUN��O GERA OS N�MEROS RAMD�MICOS E CALCULA O PRODUTO DOS OPERANDOS
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function numerosRandomicos() {
var comometroParaGerarOsNumeros = window.setTimeout(gerandoOsNumeros,0000);
 function gerandoOsNumeros() {
/* Campo operando1 */ primeiroNumeroInteiro = document.getElementById('select_operando1').value;
/* Campo operando2 */   segundoNumeroInteiro = document.getElementById('select_operando2').value;
 gerandoOprimeiroNumero = Math.floor( Math.random() * primeiroNumeroInteiro + 0);
 gerandoOsegundoNumero = Math.floor( Math.random() * segundoNumeroInteiro + 0);

 // Incrementando a op��o de escolher a opera��o matem�tica...

var operacao = document.getElementById('select_operacao').value;

if (operacao == "adicao") {
 produtoDosOperandosGerados = Number(gerandoOprimeiroNumero + gerandoOsegundoNumero);
 var visordosOperandos = document.getElementById('mostra_operandos');
 visordosOperandos.innerHTML = gerandoOprimeiroNumero+" + "+gerandoOsegundoNumero+" = ";
 
} else if(operacao == "subtra��o"){
	
	gerandoOprimeiroNumero = Math.floor( Math.random() * 80 + 0);
  gerandoOsegundoNumero = Math.floor( Math.random() * 30 + 0);
  ////////////////////// FASE DE TESTE...

 produtoDosOperandosGerados = Number(gerandoOprimeiroNumero - gerandoOsegundoNumero);
 var visordosOperandos = document.getElementById('mostra_operandos');
 visordosOperandos.innerHTML = gerandoOprimeiroNumero+" - "+gerandoOsegundoNumero+" = ";

} else{
 produtoDosOperandosGerados = Number(gerandoOprimeiroNumero * gerandoOsegundoNumero);
 var visordosOperandos = document.getElementById('mostra_operandos');
 visordosOperandos.innerHTML = gerandoOprimeiroNumero+" x "+gerandoOsegundoNumero+" = ";
}


 } // n�meros Rand�micos
} // end gerando os n�meros Rand�micos


///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// FUN��O COME�AR: CHAMA AS DEMAIS FUN��ES
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var comecar = document.getElementById('comecar');
comecar.onclick = function(){
 tempoParaDesafio(); // Chama a fun��o que gera o tempo para o desafio
 numerosRandomicos(); // Chamando a fun��o geradora de rand�micos
 botaoComecar("none"); // Chamando e passando valor para fun��o.
 botaoConfirmar("block"); // Chamando e passando valor para fun��o
 document.getElementById('campo').focus();
 
} // end come�ar e confirmar
 
///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// FUN��O CONFIRMA A RESPOSTA DAS PERGUNTAS
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var confirmarResposta = document.getElementById('confirmar').onclick = function(){
numerosRandomicos();

var osCorretos = document.getElementById('osCorretos');
var osErrados = document.getElementById('osErrados');
var campoDeRespostas = Number(document.getElementById('campo').value);
document.getElementById('campo').value = '';
document.getElementById('campo').focus();

///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// GUARDA VALORES NOS VETORES 
//
///////////////////////////////////////////////////////////////////////////////////////////////////
if (campoDeRespostas == produtoDosOperandosGerados) {
 vetor_acertos[0]+=1; //
   animationRespostaCoporretas();
} else if(campoDeRespostas == '') {
 vetor_erros[0]+=1; //
    animationRespostaErradas();
} else{
 vetor_erros[0]+=1; //
} // end condicionais

///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// APRESENTA AS IMAGENS AO FIM DO GAME RELEVANTE AO RESULTADO
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var vetor_imagens = [
'img_fim/img_bem.png',
'img_fim/img_mal.png',
'img_fim/img_empate.png'
];
if(vetor_erros[0] < vetor_acertos[0]) {
    document.getElementById('img_fim').src = vetor_imagens[0];
} else if(vetor_erros[0] > vetor_acertos[0]){
   document.getElementById('img_fim').src = vetor_imagens[1];
} else if(vetor_erros[0] == vetor_acertos[0]){
   document.getElementById('img_fim').src = vetor_imagens[2];
 } // end condicional
} //end confirmar resposta
 

// SE DESEJAR COLOCAR INTERA��O COM O TECLADO FA�A-O NESTE ESPA�O...

///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// FUN��O DESABILITA A TELA QUE APRESENTA OS RESULTADOS 
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var desabilitadivApresentaRespostas = document.getElementById('close_divApresentaRespostas');
desabilitadivApresentaRespostas.onclick = function() {
 document.getElementById('divApresentaRespostas').style.display = 'none';
 
botaoConfirmar("none"); //Chamando e passando valor para fun��o
botaoComecar('block'); //Chamando e passando valor para fun��o
document.getElementById('campo').value = ''; //Limpa o campo de resposta
document.getElementById('mostra_operandos').innerHTML = ''; //Limpa o o visor dos operandos
////////////////////////////////////////////
// Zerando os vetores 
vetor_acertos[0]=0;
vetor_erros[0]=0;

reoveClasseTrocaFundo();
} // end desabilita

/////////////////////////////////////////////////////////////////////////////
/*
Estas duas fun��es d�o uma pista de acerto e erro no momento que � respondido a pergunta
Trocando as imagens de fundo da �rea interm�diaria.
*/
var animationRespostaCoporretas = function(){
  $(".Classapresentacao_intermediaria").addClass('AnimacaoSeCorretos');
  $(".Classapresentacao_intermediaria").removeClass('AnimacaoSeErradas');
}
var animationRespostaErradas = function(){
  $(".Classapresentacao_intermediaria").addClass('AnimacaoSeErradas');
  $(".Classapresentacao_intermediaria").removeClass('AnimacaoSeCorretos');
}
var reoveClasseTrocaFundo = function(){
    $(".Classapresentacao_intermediaria").removeClass('AnimacaoSeCorretos');
    $(".Classapresentacao_intermediaria").removeClass('AnimacaoSeErradas');
}
/////////////////////////////////////////////////////////////////////////////





 }) //end jquery
} //end window
