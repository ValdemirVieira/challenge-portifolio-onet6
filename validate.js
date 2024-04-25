//Seu JavaScript de validação aqui
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputAssunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('botao');
const mensagemErro = document.getElementById('msgErr'); //Precisa corrigir

function validarNome() {
    if(inputNome.value.length < 10 || inputNome.value.length > 50) {
        mensagemErro.innerText = 'O campo nome deve conter, no mínimo, 10 caracteres.';

        return false;
    } else {
        mensagemErro.innerText = 'Nome válido!';

        return true;
    }
}

function validarEmail() {}

function validarAssunto() {
    if(inputAssunto.value.length < 10 || inputAssunto.value.length > 50) {
        mensagemErro.innerText = 'O campo assunto deve conter, no mínimo, 10 caracteres.';

        return false;
    } else {
        mensagemErro.innerText = 'Campo assunto válido!';

        return true;
    }
}

function validarMensagem() {
    if(mensagem.value.length < 10 || inputAssunto.value.length > 300) {
        mensagemErro.innerText = 'O campo mensagem deve conter, no mínimo, 10 caracteres e, no máximo, 300 caracteres.';

        return false;
    } else {
        mensagemErro.innerText = 'Mensagem válida!';

        return true;
    }
}

function validarform() {
    const nomeValido = validarNome();
    const assuntoValido = validarAssunto();
    const mensagemValida = validarMensagem();

    return nomeValido && assuntoValido && mensagemValida;
}

function btnValidar() {
    if(validarform()) {
        alert('Formulário enviado!');

        limpaCampo();
    } else {
        alert('É necessário  preencher todos os campos do formulário.');
    }
}

function limpaCampo() {
    inputNome = document.querySelector('input');
    inputNome.value = '';

    inputAssunto = document.querySelector('input');
    inputAssunto.value = '';

    mensagem = document.querySelector('input');
    mensagem.value = '';
}