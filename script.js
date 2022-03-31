const oqueSaoDiv = document.getElementById('oque-sao');
const buttons = document.getElementById('button-list');

function mostrarOqueSao() {
    oqueSaoDiv.style.display = 'initial';
    buttons.style.display = 'none';
}

function mostrarExemplos() {

}

function voltar() {
    oqueSaoDiv.style.display = 'none';
    buttons.style.display = 'flex';
}