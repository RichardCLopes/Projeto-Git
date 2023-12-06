function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf == '' || cpf.length != 11) {
        return false;
    }
    // Validar CPF usando algoritmo
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11) {
        resto = 0;
    }
    if (resto != parseInt(cpf.charAt(9))) {
        return false;
    }
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto == 10 || resto == 11) {
        resto = 0;
    }
    if (resto != parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
}

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
}

function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var cpfInput = document.getElementById('cpf');
    var cpf = cpfInput.value;

    if (nome.trim() === '') {
        alert('Por favor, insira um nome válido.');
        return false;
    }

    if (!validarCPF(cpf)) {
        alert('Por favor, insira um CPF válido.');
        return false;
    }

    // Formatar o CPF antes de enviar (opcional)
    cpfInput.value = formatarCPF(cpf);

    // Continue com o envio do formulário ou outras ações necessárias
    alert('Formulário enviado com sucesso!');
    return true;
}

function mascaraCPF(event) {
    var cpfInput = event.target;
    var cpf = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cpfInput.value = formatarCPF(cpf);
}