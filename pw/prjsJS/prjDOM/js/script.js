var btnEnviar = document.querySelector("#btnEnviar");
var dados = document.querySelector(".dados");

var nome = document.querySelector("#txNome")
var sobrenome = document.querySelector("#txSobrenome")
var email = document.querySelector("#txEmail")
var dataNasc = document.querySelector("#txDataNasc")
var telefone = document.querySelector("#txTelefone")
var assunto = document.querySelector("#txAssunto")
var msg = document.querySelector("#txMsg")

btnEnviar.addEventListener("click",mostrarDados);

function mostrarDados(){
    dados.style.display = "flex";
    dados.innerHTML = `
        <p class="textoDados">Nome:               <span>${nome.value}</span> </p>
        <p class="textoDados">Sobrenome:          <span>${sobrenome.value}</span> </p>
        <p class="textoDados">E-mail:             <span>${email.value}</span> </p>
        <p class="textoDados">Data de Nascimento: <span>${dataNasc.value}</span> </p>
        <p class="textoDados">Telefone:           <span>${telefone.value}</span> </p>
        <p class="textoDados">Assunto:            <span>${assunto.value}</span> </p>
        <p class="textoDados">Mensagem:           <span>${msg.value}</span> </p>
    `;
}