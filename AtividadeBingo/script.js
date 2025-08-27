// Letras do bingo e faixas de números correspondentes
const letras = ['B', 'I', 'N', 'G', 'O'];
const faixas = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75]
};

// Armazena os números já sorteados por letra
const sorteados = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
};

// Definindo os elementos da página
const btnSortear = document.getElementById('btnSortear');
const numSorteado = document.getElementById('num');
const corpoTabela = document.getElementById('tbody');
const cabecalhoTabela = document.querySelector('thead');

// Cria automaticamente o cabeçalho da tabela
function montarCabecalho() {
    const linhaCabecalho = document.createElement('tr');
    letras.forEach(letra => {
        const th = document.createElement('th');
        th.textContent = letra;
        linhaCabecalho.appendChild(th);
    });
    cabecalhoTabela.appendChild(linhaCabecalho);
}

// Garante que uma linha existe antes de preencher
function verificacaoLinhas(indice) {
    while (corpoTabela.rows.length <= indice) {
        const linha = document.createElement('tr');
        letras.forEach(() => {
            const celula = document.createElement('td');
            celula.classList.add('vazio');
            linha.appendChild(celula);
        });
        corpoTabela.appendChild(linha);
    }
}

// Preenche a tabela na posição correta
function atualizarTabela(letra, numero) {
    const coluna = letras.indexOf(letra);
    const linha = sorteados[letra].length - 1;

    verificacaoLinhas(linha);

    const celula = corpoTabela.rows[linha].cells[coluna];
    celula.textContent = numero;
    celula.className = 'preenchido';
}

// Sorteia um número aleatório dentro da faixa
function gerarNumero() {
    return Math.floor(Math.random() * 75) + 1;
}

// Descobre a letra correspondente ao número sorteado
function identificarLetra(numero) {
    for (const letra in faixas) {
        const [min, max] = faixas[letra];
        if (numero >= min && numero <= max) {
            return letra;
        }
    }
}

// Função principal de sorteio
function sortearNumero() {
    const numero = gerarNumero();
    const letra = identificarLetra(numero);

    // Evita números repetidos
    if (sorteados[letra].includes(numero)) {
        return sortearNumero();
    }

    // Salva número sorteado
    sorteados[letra].push(numero);

    // Atualiza tabela e display
    atualizarTabela(letra, numero);
    numSorteado.textContent = `${letra} ${numero}`;
}

// Inicializa cabeçalho e adiciona evento ao botão
montarCabecalho();
btnSortear.addEventListener('click', sortearNumero);
