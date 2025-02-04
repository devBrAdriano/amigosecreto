
let amigos = [];
let amigo;

const campoAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");


function adicionarAmigo(){
        if (resultado.textContent !== ""){
            listaAmigos.innerHTML = "";
            resultado.innerHTML = "";
            amigos = []
        }

        amigo = campoAmigo.value == "" ? prompt('Por favor insira um nome'): campoAmigo.value;
        amigos.push(amigo);

        campoAmigo.value = "";

        atualizarAmigos()
}

function atualizarAmigos(){

    listaAmigos.innerHTML = "";
    amigos.forEach((a)=>{

        let item = document.createElement("li");
        item.innerText = a;

        listaAmigos.appendChild(item);
    })
}

function sortearAmigo(){
        if (amigos.length > 0){
            let indice = Math.floor(Math.random() * amigos.length);
            resultado.innerHTML = `O amigo sorteado foi ${amigos[indice]}`;
        } else {
            adicionarAmigo()
        }
}
