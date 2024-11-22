let nomes = [];

document.getElementById('adicionar').addEventListener('click', function() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    if (nome) {
        nomes.push(nome);
        nomeInput.value = '';
        nomeInput.focus();
        document.getElementById('sortear').disabled = false; // Ative o botão de sortear
        alert(nome + ' adicionado!');
    } else {
        alert('Por favor, insira um nome!');
    }
});

document.getElementById('sortear').addEventListener('click', function() {
    if (nomes.length === 0) {
        alert('Adicione nomes antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    document.getElementById('resultado').textContent = 'Nome sorteado: ' + nomeSorteado;
});
