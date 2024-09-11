//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo secreto Carlos';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Aprendendo';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();/* 8;*/
let tentativas = 1;
function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});
}
function exibirMensagemInicial () {
exibirNaTela('h1', 'Jogo do numero secreto 2.0');
exibirNaTela('p','Escolha um numero de 1 a 10');

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    console.log(chute == numeroSecreto);

        if (chute == numeroSecreto){
            exibirNaTela ('h1', 'Acertou');
            let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavratentativa}!`;
            exibirNaTela ('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            if (chute > numeroSecreto){
                exibirNaTela('p', 'O número secreto é menor!');
            }else{
                exibirNaTela('p', 'O número secreto é maior!');
            }
            tentativas++;
            limparCampo();
        }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
        if(quantidadeDeElementosNaLista == numeroLimite){
            listaDeNumerosSorteados = [];
        }
        if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
        } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
            }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}