
function soma() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    if (numero1.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    let resultado = numero1 + numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} + ${numero2}, é: ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function subtracao() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    if (numero1.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    let resultado = numero1 - numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} - ${numero2}, é: ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function multiplicacao() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    if (numero1.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    let resultado = numero1 * numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} x ${numero2}, é: ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function divisao() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    if (numero1.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    let resultado = numero1 / numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} / ${numero2}, é: ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function limpar() {
    document.getElementById('valor-total').textContent = ' '; 
}