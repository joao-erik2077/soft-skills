const oqueSaoDiv = document.getElementById('oque-sao');
const exemplosDiv = document.getElementById('exemplos');
const buttons = document.getElementById('button-list');

function mostrarOqueSao() {
    oqueSaoDiv.style.display = 'initial';
    buttons.style.display = 'none';
}

function mostrarExemplos() {
    exemplosDiv.style.display = 'initial';
    buttons.style.display = 'none';
}

function voltar() {
    oqueSaoDiv.style.display = 'none';
    exemplosDiv.style.display = 'none';
    buttons.style.display = 'flex';
}