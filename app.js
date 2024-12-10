let listaDeNumerosSorteados = []; //array ou lista sempre vai entre colchetes. A primeira posição sempre será a zero
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log (numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
      //  {rate: 1.2});
      if ('speechSynthesis' in window) { // código de narração nativo dos navegadores principais
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
    }

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
        
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let = palavraTentativa = tentativas > 1 ? 'Tentativas': "Tentativa" ;
        let mensagemTentativas = `Você descobriu o numero secreto com 
        ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        
        if (chute > numeroSecreto){
        exibirTextoNaTela('p' , 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p' , 'O numero secreto é maior');   
        }
        tentativas++ ;
        limparCampo() ; 
    }
    }
function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //parseInt(Math.random() * 10 + 1 gera um numero aleatório de 1 a 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }    
    if(listaDeNumerosSorteados.includes(NumeroEscolhido)){  //.includes verifica se o numero escolhido já está na lista de numeros sorteados
        return gerarNumeroAleatorio(); // caso o numero escolhido já estiver incluido no numero sorteado o Return(recursão) faz gerar um novo numero aleatório 
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);  // .push adiciona na lista de numeros sorteados o numero escolhido, sempre na ultima posição da lista
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;  // retorna o numero escolhido
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}