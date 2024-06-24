function soma() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    
    if (document.getElementById('numero1').value == "" || document.getElementById('numero2').value == "") {
        alert('Informe um dos valores faltantes para dar prosseguimento');
        return;
    }

    let resultado = numero1 + numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} + ${numero2} é = ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function subtracao() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    
    if (document.getElementById('numero1').value == "" || document.getElementById('numero2').value == "") {
        alert('Informe um dos valores faltantes para dar prosseguimento');
        return;
    }

    let resultado = numero1 - numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} - ${numero2} é = ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function multiplicacao() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    
    if (document.getElementById('numero1').value == "" || document.getElementById('numero2').value == "") {
        alert('Informe um dos valores faltantes para dar prosseguimento');
        return;
    }

    let resultado = numero1 * numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} x ${numero2} é = ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function divisao() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    
    if (document.getElementById('numero1').value == "" || document.getElementById('numero2').value == "") {
        alert('Informe um dos valores faltantes para dar prosseguimento');
        return;
    }

    let resultado = numero1 / numero2;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `${numero1} / ${numero2} é = ${resultado}`;
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
}

function limpar() {
    if (document.getElementById('valor-total').textContent == "") {
        alert('Faça uma operação para poder zerar o campo "Resultado" !');
    } else {
        document.getElementById('valor-total').textContent = ''; 
    }
}


