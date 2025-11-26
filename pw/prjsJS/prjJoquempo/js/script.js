var btnPedra = document.querySelector('#btnPedra');
var btnPapel=document.querySelector('#btnPapel');
var btnTesoura=document.querySelector('#btnTesoura')
var divResposta=document.querySelector('#resposta');
var divStats=document.querySelector('#divStats');

var statsTxRodadas=document.querySelector('#statsTxRodadas');
var statsTxVitorias=document.querySelector('#statsTxVitorias');
var statsTxDerrotas=document.querySelector('#statsTxDerrotas');
var btnResetStats=document.querySelector('#btnResetStats');

btnPedra.addEventListener('click', ()=>game("pedra"));
btnPapel.addEventListener('click', ()=>game("papel"));
btnTesoura.addEventListener('click', ()=>game("tesoura"));
btnResetStats.addEventListener('click', resetStats);

var rodadas=0;
var vitorias=0;
var derrotas=0;

// papel   GANHA pedra
// papel   PERDE tesoura
// pedra   GANHA tesoura
// pedra   PERDE papel
// tesoura GANHA papel
// tesoura PERDE pedra


function game(escolha){
    
    var rng = (Math.random() * 2).toFixed(0);
    //console.log(rng)
    
    if(escolha==="pedra"){
        if(rng==0){
            divResposta.innerHTML=`
                <h2>Eu escolho PEDRA</h2>
                <h2 class="respostaFinal respostaEmpate">EMPATE</h2>
            `
        }else if(rng==1){
            vitorias++;
            divResposta.innerHTML=`
                <h2>Eu escolho TESOURA</h2>
                <h2 class="respostaFinal respostaGanhou">VOCÊ SOBREVIVEU</h2>
            `
        }else{
            derrotas++;
            divResposta.innerHTML=`
                <h2>Eu escolho PAPEL</h2>
                <h2 class="respostaFinal respostaPerdeu">VOCÊ MORREU</h2>
            `
        }
    }

    else if(escolha==="papel"){
        if(rng==0){
            vitorias++;
            divResposta.innerHTML=`
                <h2>Eu escolho PEDRA</h2>
                <h2 class="respostaFinal respostaGanhou">VOCÊ SOBREVIVEU</h2>
            `
        }else if(rng==1){
            derrotas++;
            divResposta.innerHTML=`
                <h2>Eu escolho TESOURA</h2>
                <h2 class="respostaFinal respostaPerdeu">VOCÊ MORREU</h2>
            `
        }else{
            divResposta.innerHTML=`
                <h2>Eu escolho PAPEL</h2>
                <h2 class="respostaFinal respostaEmpate">EMPATE</h2>
            `
        }
    }

    else if(escolha==="tesoura"){
        if(rng==0){
            derrotas++;
            divResposta.innerHTML=`
                <h2>Eu escolho PEDRA</h2>
                <h2 class="respostaFinal respostaPerdeu">VOCÊ MORREU</h2>
            `
        }else if(rng==1){
            divResposta.innerHTML=`
                <h2>Eu escolho TESOURA</h2>
                <h2 class="respostaFinal respostaEmpate">EMPATE</h2>
            `
        }else{
            vitorias++;
            divResposta.innerHTML=`
                <h2>Eu escolho PAPEL</h2>
                <h2 class="respostaFinal respostaGanhou">VOCÊ SOBREVIVEU</h2>
            `
        }
    }
    rodadas++;

    atualizarStats()
}


function atualizarStats(){
    statsTxRodadas.innerHTML = rodadas;
    statsTxVitorias.innerHTML = vitorias;
    statsTxDerrotas.innerHTML = derrotas;
}


function resetStats(){
    var temctz = confirm("Tem certeza que deseja apagar TODAS suas estatísticas?");

    if(temctz){
        rodadas=0;
        vitorias=0;
        derrotas=0;
        atualizarStats()
    }
}
