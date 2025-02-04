//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indiceSorteado, 1)[0]; // Remove o nome sorteado do array

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
    
    atualizarLista();
    
    if (amigos.length === 0) {
        setTimeout(() => {
            alert("Todos os amigos foram sorteados! A lista será reiniciada.");
            limparLista();
        }, 2000);
    }
}

function limparLista() {
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
